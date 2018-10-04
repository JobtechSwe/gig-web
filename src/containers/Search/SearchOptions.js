import { connect } from 'react-redux'

import Options from '../../components/SearchOptions/OptionsView'

import { fetchJobs } from '../../actions/jobs'
import { setDefaultSortingOption, setSortingOption } from '../../actions/search'

const mapStateToProps = state => {
  const {
    profile: { profile },
    search: {
      selectedSortingOption: selectedOption,
      showSearchOptions
    },
    location: { position }
  } = state

  return {
    hasLocation: !!position,
    selectedOption,
    showSearchOptions,
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

})

export default connect(mapStateToProps, mapDispatchToProps)(Options)
