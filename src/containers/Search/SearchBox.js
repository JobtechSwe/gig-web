import { connect } from 'react-redux'

import SearchBox from '../../components/Search/SearchBox'

import { fetchPosition } from '../../actions/location'
import { setShowSearchOptions } from '../../actions/search'
import { clearProfile } from '../../actions/profile'

const mapStateToProps = (state) => {
  const {
    profile: { profile },
    search: { showSearchOptions },
    location: { position }
  } = state

  return {
    hasLocation: !!position,
    showSearchOptions,
    profile,
  }
}

const mapDispatchToProps = dispatch => ({
  fetchPosition: () => {
    dispatch(fetchPosition())
  },

  clearProfile: () => {
    dispatch(clearProfile())
  },

  setShowSearchOptions: show => {
    dispatch(setShowSearchOptions(show))
  },

})

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox)
