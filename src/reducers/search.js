import {
  SET_SELECTED_SORTING_OPTION,
  SET_PAGINATION,
  SET_SHOW_SEARCH_OPTIONS,
  SET_FILTER_OPTIONS,
  SET_QUERY_TEXT,
} from '../actions/search'

const initialState = {
  queryText: '',
  selectedSortingOption: null,
  pagination: {
    total: 0,
    currentPage: 1,
    totalPages: 1,
  },
  showSearchOptions: false,
  filter: {
    requireSsn: false
  }
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

    case SET_SHOW_SEARCH_OPTIONS:
      return {
        ...state,
        showSearchOptions: action.show
      }

    case SET_FILTER_OPTIONS:
      return {
        ...state,
        filter: action.filter
      }

      case SET_QUERY_TEXT:
        return {
          ...state,
          queryText: action.queryText
        }

    default:
      return state
  }
}

export default searchReducer
