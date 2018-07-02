import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import JobCard from './JobCard'
import Masonry from '../Masonry'
import AvailableJobsCounter from './AvailableJobsCounter'

const NoTextDecorationOnHoverLink = styled(Link)`
  &:hover {
    text-decoration: none;
  }
`

class JobList extends Component {
  componentDidMount() {
    this.props.fetchJobs()
  }

  render() {
    const { jobs } = this.props

    return (
      <Fragment>
        <AvailableJobsCounter count={jobs.length} />
        <Masonry.Layout>
          {
            jobs.map(job =>
              <Masonry.Panel key={job.id}>
                <NoTextDecorationOnHoverLink to={`/jobs/${job.id}`}>
                  <JobCard job={job} />
                </NoTextDecorationOnHoverLink>
              </Masonry.Panel>
            )
          }
        </Masonry.Layout>
      </Fragment>
    )
  }
}

export default JobList
