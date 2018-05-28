import React, { Component } from 'react'
import styled from 'styled-components'

import colors from '../colors'

class Search extends Component {
  render() {
    return (
      <div className={[this.props.className, 'container'].join(' ')}>
        <SearchInput value={this.props.search} onChange={this.props.onSearch} />
      </div>
    )
  }
}

const StyledSearch = styled(Search)`
  background: ${colors.primary};
  color: white;
  padding-top: 1em;
  margin-bottom: 1.5em;
  font-weight: 200;
`

const SearchIcon = styled(({ className }) => <i className={['i-af-search', className].join(' ')} />)`
  position: absolute;
  color: ${colors.blue};
  top: 0.3em;
  right: 0.3em;
  font-size: 1.6em;
`

const SearchInput = styled(
  ({ className, value, onChange }) =>
    <div className="form-group" style={{ position: 'relative' }}>
      <input
        className={['form-control', className].join(' ')}
        onChange={onChange}
        placeholder="Sök efter yrke eller ort"
        type="text"
        value={value}
      />
      <SearchIcon />
    </div>
)`
  border-radius: 0;
  padding: 1em;
  margin-bottom: 0;
  border: none;
`

export default StyledSearch
