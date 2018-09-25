import React, { Component, Fragment } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Header from './Header/Header'
import HideableSideBarMenu from '../containers/Menu/HideableSideBarMenu'

import EmployerPage from './Employer/EmployerPage'
import HomePage from './Home/HomePage'
import JobListPage from './Jobs/JobListPage'
import JobPage from './Jobs/JobPage'
import MapPage from './Map/MapPage'

class App extends Component {
  componentDidMount() {
    this.props.loadProfileFromQueryString(window.location.search)

    this.clearQueryString()
  }

  clearQueryString() {
    const path = `${window.location.protocol}//${window.location.host}${window.location.pathname}`
    window.history.pushState({ path }, '', path)
  }

  render () {
    return (
      <BrowserRouter>
        <Fragment>
          <Header />
          <HideableSideBarMenu />
          <Route exact path="/" component={HomePage} />
          <Route exact path="/employers" component={EmployerPage} />
          <Route exact path="/jobs" component={JobListPage} />
          <Route path="/jobs/:jobId" component={JobPage} />
          <Route path="/map" component={MapPage} />
        </Fragment>
      </BrowserRouter>
    )
  }
}

export default App
