import { connect } from 'react-redux'

import SearchBox from '../../components/Search/SearchBox'

import { fetchPosition } from '../../actions/location'
import {
  setShowSearchOptions,
  setFilterOptions,
  setQueryText,
} from '../../actions/search'
import { clearProfile } from '../../actions/profile'
import { fetchJobs } from '../../actions/jobs'

const mapStateToProps = state => {
  const {
    profile: { profile },
    search: {
      showSearchOptions,
      pagination: { total },
      filter,
      queryText
    },
    location: { position }
  } = state

  return {
    hasLocation: !!position,
    showSearchOptions,
    profile,
    total,
    filter,
    queryText
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

  setFilterOptions: filter => {
    dispatch(setFilterOptions(filter))
    dispatch(fetchJobs())
  },

  setQueryText: text => {
    dispatch(setQueryText(text))
    dispatch(fetchJobs())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox)
