import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { withGoogleMap, withScriptjs, GoogleMap, Marker } from 'react-google-maps'
import { CSSTransition } from 'react-transition-group'

import '../../animations.css'
import mapStyles from '../../resources/map.json'
import markerIcon from '../../resources/img/marker.svg'
import colors from '../../colors'

import Card from '../Card/Card'
import Body from '../Card/Body'
import JobCard from '../Jobs/JobCard'
import Loader from '../Spinner/Loader'

import { MarkerClusterer } from 'react-google-maps/lib/components/addons/MarkerClusterer'

const CloseButton = styled(({ className, onClick }) => <Link to="#" onClick={onClick} className={className}><i className="i-times"></i></Link>)`
  position: absolute;
  top: 80px;
  left: 16px;
  color: black;
  font-size: 24px;
  z-index: 100000;
  text-shadow: 0 0 8px ${colors.gray50};
`

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

const SelectedJobCard = styled(({ className, job }) =>
  <div className={className}>
    {job && <JobCard job={job} sourceImagePosition="header">
      <Link
        to={`/jobs/${job.id}`}
        className="btn btn-default btn-secondary btn-block"
        style={{
          color: colors.primary,
          borderColor: colors.primary,
          textTransform: 'none',
          marginTop: '20px'
        }}
      >
        Read more about this job
      </Link>
    </JobCard>}
  </div>
)`
  position: absolute;
  width: calc(100% - 20px);
  left: 10px;
  bottom: 0;

  @media(min-width: 768px) {
    width: 500px;
    left: calc(50% - 250px);
  }
`

const MultipleJobsListJob = styled(({ className, job, onSelectJob }) =>
  <div className={className}>
    <h3 style={{ fontSize: '16px', marginRight: '4px' }}>{job.title}</h3>
    <button onClick={() => onSelectJob(job)} style={{
      color: colors.primary,
      borderColor: colors.primary,
      borderWidth: '1px',
      borderRadius: '3px',
      background: 'transparent',
      outline: 0
    }}>Show</button>
  </div>
)`
  display: flex;
  justify-content: space-between;

  &:not(:last-child) {
    padding-bottom: 1em;
    margin-bottom: 1em;
    border-bottom: 1px solid ${colors.gray20};
  }
`

const MultipleSelectedJobs = styled(({ className, jobs, onSelectJob }) =>
  <div className={className}>
    <Card>
      <Body>
        <div style={{ maxHeight: '300px', overflowY: 'scroll' }}>
          {jobs.map(job => <MultipleJobsListJob key={job.id} job={job} onSelectJob={onSelectJob} />)}
        </div>
      </Body>
    </Card>
  </div>
)`
  position: absolute;
  width: calc(100% - 20px);
  left: 10px;
  bottom: 0;

  padding: 20px;

  @media(min-width: 768px) {
    width: 500px;
    left: calc(50% - 250px);
  }
`

class MapPage extends Component {
  constructor() {
    super()

    this.state = {
      loading: true,
      position: null,
      error: false,
      jobs: [],
      showSelectedJob: false,
      showMultipleJobsList: false,
      selectedJob: undefined,
      multipleJobs: [],
    }
  }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ position, loading: false }),
      (error) => this.setState({ error, loading: false })
    )

    fetch(`${process.env.REACT_APP_API_HOST}/jobs?page=1&pageLimit=1000`)
      .then(response => response.json())
      .then(data => data.results)
      .then(jobs => this.setState({ jobs }))
  }

  selectJob(job) {
    this.setState({ showMultipleJobsList: false, showSelectedJob: true, selectedJob: job })
  }

  selectMultipleJobs(jobs) {
    this.setState({ showMultipleJobsList: true, multipleJobs: jobs })
  }

  unselectJob() {
    this.setState({ showSelectedJob: false })
  }

  unselectMultipleJobs() {
    this.setState({ showMultipleJobsList: false })
  }

  render() {
    const header = document.querySelector('.navbar')
    const headerHeight = header ? header.offsetHeight : 60

    if (this.state.loading) {
      return <Loader color={colors.gray50} size={50} />
    }

    if (!this.state.position) {
      return (
        <div className="container" style={{ textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', height: `calc(100vh - ${headerHeight}px)` }}>
          <div style={{ marginBottom: '30px' }}>
            You need to allow GIG to access your position in order to use the map tool.
          </div>

          <Link to="/" className="btn btn-primary btn-block" style={{ background: colors.primary }}>
            Back
          </Link>
        </div>
      )
    }

    const { latitude, longitude } = this.state.position.coords

    return (
      <div>
        <CloseButton onClick={() => this.props.history.goBack()} />
        <Map
          lat={latitude}
          lng={longitude}
          jobs={this.state.jobs}
          onSelectJob={this.selectJob.bind(this)}
          onSelectMultipleJobs={this.selectMultipleJobs.bind(this)}
          onMapClick={() => {
            this.unselectJob()
            this.unselectMultipleJobs()
          }}
          googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`}
          loadingElement={<div style={{ position: 'relative', height: `calc(100vh - ${headerHeight}px)` }} />}
          containerElement={<div style={{ position: 'relative', height: `calc(100vh - ${headerHeight}px)` }} />}
          mapElement={<div style={{ position: 'relative', height: `calc(100vh - ${headerHeight}px)` }} />}
        />
        <CSSTransition
          in={this.state.showMultipleJobsList}
          timeout={300}
          classNames="job-list"
          unmountOnExit
          onExited={() => this.setState({ multipleJobs: [] })}
        >
          <MultipleSelectedJobs
            jobs={this.state.multipleJobs}
            onSelectJob={this.selectJob.bind(this)}
          />
        </CSSTransition>
        <CSSTransition
          in={this.state.showSelectedJob}
          timeout={300}
          classNames="job-card"
          unmountOnExit
          onExited={() => this.setState({ selectedJob: undefined })}
        >
          <SelectedJobCard job={this.state.selectedJob} />
        </CSSTransition>
      </div>
    )
  }
}

export default MapPage
