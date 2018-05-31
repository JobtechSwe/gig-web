import React, { Component, Fragment } from 'react'

import colors from '../../colors'

import BackButton from '../BackButton'
import Job from '../Jobs/Job'
import Loader from '../Spinner/Loader'

class JobPage extends Component {
  constructor() {
    super()

    this.state = { job: undefined }
  }

  componentDidMount() {
    const { match } = this.props

    fetch(`${process.env.REACT_APP_API_HOST}/jobs?page=1&pageLimit=1000`)
      .then(response => response.json())
      .then(data => data.results)
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
              ? <Job job={job} />
              : <Loader color={colors.gray50} size={50} />
          }
        </div>
      </Fragment>
    )
  }
}

export default JobPage
