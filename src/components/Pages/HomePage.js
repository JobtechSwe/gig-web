import React, { Fragment } from 'react'
import styled from 'styled-components'

import Container from '../Common/Container'
import Footer from '../Common/Footer'
import Intro from '../Home/Intro'
import EmployerInfo from '../Home/EmployerInfo'

const InfoBlock = styled.div`
  margin: 5em 0;
`

const HomePage = () => (
  <Fragment>
    <Container narrow>
      <Intro />
    </Container>
    <div style={{ backgroundColor: 'white' }}>
      <Container narrow>
        <InfoBlock>
          <h2>A gig platform</h2>
          <p>At gig.se we collect jobs from several Swedish job platforms and employment services. Here you can find part-time or gig jobs. This is a perfect opportunity to expand your network and a great way to enter the Swedish labor market.</p>
        </InfoBlock>

        <InfoBlock>
          <h2>How does it work?</h2>
          <p>Ut consectetur turpis eget est auctor, eget bibendum mi porttitor. Nulla ut lectus quis ipsum malesuada euismod. In vel justo sapien. Aliquam erat volutpat. Morbi eget posuere risus, id aliquet sapien.</p>
        </InfoBlock>
      </Container>
      <Container>
        <EmployerInfo />
      </Container>
      <Footer />
    </div>
  </Fragment>
)

export default HomePage
