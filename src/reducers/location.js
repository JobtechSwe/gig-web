import { SET_POSITION } from '../actions/location'

const initialState = {}

const locationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POSITION:
      return {
        ...state,
        position: action.position
      }

    default:
      return state
  }
}

export default locationReducer
