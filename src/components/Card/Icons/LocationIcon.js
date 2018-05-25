import React from 'react'
import styled from 'styled-components'

import MapIcon from '../../MapIcon'
import colors from '../../../colors'

const LocationIcon = styled(({ className, location }) =>
  <div>
    <MapIcon className={className} fill={colors.blue} /> {location}
  </div>
)`
  vertical-align: text-top;
  margin-right: 0.4em;
`

export default LocationIcon
