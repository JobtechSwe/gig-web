export const SET_SELECTED_SORTING_OPTION = 'SET_SELECTED_SORTING_OPTION'

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
