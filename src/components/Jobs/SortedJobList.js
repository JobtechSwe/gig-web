import React, { Fragment } from 'react'

import AvailableJobsCounter from './AvailableJobsCounter'
import JobList from './JobList'

const getKeywords = (searchString) =>
  searchString
    .split(' ')
    .filter(part => part !== '')

const getJobRelevance = (job, search) =>
  getKeywords(search)
    .reduce((relevance, keyword) => {
      if (job.address.toLowerCase().includes(keyword.toLowerCase())) relevance++
      if (job.title.toLowerCase().includes(keyword.toLowerCase())) relevance++
      if (job.text.toLowerCase().includes(keyword.toLowerCase())) relevance++

      return relevance
    }, 0)

const sortJobs = (jobs, search) => {
  if (search === '' || !search) return jobs

  return jobs
    .sort((a, b) => {
      return getJobRelevance(a, search) > getJobRelevance(b, search) ? -1 : 1
    })
}

const SortedJobList = ({ jobs = [], search = '' }) => {
  const sortedJobs = sortJobs(jobs, search)

  return (
    <Fragment>
      <AvailableJobsCounter count={sortedJobs.length} />
      <JobList jobs={sortedJobs} />
    </Fragment>
  )
}

export default SortedJobList
