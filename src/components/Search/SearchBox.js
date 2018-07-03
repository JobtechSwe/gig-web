import React, { Component } from 'react'
import styled from 'styled-components'

import colors from '../../colors'
import SearchInput from './SearchInput'

import Select from '../Select/Select'

const DisconnectButton = styled(
  ({ onClick, className, profile }) =>
    <button className={className} onClick={onClick}>
      Disconnect {profile} profile
    </button>
)`
  display: inline-block;
  background: transparent;
  border: none;
  text-decoration: underline;
  padding: 0;
`

const Heading = styled.h1`
  color: white;
  text-align: center;
  margin: 0.6em 0 0.8em 0;
  padding: 0;

  &:after {
    display: none;
  }
`

class SearchBox extends Component {
  componentDidMount() {
    this.props.setDefaultSortingOption()
    this.props.fetchPosition()
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

  shouldDisplayProfileDisconnect() {
    return this.props.selectedOption === 'relevance' && this.props.profile && this.props.profile.ref
  }

  render() {
    const { className, search, onSearch, profile, setSortingOption, clearProfile } = this.props

    return (
      <div className={[className].join(' ')}>
      <div className="container">
        <Heading className="visible-md visible-lg">Search gig jobs</Heading>
        <SearchInput value={search} onChange={onSearch} />

        <Select onSelect={setSortingOption} prefix="<strong>Sort: </strong>" options={this.getSearchOptions()} />

        {
          this.shouldDisplayProfileDisconnect() &&
            <p className="pull-left" style={{ fontSize: '12px', color: 'white', fontWeight: 200, marginTop: '-6px' }}>
              The results are ordered to match with your {profile.ref} profile. <DisconnectButton profile={profile.ref} onClick={clearProfile} />
            </p>
        }
      </div>
    </div>
    )
  }
}

const StyledSearchBox = styled(SearchBox)`
  background: ${colors.primary};
  color: white;
  padding-top: 1em;
  margin-bottom: 1.5em;
  font-weight: 200;

  @media(min-width: 992px) {
    padding-bottom: 1em;
  }
`

export default StyledSearchBox
