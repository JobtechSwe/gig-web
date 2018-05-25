import React from 'react'
import styled from 'styled-components'

import colors from '../colors'

const AvailableJobsCounter = styled(
  ({ className, count }) =>
    <div style={{ marginBottom: '1.5em' }}>
      <span className={className}>{count}</span> available jobs
    </div>
)`
  color: ${colors.blue};
  font-weight: 600;
`

export default AvailableJobsCounter
