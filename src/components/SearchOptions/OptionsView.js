import React, { Component } from 'react'
import styled from 'styled-components'

import Select from '../Select/Select'

class Options extends Component {
  componentDidMount() {
    this.props.setDefaultSortingOption()
  }

  getSearchOptions() {
    const { profile, hasLocation } = this.props

    return [
      { key: 'relevance', value: 'Best match', display: Boolean(profile && profile.ref) },
      { key: 'recentlyPosted', value: 'Recently posted' },
      { key: 'distance', value: 'Distance', display: hasLocation },
      { key: 'startDate', value: 'Start date' },
      { key: 'duration', value: 'Duration' },
    ]
  }

  render() {
    const {
      props: {
        className,
        showSearchOptions,
        setSortingOption,
      }
    } = this

    return !!showSearchOptions && (
      <div className={className}>
        <h2>Sort</h2>
        <Select onSelect={setSortingOption} prefix="<strong>Sort: </strong>" options={this.getSearchOptions()} />
      </div>
    )
  }
}

const StyledOptions = styled(Options)`
  padding: 0;
`

export default StyledOptions


