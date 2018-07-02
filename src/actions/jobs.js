import qs from 'query-string'

export const FETCH_JOBS = 'FETCH_JOBS'
export const SET_JOBS = 'SET_JOBS'

const getJobsUrl = (profile, position, sortingOption) => {
  const queryString = qs.stringify({
    orderBy: sortingOption,
    sort: 'asc',
    ...(sortingOption === 'relevance' ? profile : {}),
    ...(sortingOption === 'distance' ? position : {}),

    // TODO: Implement pagination
    page: 1,
    pageLimit: 1000,
  })

  return `${process.env.REACT_APP_API_HOST}/jobs?${queryString}`
}

export const fetchJobs = () => {
  return (dispatch, getState) => {
    const state = getState()

    const profile = state.profile.profile
    const position = state.location.position
    const sortingOption = state.search.selectedSortingOption

    const url = getJobsUrl(profile, position, sortingOption)

    return fetch(url)
      .then(response => response.json())
      .then(data => data.results)
      .then(jobs => dispatch(setJobs(jobs)))
  }
}

export const setJobs = (jobs) => {
  return {
    type: SET_JOBS,
    jobs
  }
}
