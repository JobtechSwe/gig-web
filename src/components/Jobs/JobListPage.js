import React, { Fragment } from 'react'

import MapButton from '../Map/MapButton'
import SearchBox from '../../containers/Search/SearchBox'
import OrderedJobList from '../../containers/Jobs/OrderedJobList'
import SearchOptions from '../../containers/Search/SearchOptions'

const JobListPage = () =>
  <Fragment>
    <SearchBox />
    <div className="container">
      <SearchOptions />
      <OrderedJobList />
    </div>
    <MapButton />
  </Fragment>

export default JobListPage
