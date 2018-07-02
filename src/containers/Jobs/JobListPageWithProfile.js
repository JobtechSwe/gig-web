import JobListPage from '../../components/Pages/JobListPage'
import { connect } from 'react-redux'
import { clearProfile } from '../../actions/profile'

const mapStateToProps = (state) => ({
  profile: state.profile.profile
})

const mapDispatchToProps = (dispatch) => ({
  clearProfile: () => {
    dispatch(clearProfile())
  }
})

const JobListPageWithProfile = connect(mapStateToProps, mapDispatchToProps)(JobListPage)

export default JobListPageWithProfile
