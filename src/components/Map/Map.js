import React from 'react'
import { MarkerClusterer } from 'react-google-maps/lib/components/addons/MarkerClusterer'

import mapStyles from '../../resources/map.json'
import markerIcon from '../../resources/img/marker.svg'
import { withGoogleMap, withScriptjs, GoogleMap, Marker } from 'react-google-maps'

const Map = withScriptjs(withGoogleMap(({ lat, lng, jobs, onSelectJob, onMapClick }) =>
  <GoogleMap
    defaultZoom={10}
    defaultCenter={{ lat, lng }}
    defaultOptions={{ styles: mapStyles, disableDefaultUI: true }}
    onClick={onMapClick}
  >
    <MarkerClusterer
      onClick={() => {}}
      averageCenter
      enableRetinaIcons
      gridSize={60}
    >
      {
        jobs.map(job =>
          <Marker
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
