import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import profileStorage from './storage/profile'

import './index.css'
import './animations.css'

import ProfileAwareApp from './containers/ProfileAwareApp'
import rootReducer from './reducers'

const store = createStore(rootReducer, applyMiddleware(thunk))

store.subscribe(() => {
  const state = store.getState()
  profileStorage.saveState(state.profile)
})

ReactDOM.render(
  <Provider store={store}>
    <ProfileAwareApp />
  </Provider>,
  document.getElementById('root')
)
