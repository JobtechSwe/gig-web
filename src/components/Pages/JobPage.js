import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import dayjs from 'dayjs'

import colors from '../../colors'

import BackButton from '../BackButton'
import Body from '../Card/Body'
import Card from '../Card/Card'
import Header from '../Card/Header'
import Title from '../Card/Title'
import SourceImage from '../Card/SourceImage'

import CalendarIcon from '../Icons/CalendarIcon'
import ClockIcon from '../Icons/ClockIcon'
import MapIcon from '../Icons/MapIcon'

const DATE_FORMAT = 'D MMM'

const ApplyButton = styled(
  ({ className, link }) =>
    <a href={link} target="_blank" className={['btn', 'btn-primary', className].join(' ')}>
      Apply for this job
     </a>
)`
  background: ${colors.primary};
  border-color: ${colors.primary};
  width: 100%;
  font-weight: normal;
  text-transform: none;

  &:hover {
    background: ${colors.primaryDark};
    border-color: ${colors.primary};
  }
`

class JobPage extends Component {
  constructor() {
    super()

    this.state = { job: undefined }
  }

  componentDidMount() {
    const { match } = this.props

    fetch(`${process.env.REACT_APP_API_HOST}/jobs?page=1&pageLimit=1000`)
      .then(response => response.json())
      .then(data => data.results.results)
      .then(jobs => jobs.find(job => job.id === match.params.jobId))
      .then(job => this.setState({ job }))
  }

  render() {
    const { job } = this.state

    return (
      <Fragment>
        <BackButton />
        <div className="container" style={{ marginTop: '1.1em' }}>
          {
            job
              ? this.renderJob(job)
              : this.renderLoader()
          }
        </div>
      </Fragment>
    )
  }

  renderJob(job) {
    return (
      <Card>
        <Header>
          <SourceImage source={job.source} />
        </Header>
        <Body>
          <Title>{job.title}</Title>
          <div style={{ margin: '1em 0' }}><MapIcon /> {job.address}</div>
          <div style={{ margin: '1em 0' }}><CalendarIcon /> {dayjs(job.startDate).format(DATE_FORMAT)} - {dayjs(job.endDate).format(DATE_FORMAT)}</div>
          <div style={{ margin: '1em 0' }}><ClockIcon /> Apply before {dayjs(job.endDate).format(DATE_FORMAT)}</div>

          <ApplyButton link={job.link} />

          <p><strong>About the job</strong></p>

          <div dangerouslySetInnerHTML={{ __html: job.text }} />
          <ApplyButton link={job.link} />
        </Body>
      </Card>
    )
  }

  renderLoader() {
    return <div>Loading...</div>
  }
}

export default JobPage
