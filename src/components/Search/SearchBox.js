import React, { Component } from 'react'
import styled from 'styled-components'

import colors from '../../colors'

import SearchOptionsButton from '../SearchOptions/Button'
import SearchOptions from '../SearchOptions/ShowMenu'
import SearchInput from './SearchInput'

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
    this.props.fetchPosition()
  }

  shouldDisplayProfileDisconnect() {
    return this.props.selectedOption === 'relevance' && this.props.profile && this.props.profile.ref
  }

  showSearchOptions() {
    this.props.setShowSearchOptions(true)
  }

  hideSearchOptions() {
    this.props.setShowSearchOptions(false)
  }

  render() {
    const {
      props: {
        className,
        search,
        onSearch,
        profile,
        clearProfile,
        showSearchOptions,
        total
      }
    } = this

    const displayProfileDisconnect = this.shouldDisplayProfileDisconnect()

    const searchFilter =
      <div className="default_view">
        <Heading className="visible-md visible-lg">Search gig jobs</Heading>
        <SearchInput value={search} onChange={onSearch} />
        <SearchOptions toggle={this.showSearchOptions.bind(this)} />
        {
          displayProfileDisconnect &&
            <p className="pull-left" style={{ fontSize: '12px', color: 'white', fontWeight: 200, marginTop: '-6px' }}>
              The results are ordered to match with your {profile.ref} profile. <DisconnectButton profile={profile.ref} onClick={clearProfile} />
            </p>
        }
      </div>

    const searchOptions =
      <div className="search_options">
        <h2>Search Options</h2>
        <SearchOptionsButton total={total} toggle={this.hideSearchOptions.bind(this)} />
      </div>

    return (
      <div className={[className].join(' ')}>
        <div className="container">
          { showSearchOptions ? searchOptions : searchFilter }
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

  .search_options {
    h2 {
      margin-top: .9em;
      vertical-align: bottom;
    }
  }

  h2 {
    color: white;
  }

  @media(min-width: 992px) {
    padding-bottom: 1em;
  }
`

export default StyledSearchBox
