import JobList from '../../components/Jobs/JobList'
import { connect } from 'react-redux'
import { fetchJobs } from '../../actions/jobs'

const mapStateToProps = (state) => ({
  jobs: state.jobs.jobs
})

const mapDispatchToProps = (dispatch) => ({
  fetchJobs: () => {
    dispatch(fetchJobs(`${process.env.REACT_APP_API_HOST}/jobs`))
  }
})

const OrderedJobList = connect(mapStateToProps, mapDispatchToProps)(JobList)

export default OrderedJobList
