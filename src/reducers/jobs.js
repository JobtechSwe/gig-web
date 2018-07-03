import { SET_JOBS, SET_JOB, SET_LOADING_JOB } from '../actions/jobs'

const initialState = {
  jobs: [],
  job: undefined,
  isLoading: true
}

const jobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_JOB:
      return {
        ...state,
        job: action.job
      }

    case SET_JOBS:
      return {
        ...state,
        jobs: action.jobs
      }

    case SET_LOADING_JOB:
      return {
        ...state,
        isLoading: action.isLoading
      }

    default:
      return state
  }
}

export default jobsReducer
