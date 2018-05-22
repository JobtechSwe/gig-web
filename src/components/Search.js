import React from 'react'
import styled from 'styled-components'

const ShowOnMapLink = styled.a`
  color: white;
`

const Search = styled(
  ({ className }) =>
    <div className={className}>
      <SearchInput />
      <ShowOnMapLink><i className="i-pin" /> Visa på karta</ShowOnMapLink>
    </div>
)`
  background: #00005a;
  padding: 1em;
  margin-bottom: 1.5em;
  color: white;
  font-weight: 200;
`

const SearchIcon = styled(({ className }) => <i className={['i-af-search', className].join(' ')} />)`
  position: absolute;
  color: #1616b2;
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
  border: none;
`

export default Search
