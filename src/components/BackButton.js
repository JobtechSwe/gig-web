import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import colors from '../colors'

const BackArrow = styled(
  ({ className }) => <span className={className}>〱</span>
)`
  display: inline-block;
  margin: 0 0.6em;
  opacity: 1;
`

const BackButton = ({ className }) =>
  <Link to="/">
    <div className={className}>
      <BackArrow />
      Back
    </div>
  </Link>

const StyledBackButton = styled(BackButton)`
  background: ${colors.primary};
  color: white;
  height: 50px;
  line-height: 50px;
`

export default StyledBackButton;
