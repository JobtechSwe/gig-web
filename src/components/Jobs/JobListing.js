import React, { Component } from 'react'

import colors from '../../colors'

import Job from '../Jobs/Job'
import Loader from '../Spinner/Loader'

class JobListing extends Component {
  componentDidMount() {
    const { match, fetchJob } = this.props
    fetchJob(match.params.jobId)
  }

  render() {
    const { isLoading, job } = this.props

    return (
      <div className="container" style={{ marginTop: '1.1em' }}>
        {
          isLoading
            ? <Loader color={colors.gray50} size={50} />
            : <Job job={job} />
        }
      </div>
    )
  }
}

export default JobListing
