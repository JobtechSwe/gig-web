import { combineReducers } from 'redux'

import menuReducer from './menu'
import jobsReducer from './jobs'
import profileReducer from './profile'

export default combineReducers({
  menu: menuReducer,
  jobs: jobsReducer,
  profile: profileReducer
})
