import React, { Fragment } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Header from './Header/Header'
import IndexPage from './Pages/IndexPage'
import JobPage from './Pages/JobPage'

const App = () =>
  <BrowserRouter>
    <Fragment>
      <Header />
      <Route exact path="/" component={IndexPage} />
      <Route path="/jobs/:jobId" component={JobPage} />
    </Fragment>
  </BrowserRouter>

export default App
