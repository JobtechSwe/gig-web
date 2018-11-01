import React from 'react'
import styled from 'styled-components'
import JobCard from '../Jobs/JobCard'
import { Link } from 'react-router-dom'

import colors from '../../colors'

const MapJobCard = styled(({ className, job }) =>
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

export default MapJobCard
