import React, { Component, Fragment } from 'react'

import profile from '../../profile'

import MapButton from '../MapButton'
import SearchBox from '../Search/SearchBox'
import SortedJobList from '../Jobs/SortedJobList'

class IndexPage extends Component {
  constructor() {
    super()

    this.state = {
      search: '',
      jobs: [],
      profile: profile.get()
    }
  }

  clearProfile() {
    profile.clear()
    this.setState({ profile: {} })
  }

  onSearch(event) {
    this.setState({ search: event.target.value })
  }

  componentDidMount() {
    return fetch(`${process.env.REACT_APP_API_HOST}/jobs?page=1&pageLimit=1000`)
      .then(response => response.json())
      .then(data => data.results.results)
      .then(jobs => this.setState({ jobs }))
  }

  render() {
    return (
      <Fragment>
        <SearchBox
          profileSource={this.state.profile.ref}
          clearProfile={this.clearProfile.bind(this)}
          onSearch={this.onSearch.bind(this)}
          search={this.state.search}
        />
        <div className="container">
          <SortedJobList jobs={this.state.jobs} search={this.state.search} />
        </div>
        <MapButton />
      </Fragment>
    )
  }
}

export default IndexPage
