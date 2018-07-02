export const SET_PROFILE = 'SET_PROFILE'

export const clearProfile = () => {
  return {
    type: SET_PROFILE,
    profile: {}
  }
}

export const setProfile = (profile) => {
  return {
    type: SET_PROFILE,
    profile
  }
}
