import React from 'react'
import styled from 'styled-components'

import colors from '../../colors'

const SlidersIcon = styled(
  ({ className }) => <i className={[ 'i-af-sliders-h', className ].join(' ')} />
)`
  color: ${({ fill }) => fill || colors.blue};
  margin-right: ${({ padRight }) => padRight ? '0.4em' : '0'};
  font-size: 1.4em;
  width: 21px;
  height: 21px;
  line-height: 21px;
`

export default SlidersIcon
