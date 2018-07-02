import { SET_SELECTED_SORTING_OPTION } from '../actions/search'

const initialState = {
  selectedSortingOption: null
}

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTED_SORTING_OPTION:
      return {
        ...state,
        selectedSortingOption: action.option
      }

    default:
      return state
  }
}

export default searchReducer
