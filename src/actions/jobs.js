import qs from 'query-string'

import { setPagination } from '../actions/search'

export const FETCH_JOBS = 'FETCH_JOBS'
export const SET_JOB = 'SET_JOB'
export const SET_JOBS = 'SET_JOBS'
export const SET_LOADING_JOB = 'SET_LOADING_JOB'

const getJobsUrl = (profile, position, sortingOption, page) => {
  const queryString = qs.stringify({
    orderBy: sortingOption,
    sort: 'asc',
    ...(sortingOption === 'relevance' ? profile : {}),
    ...(sortingOption === 'distance' ? position : {}),
    page,
    pageLimit: 10,
  })

  return `${process.env.REACT_APP_API_HOST}/jobs?${queryString}`
}

export const fetchJobs = () => {
  return (dispatch, getState) => {
    const state = getState()

    const profile = state.profile.profile
    const position = state.location.position
    const sortingOption = state.search.selectedSortingOption
    const page = state.search.pagination.page

    const url = getJobsUrl(profile, position, sortingOption, page)

    return fetch(url)
      .then(response => response.json())
      .then(({ results: jobs, total, totalPages, currentPage } = {}) => {
        return {
          jobs,
          pagination: {
            total,
            currentPage,
            totalPages,
          }
        }
      })
      .then(({ pagination, jobs }) => {
        dispatch(setPagination(pagination))
        dispatch(setJobs(jobs))
      })
  }
}

export const fetchJob = (id) => {
  return (dispatch) => {
    dispatch(setLoadingJob(true))

    fetch(`${process.env.REACT_APP_API_HOST}/job/${id}`)
      .then(response => response.json())
      .then(job => {
        dispatch(setJob(job))
        dispatch(setLoadingJob(false))
      })
  }
}

export const setLoadingJob = (isLoading) => {
  return {
    type: SET_LOADING_JOB,
    isLoading
  }
}

export const setJob = (job) => {
  return {
    type: SET_JOB,
    job
  }
}

export const setJobs = (jobs) => {
  return {
    type: SET_JOBS,
    jobs
  }
}
