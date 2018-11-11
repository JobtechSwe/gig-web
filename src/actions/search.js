export const SET_SELECTED_SORTING_OPTION = 'SET_SELECTED_SORTING_OPTION'
export const SET_PAGINATION = 'SET_PAGINATION'
export const SET_PAGE = 'SET_PAGE'
export const SET_SHOW_SEARCH_OPTIONS = 'SET_SHOW_SEARCH_OPTIONS'
export const SET_FILTER_OPTIONS = 'SET_FILTER_OPTIONS'
export const SET_QUERY_TEXT = 'SET_QUERY_TEXT'

export const setSortingOption = (option) => ({
  type: SET_SELECTED_SORTING_OPTION,
  option
})

export const setDefaultSortingOption = (option) => {
  return (dispatch, getState) => {
    const profile = getState().profile.profile
    dispatch(setSortingOption(profile && profile.ref ? 'relevance' : 'recent'))
  }
}

export const setPagination = pagination => {
  return {
    type: SET_PAGINATION,
    pagination
  }
}

export const setPage = page => {
  return (dispatch, getState) => {
    const { search: { pagination } } = getState()

    pagination.page = page

    dispatch(setPagination(pagination))
  }
}

export const setShowSearchOptions = show => {
  return {
    type: SET_SHOW_SEARCH_OPTIONS,
    show
  }
}

export const setFilterOptions = filter => {
  return {
    type: SET_FILTER_OPTIONS,
    filter
  }
}

export const setQueryText = queryText => {
  return {
    type: SET_QUERY_TEXT,
    queryText
  }
}
