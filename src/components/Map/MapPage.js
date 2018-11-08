import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { CSSTransition } from 'react-transition-group'
import Loader from '../Spinner/Loader'
import Map from './Map'
import MapJobCard from './MapJobCard'
import MultipleSelectedJobsList from './MultipleSelectedJobsList'

import '../../animations.css'
import colors from '../../colors'

const CloseButton = styled(
  ({ className, onClick }) =>
    <Link to="#" onClick={onClick} className={className}>
      <i className="i-times"></i>
    </Link>
)`
  position: absolute;
  top: 80px;
  left: 16px;
  color: black;
  font-size: 24px;
  z-index: 100000;
  text-shadow: 0 0 8px ${colors.gray50};
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
          <MultipleSelectedJobsList
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
          <MapJobCard job={this.state.selectedJob} />
        </CSSTransition>
      </div>
    )
  }
}

export default MapPage
