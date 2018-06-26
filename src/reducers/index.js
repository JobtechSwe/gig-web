import { combineReducers } from 'redux'

import menuReducer from './menu'

export default combineReducers({
  menu: menuReducer
})
