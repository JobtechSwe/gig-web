import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import JobCard from './JobCard'
import Masonry from '../Masonry'

const NoTextDecorationOnHoverLink = styled(Link)`
  &:hover {
    text-decoration: none;
  }
`

const JobList = ({ jobs }) =>
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

export default JobList
