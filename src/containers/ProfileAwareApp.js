import App from '../components/App'
import { connect } from 'react-redux'
import { setProfile } from '../actions/profile'
import { loadProfileFromQueryString } from '../profile'

const mapDispatchToProps = (dispatch) => ({
  loadProfileFromQueryString: (queryString) => {
    if (queryString) {
      const profile = loadProfileFromQueryString(queryString)
      dispatch(setProfile(profile))
    }
  }
})

const ProfileAwareApp = connect(null, mapDispatchToProps)(App)

export default ProfileAwareApp
