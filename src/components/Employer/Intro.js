import React from 'react'
import styled from 'styled-components'

import EmployerImage from './EmployerImage'

const PositionedEmployerImage = styled(EmployerImage)`
  display: block;
  margin: 0 auto;
  margin-bottom: 2em;
`

const Intro = styled(
  ({ className }) =>
    <div className={className}>
      <PositionedEmployerImage />
      <h1>For employers</h1>
      <p style={{ marginBottom: '3em' }}>Ut consectetur turpis eget est auctor, eget bibendum mi porttitor.</p>
    </div>
)`
  margin: 5em 0;
`

export default Intro
