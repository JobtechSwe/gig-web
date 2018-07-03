import React, { Fragment } from 'react'

import Container from '../Common/Container'
import Footer from '../Common/Footer'
import InfoBlock from '../Common/InfoBlock'
import Intro from '../Employer/Intro'
import PartnerLink from '../Employer/PartnerLink'

import Gigstr from '../Partners/Gigstr'
import JustArrived from '../Partners/JustArrived'
import Taskrunner from '../Partners/Taskrunner'

const EmployerPage = () => (
  <Fragment>
    <Container narrow>
      <Intro />
    </Container>
    <div style={{ backgroundColor: 'white' }}>
      <Container narrow>
        <div className="row">
          <div className="col-md-7">
            <InfoBlock>
              <h2>Our partners</h2>
              <p>Ut consectetur turpis eget est auctor, eget bibendum mi porttitor. Nulla ut lectus quis ipsum malesuada euismod. In vel justo sapien. Aliquam erat volutpat. Morbi eget posuere risus, id aliquet sapien.</p>
            </InfoBlock>
            <InfoBlock>
              <Gigstr />
              <p>Ut consectetur turpis eget est auctor, eget bibendum mi porttitor. Nulla ut lectus quis ipsum malesuada euismod.</p>
              <PartnerLink href="http://www.gigstr.com/">gigstr.se</PartnerLink>
            </InfoBlock>
            <InfoBlock>
              <JustArrived />
              <p>Ut consectetur turpis eget est auctor, eget bibendum mi porttitor. Nulla ut lectus quis ipsum malesuada euismod.</p>
              <PartnerLink href="https://justarrived.se/">justarrived.se</PartnerLink>
            </InfoBlock>
            <InfoBlock>
              <Taskrunner />
              <p>Ut consectetur turpis eget est auctor, eget bibendum mi porttitor. Nulla ut lectus quis ipsum malesuada euismod.</p>
              <PartnerLink href="https://www.taskrunner.se/">taskrunner.se</PartnerLink>
            </InfoBlock>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  </Fragment>
)

export default EmployerPage
