import React, { Component, Fragment } from 'react'
import qs from 'query-string'

import MapButton from '../MapButton'
import SearchBox from '../Search/SearchBox'
import OrderedJobList from '../../containers/Jobs/OrderedJobList'

class JobListPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      search: '',
      jobs: [],
      orderByOption: props.profile && props.profile.ref ? 'relevance' : 'recentlyPosted',
      position: null,
    }
  }

  clearProfile() {
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
      ...(this.state.orderByOption === 'relevance' ? this.props.profile : {}),
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
          profile={this.props.profile}
          clearProfile={() => this.props.clearProfile()}
          onSearch={this.onSearch.bind(this)}
          search={this.state.search}
          setOrderByOption={this.setOrderByOption.bind(this)}
          hasPosition={!!this.state.position}
        />
        <div className="container">
          <OrderedJobList />
        </div>
        <MapButton />
      </Fragment>
    )
  }
}

export default JobListPage
