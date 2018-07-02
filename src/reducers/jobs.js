import { SET_JOBS } from '../actions/jobs'

const initialState = {
  jobs: []
}

const jobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_JOBS:
      return {
        ...state,
        jobs: action.jobs
      }

    default:
      return state
  }
}

export default jobsReducer
