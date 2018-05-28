import React from 'react'
import styled from 'styled-components'
import dayjs from 'dayjs'

import colors from '../../../colors'
import CalendarIcon from '../../Icons/CalendarIcon'

const DATE_FORMAT = 'D MMM' // D = day of month, MMM = short month, e.g. jan, apr, dec

const Duration = styled(
  ({ className, start, end }) =>
    <div>
      <CalendarIcon padRight />
      <span style={{ color: colors.gray90 }}>{dayjs(start).format(DATE_FORMAT)} - {dayjs(end).format(DATE_FORMAT)}</span>
    </div>
)`
  color: ${colors.blue};
  margin-right: 0.4em;
  font-size: 1.4em;
`

export default Duration
