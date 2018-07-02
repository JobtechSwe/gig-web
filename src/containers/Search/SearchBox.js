import SearchBox from '../../components/Search/SearchBox'
import { connect } from 'react-redux'
import { fetchPosition } from '../../actions/location'
import { fetchJobs } from '../../actions/jobs'
import { setDefaultSortingOption, setSortingOption } from '../../actions/search'
import { clearProfile } from '../../actions/profile'

const mapStateToProps = (state) => {
  const profile = state.profile.profile
  const hasLocation = !!state.location.position

  return {
    hasLocation,
    selectedOption: state.search.selectedSortingOption,
    profile,
  }
}

const mapDispatchToProps = (dispatch) => ({
  setDefaultSortingOption: () => {
    dispatch(setDefaultSortingOption())
  },

  setSortingOption: (option) => {
    dispatch(setSortingOption(option))
    dispatch(fetchJobs())
  },

  fetchPosition: () => {
    dispatch(fetchPosition())
  },

  clearProfile: () => {
    dispatch(clearProfile())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox)
