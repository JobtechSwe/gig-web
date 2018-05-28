import React from 'react'
import styled from 'styled-components'

import colors from '../../colors'

const CalendarIcon = styled(
  ({ className, fill }) => <i className={[ 'i-af-calendar-alt', className ].join(' ')} />
)`
  color: ${({ fill }) => fill || colors.blue};
  margin-right: 0.4em;
  font-size: 1.4em;
  width: 21px;
  height: 21px;
  line-height: 21px;
`

export default CalendarIcon
