import React from 'react'
import { Link } from 'react-router-dom'

import JobCard from './JobCard'

const JobList = ({ jobs }) =>
  <div>
    {jobs.map(job =>
      <Link key={job.id} to={`/jobs/${job.id}`}>
        <JobCard job={job} />
      </Link>)}
  </div>

export default JobList
