import React from 'react'
import { Link } from 'react-router-dom'

import JobCard from './JobCard'

const JobList = ({ jobs }) =>
  <div>
    {jobs.map(job =>
      <Link to={`/jobs/${job.id}`}>
        <JobCard key={job.id} job={job} />
      </Link>)}
  </div>

export default JobList
