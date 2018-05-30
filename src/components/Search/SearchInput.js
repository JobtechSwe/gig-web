import React from 'react'
import styled from 'styled-components'

import SearchIcon from './SearchIcon'

const SearchInput = styled(
  ({ className, value, onChange }) =>
    <div className="form-group" style={{ position: 'relative' }}>
      <input
        className={['form-control', className].join(' ')}
        onChange={onChange}
        placeholder="Search by city or competence"
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

export default SearchInput
