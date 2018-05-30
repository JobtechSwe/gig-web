import React from 'react'
import styled from 'styled-components'

import Spinner from './Spinner'

const Loader = styled(
  ({ className, color, size }) =>
    <div className={className}>
      <Spinner color={color} size={size} />
     </div>
)`
  height: calc(100vh - 150px);
  display: flex;
  align-items: center;
  justify-content: center;
`

export default Loader
