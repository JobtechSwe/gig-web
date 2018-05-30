import React from 'react'
import styled from 'styled-components'

import MapIcon from '../Icons/MapIcon'
import colors from '../../colors'

const Location = styled(({ className, location }) =>
  <div>
    <MapIcon className={className} fill={colors.blue} />
    <span style={{ color: colors.gray90 }}>{location}</span>
  </div>
)`
  vertical-align: text-top;
  margin-right: 0.4em;
`

export default Location
