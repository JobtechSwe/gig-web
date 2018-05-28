import React from 'react'
import styled from 'styled-components'

import colors from '../../colors'

const Card = styled(
  ({ className, children }) => (
    <div className={className}>
      {children}
    </div>
))`
  background: ${colors.white};
  box-shadow: 0 1px 2px rgba(0,0,0,.1);
  margin-bottom: 15px;
`

export default Card
