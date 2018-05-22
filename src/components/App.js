import React, { Fragment } from 'react'

import Card from './Card'
import Navbar from './Navbar'
import Search from './Search'

const App = () => (
  <Fragment>
    <Navbar />
    <Search />
    <Card source="just-arrived" title="Delivery driver" location="Stockholm" />
    <Card source="gigstr" title="Erfaren trädgårdsmästare sökes!" location="Märsta" />
  </Fragment>
)

export default App
