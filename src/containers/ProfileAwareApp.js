import App from '../components/App'
import { connect } from 'react-redux'
import { setProfile } from '../actions/profile'
import { setDefaultSortingOption } from '../actions/search'

import { loadProfileFromQueryString } from '../profile'

const mapDispatchToProps = (dispatch) => ({
  loadProfileFromQueryString: (queryString) => {
    if (queryString) {
      const profile = loadProfileFromQueryString(queryString)
      dispatch(setProfile(profile))
      dispatch(setDefaultSortingOption())
    }
  }
})

const ProfileAwareApp = connect(null, mapDispatchToProps)(App)

export default ProfileAwareApp
