import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { withGoogleMap, withScriptjs, GoogleMap, Marker } from 'react-google-maps'
import { CSSTransition } from 'react-transition-group'

import '../../animations.css'
import mapStyles from '../../resources/map.json'
import markerIcon from '../../resources/img/marker.svg'
import colors from '../../colors'

import JobCard from '../Jobs/JobCard'
import Loader from '../Spinner/Loader'

const CloseButton = styled(({ className }) => <Link to="/" className={className}><i className="i-times"></i></Link>)`
  position: absolute;
  top: 80px;
  left: 16px;
  color: black;
  font-size: 24px;
  z-index: 100000;
  text-shadow: 0 0 8px ${colors.gray50};
`

const Map = withScriptjs(withGoogleMap(({ lat, lng, jobs, onSelectJob, onMapClick }) =>
  <GoogleMap
    defaultZoom={10}
    defaultCenter={{ lat, lng }}
    defaultOptions={{ styles: mapStyles, disableDefaultUI: true }}
    onClick={onMapClick}
  >
    {jobs.map(job =>
      <Marker
        key={job.id}
        options={{ icon: markerIcon }}
        position={{ lat: Number(job.latitude), lng: Number(job.longitude) }}
        onClick={() => onSelectJob(job)}
      />)}
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

class MapPage extends Component {
  constructor() {
    super()

    this.state = {
      loading: true,
      position: null,
      error: false,
      jobs: [],
      selectedJob: undefined
    }
  }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ position, loading: false }),
      (error) => this.setState({ error, loading: false })
    )

    fetch(`${process.env.REACT_APP_API_HOST}/jobs?page=1&pageLimit=1000`)
      .then(response => response.json())
      .then(data => data.results.results)
      .then(jobs => this.setState({ jobs }))
  }

  selectJob(job) {
    this.setState({ showSelectedJob: true, selectedJob: job })
  }

  unselectJob() {
    this.setState({ showSelectedJob: false })
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
        <CloseButton />
        <Map
          lat={latitude}
          lng={longitude}
          jobs={this.state.jobs}
          onSelectJob={this.selectJob.bind(this)}
          onMapClick={this.unselectJob.bind(this)}
          googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`}
          loadingElement={<div style={{ position: 'relative', height: `calc(100vh - ${headerHeight}px)` }} />}
          containerElement={<div style={{ position: 'relative', height: `calc(100vh - ${headerHeight}px)` }} />}
          mapElement={<div style={{ position: 'relative', height: `calc(100vh - ${headerHeight}px)` }} />}
        />
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
