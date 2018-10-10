import { connect } from 'react-redux'
import { fetchJob } from '../../actions/jobs'
import { withRouter } from 'react-router-dom'

import JobListing from '../../components/Jobs/JobListing'

const mapStateToProps = state => {
  const { jobs: { job, isLoading } } = state

  return {
    job,
    isLoading,
  }
}

const mapDispatchToProps = dispatch => ({
  fetchJob: jobId => {
    dispatch(fetchJob(jobId))
  },

})

const PopulatedJobListing = connect(mapStateToProps, mapDispatchToProps)(withRouter(JobListing))

export default PopulatedJobListing
