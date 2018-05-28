import React from 'react'

import Card from '../Card/Card'

const JobList = ({ jobs }) =>
  <div>
    {jobs.map(job => <Card key={job.id} job={job} />)}
  </div>

export default JobList
