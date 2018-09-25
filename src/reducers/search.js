import {
  SET_SELECTED_SORTING_OPTION,
  SET_PAGINATION,
} from '../actions/search'

const initialState = {
  selectedSortingOption: null,
  pagination: {
    total: 0,
    currentPage: 1,
    totalPages: 1,
  },
}

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTED_SORTING_OPTION:
      return {
        ...state,
        selectedSortingOption: action.option
      }

    case SET_PAGINATION:
      return {
        ...state,
        pagination: action.pagination
      }

    default:
      return state
  }
}

export default searchReducer
