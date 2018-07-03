import { connect } from 'react-redux'
import { fetchJob } from '../../actions/jobs'
import { withRouter } from 'react-router-dom'

import JobListing from '../../components/Jobs/JobListing'

const mapStateToProps = (state) => ({
  job: state.jobs.job,
  isLoading: state.jobs.isLoading,
})

const mapDispatchToProps = (dispatch) => ({
  fetchJob: (jobId) => {
    dispatch(fetchJob(jobId))
  }
})

const PopulatedJobListing = connect(mapStateToProps, mapDispatchToProps)(withRouter(JobListing))

export default PopulatedJobListing
