import { combineReducers } from 'redux'

import menuReducer from './menu'
import jobsReducer from './jobs'
import locationReducer from './location'
import profileReducer from './profile'
import searchReducer from './search'

export default combineReducers({
  menu: menuReducer,
  jobs: jobsReducer,
  location: locationReducer,
  profile: profileReducer,
  search: searchReducer
})
