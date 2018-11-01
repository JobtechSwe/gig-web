import React from 'react'
import styled from 'styled-components'

import SearchIcon from './SearchIcon'

const SearchInput = styled(
  ({ className, value, onChange }) =>
    <div className="form-group" style={{ position: 'relative' }}>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={['form-control', className].join(' ')}
        placeholder="Search by city or competence"
        type="text"
      />
      <SearchIcon />
    </div>
)`
  border-radius: 0;
  padding: 0px 14px;
  height: 38px;
  margin-bottom: 0;
  border: none;
`

export default SearchInput
