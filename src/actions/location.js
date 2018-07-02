export const SET_POSITION = 'SET_POSITION'

export const setPosition = (position) => {
  return {
    type: SET_POSITION,
    position
  }
}

export const fetchPosition = () => {
  return (dispatch) => {
    window.navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        const position = {
          latitude: coords.latitude,
          longitude: coords.longitude,
        }

        dispatch(setPosition(position))
      }
    )
  }
}
