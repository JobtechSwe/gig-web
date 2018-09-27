import JobList from '../../components/Jobs/JobList'
import { connect } from 'react-redux'
import { fetchJobs } from '../../actions/jobs'
import { setPage } from '../../actions/search'

const mapStateToProps = state => {
  const {
    jobs: { jobs },
    search: { pagination, showSearchOptions }
  } = state

  return {
    jobs,
    pagination,
    showSearchOptions,
  }
}

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
