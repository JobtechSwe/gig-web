import React from 'react'
import styled from 'styled-components'

import colors from '../colors'
import MapIcon from './Icons/MapIcon'

const MapButton = styled(
  ({ className }) =>
    <div className={className}>
      <MapIcon />
    </div>
)`
  position: fixed;
  height: 50px;
  width: 50px;
  background: ${colors.blue};
  bottom: 2em;
  right: 2em;
  border-radius: 2000px;
  box-shadow: 0 0 20px rgba(0,0,0,.25);
  text-align: center;
  line-height: 58px;

  svg {
    transform: scale(1.3);
  }
`

export default MapButton
