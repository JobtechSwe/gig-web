import React from 'react'
import styled from 'styled-components'

import colors from '../../colors'
import CalendarIcon from '../Icons/CalendarIcon'
import { formatDateRange } from '../../date';

const Duration = styled(
  ({ className, start, end }) =>
    <div>
      <CalendarIcon padRight />
      <span style={{ color: colors.gray90 }}>{formatDateRange(start, end)}</span>
    </div>
)`
  color: ${colors.blue};
  margin-right: 0.4em;
  font-size: 1.4em;
`

export default Duration
