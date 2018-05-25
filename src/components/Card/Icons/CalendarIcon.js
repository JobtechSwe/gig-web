import React from 'react'
import styled from 'styled-components'
import dayjs from 'dayjs'

import colors from '../../../colors'

const DATE_FORMAT = 'D MMM' // D = day of month, MMM = short month, e.g. jan, apr, dec

const CalendarIcon = styled(
  ({ className, start, end }) =>
    <div>
      <i className={[ 'i-af-calendar-alt', className ].join(' ')} />
      {dayjs(start).format(DATE_FORMAT)} - {dayjs(end).format(DATE_FORMAT)}
    </div>
)`
  color: ${colors.blue};
  margin-right: 0.4em;
  font-size: 1.4em;
`

export default CalendarIcon
