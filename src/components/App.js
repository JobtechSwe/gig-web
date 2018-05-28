import React, { Fragment } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Header from './Header/Header'
import IndexPage from './Pages/IndexPage'
import JobPage from './Pages/JobPage'
import MapPage from './Pages/MapPage'

const App = () =>
  <BrowserRouter>
    <Fragment>
      <Header />
      <Route exact path="/" component={IndexPage} />
      <Route path="/jobs/:jobId" component={JobPage} />
      <Route path="/map" component={MapPage} />
    </Fragment>
  </BrowserRouter>

export default App
