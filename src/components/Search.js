import React from 'react'
import styled from 'styled-components'

import colors from '../colors'

const Search = styled(
  ({ className }) =>
    <div className={[className, 'container'].join(' ')}>
      <SearchInput />
    </div>
)`
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
  ({ className }) =>
    <div className="form-group" style={{ position: 'relative' }}>
      <input type="text" className={['form-control', className].join(' ')} placeholder="Sök efter yrke eller ort" />
      <SearchIcon />
    </div>
)`
  border-radius: 0;
  padding: 1em;
  margin-bottom: 0;
  border: none;
`

export default Search
