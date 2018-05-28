import React, { Component, Fragment } from 'react'

import SortedJobList from './Jobs/SortedJobList'
import Header from './Header/Header'
import MapButton from './MapButton'
import Search from './Search'

const getSearchFromQueryString = (queryString) =>
  queryString
    .replace('?', '')
    .split('&')
    .reduce((search, kv) => {
      const parts = kv.split('=')
      return parts.length === 2 && parts[0] === 'q'
        ? parts[1].split('+').join(' ')
        : search
    }, '')

class App extends Component {
  constructor() {
    super()

    this.state = {
      search: getSearchFromQueryString(window.location.search),
      jobs: []
    }
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
        <Header />
        <Search onSearch={this.onSearch.bind(this)} search={this.state.search} />
        <div className="container">
          <SortedJobList jobs={this.state.jobs} search={this.state.search} />
        </div>
        <MapButton />
      </Fragment>
    )
  }
}

export default App
