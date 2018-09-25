import JobList from '../../components/Jobs/JobList'
import { connect } from 'react-redux'
import { fetchJobs } from '../../actions/jobs'
import { setPage } from '../../actions/search'

const mapStateToProps = state => ({
  jobs: state.jobs.jobs,
  pagination: state.search.pagination,
})

const mapDispatchToProps = dispatch => ({
  fetchJobs: () => {
    dispatch(fetchJobs())
  },

  setPage: async page => {
    await dispatch(setPage(page))
    await dispatch(fetchJobs())
  },
})

const OrderedJobList = connect(mapStateToProps, mapDispatchToProps)(JobList)

export default OrderedJobList
