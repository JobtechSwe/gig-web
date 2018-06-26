import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import AFLogo from '../Common/AFLogo'
import colors from '../../colors'

const GigLogo = styled(
  ({ className }) => <span className={className}>GIG</span>
)`
  color: ${colors.primary};
  font-size: 28px;
  line-height: 20px;
  display: inline-block;
  font-weight: 700;
  vertical-align: sub;
`

const Separator = styled(
  ({ className }) => <span className={className}></span>
)`
  display: inline-block;
  width: 1px;
  height: 1.5em;
  margin: 0 0.6em 0 0.6em;
  vertical-align: text-top;
  background: ${colors.gray30};
`

const Logo = styled(
  ({ className }) =>
  <div className={className}>
    <Link to="/"><GigLogo /></Link>
    <Separator />
    <a href="https://www.arbetsformedlingen.se/"><AFLogo small color="black" /></a>
  </div>
)`
  display: flex;
`

export default styled(Logo)`

`
