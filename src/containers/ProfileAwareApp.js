import App from '../components/App'
import { connect } from 'react-redux'
import { setProfile } from '../actions/profile'
import { setDefaultSortingOption } from '../actions/search'

import { loadProfileFromQueryString } from '../profile'

const mapStateToProps = state => {
  const { search: { showSearchOptions } } = state
  return {
    showSearchOptions,
  }
}

const mapDispatchToProps = dispatch => ({
  loadProfileFromQueryString: queryString => {
    if (queryString) {
      const profile = loadProfileFromQueryString(queryString)
      dispatch(setProfile(profile))
      dispatch(setDefaultSortingOption())
    }
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
