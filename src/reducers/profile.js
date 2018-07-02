import { SET_PROFILE } from '../actions/profile'
import { loadState } from '../storage/profile'

const initialState = loadState() || {
  profile: {}
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PROFILE:
      return {
        ...state,
        profile: action.profile
      }

    default:
      return state
  }
}

export default profileReducer
