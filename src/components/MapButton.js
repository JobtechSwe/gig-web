import React from 'react'
import styled from 'styled-components'

import colors from '../colors'
import MapIcon from './Icons/MapIcon'

const MapButton = styled(
  ({ className }) =>
    <div className={className}>
      <MapIcon fill={colors.white} />
    </div>
)`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 50px;
  background: ${colors.blue};
  bottom: 2em;
  right: 2em;
  border-radius: 2000px;
  box-shadow: 0 0 20px rgba(0,0,0,.25);

  svg {
    transform: scale(1.3);
  }
`

export default MapButton
