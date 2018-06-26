import { SHOW_SIDE_BAR_MENU, HIDE_SIDE_BAR_MENU } from '../actions/menu'

const initialState = {
  open: false
}

const menuReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_SIDE_BAR_MENU:
      return {
        ...state,
        open: true
      }

    case HIDE_SIDE_BAR_MENU:
      return {
        ...state,
        open: false
      }

    default:
      return state
  }
}

export default menuReducer
