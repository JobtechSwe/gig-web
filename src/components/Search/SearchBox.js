import React from 'react'
import styled from 'styled-components'

import colors from '../../colors'
import SearchInput from './SearchInput'

const SearchBox = styled(
  ({ className, search, onSearch }) =>
    <div className={[className].join(' ')}>
      <div className="container">
        <SearchInput value={search} onChange={onSearch} />
      </div>
    </div>
)`
  background: ${colors.primary};
  color: white;
  padding-top: 1em;
  margin-bottom: 1.5em;
  font-weight: 200;
`

export default SearchBox
