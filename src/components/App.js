import React, { Component, Fragment } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Header from './Header/Header'
import HideableSideBarMenu from '../containers/Menu/HideableSideBarMenu'

import EmployerPage from './Pages/EmployerPage'
import HomePage from './Pages/HomePage'
import JobListPageWithProfile from '../containers/Jobs/JobListPageWithProfile'
import JobPage from './Pages/JobPage'
import MapPage from './Pages/MapPage'

class App extends Component {
  componentDidMount() {
    this.props.loadProfileFromQueryString(window.location.search)

    this.clearQueryString()
  }

  clearQueryString() {
    const withoutQueryString = window.location.protocol + "//" + window.location.host + window.location.pathname
    window.history.pushState({ path: withoutQueryString }, '', withoutQueryString)
  }

  render () {
    return (
      <BrowserRouter>
        <Fragment>
          <Header />
          <HideableSideBarMenu />
          <Route exact path="/" component={HomePage} />
          <Route exact path="/employers" component={EmployerPage} />
          <Route exact path="/jobs" component={JobListPageWithProfile} />
          <Route path="/jobs/:jobId" component={JobPage} />
          <Route path="/map" component={MapPage} />
        </Fragment>
      </BrowserRouter>
    )
  }
}

export default App
