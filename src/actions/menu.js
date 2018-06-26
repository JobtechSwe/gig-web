export const SHOW_SIDE_BAR_MENU = 'SHOW_SIDE_BAR_MENU'
export const HIDE_SIDE_BAR_MENU = 'HIDE_SIDE_BAR_MENU'

export const showMenu = () => {
  return {
    type: SHOW_SIDE_BAR_MENU
  }
}

export const hideMenu = () => {
  return {
    type: HIDE_SIDE_BAR_MENU
  }
}
