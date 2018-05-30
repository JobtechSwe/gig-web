import React from 'react'
import styled from 'styled-components'

import colors from '../../colors'

const SearchIcon = styled(
  ({ className }) =>
    <i className={['i-af-search', className].join(' ')} />
)`
  position: absolute;
  color: ${colors.blue};
  top: 0.3em;
  right: 0.3em;
  font-size: 1.6em;
`

export default SearchIcon
