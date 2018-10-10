import React, { Component, Fragment } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import styled from 'styled-components'

import colors from '../colors'

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
    const {
      props: { className, showSearchOptions }
    } = this

    const classNames = [className]

    if (showSearchOptions) {
      classNames.push('search-options_open')
    }

    return (
      <div className={classNames.join(' ')}>
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
      </div>
    )
  }
}

const StyledApp = styled(App)`
  min-height: 100vh;
  &.search-options_open {
    background: ${colors.white};
  }
`

export default StyledApp
