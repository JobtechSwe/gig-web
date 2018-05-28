import React, { Component } from 'react'

import Card from '../Card/Card'
import Body from '../Card/Body'

class JobPage extends Component {
  constructor() {
    super()

    this.state = { job: null }
  }

  componentDidMount() {
    const { match } = this.props

    fetch(`${process.env.REACT_APP_API_HOST}/jobs?page=1&pageLimit=1000`)
      .then(response => response.json())
      .then(data => data.results.results)
      .then(jobs => jobs.find(job => job.id === match.params.jobId))
      .then(job => this.setState({ job }))
  }

  render() {
    return (
      <div className="container" style={{ marginTop: '0.5em' }}>
        <Card>
          <Body>
            Job page
          </Body>
        </Card>
      </div>
    )
  }
}

export default JobPage
