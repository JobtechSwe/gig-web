import React, { Fragment } from 'react'

import PopulatedJobListing from '../../containers/Jobs/PopulatedJobListing'
import BackButton from '../BackButton'

const JobPage = () =>
  <Fragment>
    <BackButton />
    <PopulatedJobListing />
  </Fragment>

export default JobPage
