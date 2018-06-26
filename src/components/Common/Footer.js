import React from 'react'
import styled from 'styled-components'

import AFLogo from './AFLogo'
import Container from './Container'

import colors from '../../colors'

const Footer = styled(({ className, smallLogo }) =>
  <div className={className}>
    <Container>
      <div className="row">
        <div className="col-md-7">
          <h2>About GIG</h2>
          <p>Praesent finibus risus dictum, sollicitudin arcu sed, faucibus ex. Etiam euismod porttitor hendrerit. Vestibulum ut faucibus nunc, ut venenatis mi. Ut consectetur turpis eget est auctor, eget bibendum mi porttitor. Nulla ut lectus quis ipsum malesuada euismod. In vel justo sapien. Aliquam erat volutpat. Morbi eget posuere risus, id aliquet sapien.</p>
          <a href="https://www.arbetsformedlingen.se/">
            <AFLogo small={smallLogo} />
          </a>
        </div>
        <div className="col-md-4 col-md-offset-1 visible-md visible-lg">
          <h2>Contact us</h2>
          <p>Do you have any suggestions for improvements or do you want to cooperate with us? Send an email to gig@arbetsformedlingen.se.</p>
        </div>
      </div>
    </Container>
  </div>
)`
  background: ${colors.primary};
  padding: 3em 0;

  h2 {
    color: white;
    font-size: 22px;
    font-weight: normal;
  }

  p {
    color: ${colors.white};
    font-weight: normal;
    margin-bottom: 1.5em;
  }
`

export default Footer
