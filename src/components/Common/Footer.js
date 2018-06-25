import React from 'react'
import styled from 'styled-components'

import AFLogo from './AFLogo'
import Container from './Container'

import colors from '../../colors'

const Footer = styled(({ className }) =>
  <div className={className}>
    <Container>
      <p>Praesent finibus risus dictum, sollicitudin arcu sed, faucibus ex. Etiam euismod porttitor hendrerit. Vestibulum ut faucibus nunc, ut venenatis mi. Ut consectetur turpis eget est auctor, eget bibendum mi porttitor. Nulla ut lectus quis ipsum malesuada euismod. In vel justo sapien. Aliquam erat volutpat. Morbi eget posuere risus, id aliquet sapien.</p>
      <AFLogo />
    </Container>
  </div>
)`
  background: ${colors.primary};
  padding: 3em 0;

  p {
    color: ${colors.white};
    font-weight: normal;
    margin-bottom: 1.5em;
  }
`

export default Footer