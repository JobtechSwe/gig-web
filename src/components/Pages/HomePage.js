import React, { Fragment } from 'react'

import Container from '../Common/Container'
import Footer from '../Common/Footer'
import Intro from '../Home/Intro'
import EmployerInfo from '../Home/EmployerInfo'
import InfoBlock from '../Common/InfoBlock'

const HomePage = () => (
  <Fragment>
    <Container narrow>
      <Intro />
    </Container>
    <div style={{ backgroundColor: 'white' }}>
      <Container narrow>
        <div className="row">
          <div className="col-md-7">
            <InfoBlock>
              <h2>A gig platform</h2>
              <p>At gig.se we collect jobs from several Swedish job platforms and employment services. Here you can find part-time or gig jobs. This is a perfect opportunity to expand your network and a great way to enter the Swedish labor market.</p>
            </InfoBlock>

            <InfoBlock>
              <h2>How does it work?</h2>
              <p>Ut consectetur turpis eget est auctor, eget bibendum mi porttitor. Nulla ut lectus quis ipsum malesuada euismod. In vel justo sapien. Aliquam erat volutpat. Morbi eget posuere risus, id aliquet sapien.</p>
            </InfoBlock>
          </div>
        </div>
      </Container>
      <Container>
        <div className="row">
          <div className="col-md-7">
            <EmployerInfo />
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  </Fragment>
)

export default HomePage
