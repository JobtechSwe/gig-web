import React from 'react'
import styled from 'styled-components'

import AFLogo from './AFLogo'
import Container from './Container'

import colors from '../../colors'

const Footer = styled(({ className, smallLogo }) => (
  <div className={className}>
    <Container>
      <div className="row">
        <div className="col-md-7">
          <h2>About GIG</h2>
          <p>
            Gig is a platform that let you search for jobs several recrutiment
            sites in Sweden. The platform is developed by the Swedish public
            employment service.
          </p>
          <a href="https://www.arbetsformedlingen.se/">
            <AFLogo small={smallLogo} />
          </a>
        </div>
        <div className="col-md-4 col-md-offset-1 visible-md visible-lg">
          <h2>Contact us</h2>
          <p>
            Do you have any suggestions for improvements or do you want to
            cooperate with us? Send an email to gig@arbetsformedlingen.se.
          </p>
        </div>
      </div>
    </Container>
  </div>
))`
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
