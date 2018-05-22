import React from 'react'
import styled from 'styled-components'
import afLogoImage from '../resources/img/af.png'

const colorPrimary = '#00005a'

const GigLogo = styled(
  ({ className }) => <span className={className}>GIG </span>
)`
  color: ${colorPrimary};
  font-size: 1.8em;
  font-weight: 700;
  vertical-align: sub;
`

const Separator = styled(
  ({ className }) => <span className={className}></span>
)`
  display: inline-block;
  width: 1px;
  height: 1.5em;
  margin: 0 0.85em 0 0.5em;
  vertical-align: text-top;
  background: #cfcfcf;
`

const AFLogo = styled(
  ({ className }) =>
    <img
      className={className}
      src={afLogoImage}
      alt="Arbetsförmedlingen"
    />
)`
  width: 60%;
  line-height: 2em;
`

const Logo = ({ className }) =>
  <div>
    <GigLogo />
    <Separator />
    <AFLogo />
  </div>

export default styled(Logo)`

`
