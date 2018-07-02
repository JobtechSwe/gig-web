export const FETCH_JOBS = 'FETCH_JOBS'
export const SET_JOBS = 'SET_JOBS'

export const fetchJobs = (url) => {
  return (dispatch) =>
    fetch(url)
      .then(response => response.json())
      .then(data => data.results)
      .then(jobs => dispatch(setJobs(jobs)))
}

export const setJobs = (jobs) => {
  return {
    type: SET_JOBS,
    jobs
  }
}
