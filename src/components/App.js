import React, { Fragment } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Header from './Header/Header'
import HomePage from './Pages/HomePage'
import JobListPage from './Pages/JobListPage'
import JobPage from './Pages/JobPage'
import MapPage from './Pages/MapPage'
import HideableSideBarMenu from '../containers/Menu/HideableSideBarMenu'

const App = () =>
  <BrowserRouter>
    <Fragment>
      <Header />
      <HideableSideBarMenu />
      <Route exact path="/" component={HomePage} />
      <Route exact path="/jobs" component={JobListPage} />
      <Route path="/jobs/:jobId" component={JobPage} />
      <Route path="/map" component={MapPage} />
    </Fragment>
  </BrowserRouter>

export default App
