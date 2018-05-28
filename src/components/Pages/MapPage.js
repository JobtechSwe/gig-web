import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
import { withGoogleMap, withScriptjs, GoogleMap, Marker } from 'react-google-maps'

import mapStyles from '../../resources/map.json'
import markerIcon from '../../resources/img/marker.svg'

import colors from '../../colors'

import Body from '../Card/Body'
import Card from '../Card/Card'
import Title from '../Card/Title'
import Header from '../Card/Header'
import Preamble from '../Card/Preamble'
import SourceImage from '../Card/SourceImage'

import Duration from '../Card/Icons/Duration'
import Location from '../Card/Icons/Location'
import IconContainer from '../Card/Icons/IconContainer'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const CloseButton = styled(({ className }) => <Link to="/" className={className}><i className="i-times"></i> Close</Link>)`
  position: absolute;
  top: 80px;
  left: 10px;
  color: black;
  z-index: 100000;
`

const Spinner = styled.div`
  height: 50px;
  width: 50px;
  border: 3px solid ${colors.gray50};
  border-left-color: transparent;
  border-bottom-color: transparent;
  border-radius: 2000px;
  animation: ${rotate} 500ms linear infinite;
`

const Loader = styled(
  ({ className }) => <div className={className}><Spinner /></div>
)`
  height: calc(100vh - 50px);
  display: flex;
  align-items: center;
  justify-content: center;
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

const cleanPreamble = preamble =>
  preamble
    .replace(/(<([^>]+)>)/ig, ' ') // replace html tags with a space
    .replace(/ {2,}/, ' ') // replace 2 or more spaces with one

const extractCityFromAddress = address =>
  address.includes(',')
    ? address.substr(address.indexOf(',') + 1).trim()
    : address

const firstSentence = (text) =>
  text.indexOf('.') === -1
    ? text
    : text.substr(0, text.indexOf('.') + 1)

const SelectedJobCard = styled(({ className, job }) =>
  <div className={className}>
    <Card>
      <Header>
        <SourceImage source={job.source} />
      </Header>
      <Body>
        <Title>{job.title}</Title>
        <Preamble>
          <span dangerouslySetInnerHTML={{ __html: cleanPreamble(firstSentence(job.preamble)) }} />
        </Preamble>
        <IconContainer style={{ marginTop: '-10px' }}>
          <Location location={extractCityFromAddress(job.address)} />
          <Duration start={job.startDate} end={job.endDate} />
        </IconContainer>
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
      </Body>
    </Card>
  </div>
)`
  position: absolute;
  width: calc(100% - 20px);
  left: 10px;
  bottom: 0;
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
    this.setState({ selectedJob: job })
  }

  unselectJob() {
    this.setState({ selectedJob: undefined })
  }

  render() {
    if (this.state.loading) {
      return <Loader />
    }

    if (!this.state.position) {
      return (
        <div className="container" style={{ textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', height: 'calc(100vh - 50px)' }}>
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

    const header = document.querySelector('.navbar')
    const headerHeight = header ? header.offsetHeight : 60

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
        {this.state.selectedJob && <SelectedJobCard job={this.state.selectedJob} />}
      </div>
    )
  }
}

export default MapPage
