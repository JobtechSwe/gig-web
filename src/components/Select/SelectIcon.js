import React from 'react'
import styled from 'styled-components'

import colors from '../../colors'

const SelectIcon = styled(
  ({ className }) => <div className={className}><i className="i-angle-down"></i></div>
)`
  position: absolute;
  color: ${colors.blue};
  right: 0.6em;
  top: 0;
  font-size: 1.4em;
`

export default SelectIcon
