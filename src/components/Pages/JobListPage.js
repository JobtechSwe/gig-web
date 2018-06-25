import React, { Component, Fragment } from 'react'
import qs from 'query-string'

import profile from '../../profile'

import MapButton from '../MapButton'
import SearchBox from '../Search/SearchBox'
import SortedJobList from '../Jobs/SortedJobList'

class JobListPage extends Component {
  constructor() {
    super()

    const importedProfile = profile.get()

    this.state = {
      search: '',
      jobs: [],
      profile: importedProfile,
      orderByOption: importedProfile && importedProfile.ref ? 'relevance' : 'recentlyPosted',
      position: null,
    }
  }

  clearProfile() {
    profile.clear()
    this.setState({ profile: null })
  }

  onSearch(event) {
    this.setState({ search: event.target.value })
  }

  componentDidMount() {
    this.fetchJobs()
    this.fetchLocation()
  }

  fetchJobs() {
    return fetch(this.getJobSearchUrl())
      .then(response => response.json())
      .then(data => data.results)
      .then(jobs => this.setState({ jobs }))
  }

  getJobSearchUrl() {
    const queryString = qs.stringify({
      orderBy: this.state.orderByOption,
      sort: 'asc',
      ...(this.state.orderByOption === 'relevance' ? this.state.profile : {}),
      ...(this.state.orderByOption === 'distance' ? this.state.position : {}),

      // TODO: Implement pagination
      page: 1,
      pageLimit: 1000,
    })

    return `${process.env.REACT_APP_API_HOST}/jobs?${queryString}`
  }

  fetchLocation() {
    window.navigator.geolocation.getCurrentPosition(
      ({ coords }) => this.setState({
        position: {
          latitude: coords.latitude,
          longitude: coords.longitude,
        },
      })
    )
  }

  setOrderByOption(orderByOption) {
    this.setState({ orderByOption }, this.fetchJobs.bind(this))
  }

  render() {
    return (
      <Fragment>
        <SearchBox
          profile={this.state.profile}
          clearProfile={this.clearProfile.bind(this)}
          onSearch={this.onSearch.bind(this)}
          search={this.state.search}
          setOrderByOption={this.setOrderByOption.bind(this)}
          hasPosition={!!this.state.position}
        />
        <div className="container">
          <SortedJobList jobs={this.state.jobs} search={this.state.search} />
        </div>
        <MapButton />
      </Fragment>
    )
  }
}

export default JobListPage
