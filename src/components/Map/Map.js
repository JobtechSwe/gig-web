import React from 'react'
import { MarkerClusterer } from 'react-google-maps/lib/components/addons/MarkerClusterer'

import mapStyles from '../../resources/map.json'
import markerIcon from '../../resources/img/marker.svg'
import { withGoogleMap, withScriptjs, GoogleMap, Marker } from 'react-google-maps'

const roundCoordinates = (lat, lng) =>
  [Math.round(lat * 10000) / 10000, Math.round(lng * 10000) / 10000]

const Map = withScriptjs(withGoogleMap(({
  lat, lng, jobs, onSelectJob, onSelectMultipleJobs, onMapClick
}) =>
  <GoogleMap
    defaultZoom={10}
    defaultCenter={{ lat, lng }}
    defaultOptions={{ styles: mapStyles, disableDefaultUI: true }}
    onClick={onMapClick}
  >
    <MarkerClusterer
      onClick={(markerClusterer) => {
        if (markerClusterer.getMap().zoom > 20) {
          const markers = markerClusterer.getMarkers()
          const locations = markers.map(
            marker => roundCoordinates(marker.position.lat(), marker.position.lng()))

          const matchingJobs = jobs.filter(
            job => {
              const [lat, lng] = roundCoordinates(job.latitude, job.longitude)
              const match = locations.some(
                (location) => {
                  return lat === location[0] && lng === location[1]
                }
              )
              return match
            })

          onSelectMultipleJobs(matchingJobs)
        }
      }}
      averageCenter
      enableRetinaIcons
      gridSize={120}
    >
      {
        jobs.map(job =>
          <Marker
            id={job.id}
            key={job.id}
            options={{ icon: markerIcon }}
            position={{ lat: Number(job.latitude), lng: Number(job.longitude) }}
            onClick={() => onSelectJob(job)}
          />)
      }
    </MarkerClusterer>
  </GoogleMap>
))

export default Map
