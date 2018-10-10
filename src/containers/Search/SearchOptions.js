import { connect } from 'react-redux'

import Options from '../../components/SearchOptions/OptionsView'

import { fetchJobs } from '../../actions/jobs'
import { setDefaultSortingOption, setSortingOption, setFilterOptions } from '../../actions/search'

const mapStateToProps = state => {
  const {
    profile: { profile },
    search: {
      selectedSortingOption: selectedOption,
      showSearchOptions,
      filter: {
        requireSsn
      }
    },
    location: { position }
  } = state

  return {
    hasLocation: !!position,
    selectedOption,
    showSearchOptions,
    requireSsn,
    profile,
  }
}

const mapDispatchToProps = dispatch => ({
  setDefaultSortingOption: () => {
    dispatch(setDefaultSortingOption())
  },

  setSortingOption: option => {
    dispatch(setSortingOption(option))
    dispatch(fetchJobs())
  },

  setFilterOptions: filter => {
    dispatch(setFilterOptions(filter))
    dispatch(fetchJobs())
  },

})

export default connect(mapStateToProps, mapDispatchToProps)(Options)
