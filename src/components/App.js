import React, { Component, Fragment } from 'react'

import Card from './Card/Card'
import Header from './Header/Header'
import Search from './Search'
import MapButton from './MapButton'
import AvailableJobsCounter from './AvailableJobsCounter'

class App extends Component {
  constructor() {
    super()

    this.state = {
      jobs: []
    }
  }

  componentDidMount() {
    return fetch(`http://localhost:4004/jobs`)
      .then(response => response.json())
      .then(data => data.results)
      .then(jobs => this.setState({ jobs }))
  }

  render() {
    return (
      <Fragment>
        <Header />
        <Search />
        <div className="container">
          <AvailableJobsCounter count={this.state.jobs.length} />
          {this.state.jobs.map(job => <Card key={job.id} job={job} />)}
        </div>
        <MapButton />
      </Fragment>
    )
  }
}

export default App
