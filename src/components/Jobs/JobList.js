import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import JobCard from './JobCard'
import Masonry from '../Masonry'
import LoadMoreJobs from './LoadMoreJobs'
import AvailableJobsCounter from './AvailableJobsCounter'
import MapIcon from '../Icons/MapIcon'

const NoTextDecorationOnHoverLink = styled(Link)`
  &:hover {
    text-decoration: none;
  }
`

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

const MapLink = styled(
  ({ className }) => <Link className={className} to="/map"><MapIcon /> Show on map</Link>
)`
  @media(max-width: 768px) {
    display: none;
  }
`

class JobList extends Component {
  componentDidMount() {
    this.props.fetchJobs()
  }

  render() {
    const {
      props: { jobs, pagination, setPage, showSearchOptions }
    } = this

    return !showSearchOptions && (
      <Fragment>
        <Wrapper>
          <AvailableJobsCounter count={pagination.total} />
          <MapLink />
        </Wrapper>
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
        <LoadMoreJobs pagination={pagination} setPage={setPage} />
      </Fragment>
    )
  }
}

export default JobList
