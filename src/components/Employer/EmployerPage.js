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
              <p>
                We colaborate with several platforms for gig jobs. Choose the
                one best suited for your need and place your add with them. Your
                add will be displayed both on their site and with us to maximize
                the chance of finding just the right person for the job.
              </p>
            </InfoBlock>
            <InfoBlock>
              <Gigstr />
              <p>
                Gigstr is the gig platform connecting students and companies!
                Companies post jobs for free, match with and hire young
                professionals. You can trial hire before deciding to make a
                permanent hire, or simply continue to hire via Gigstr.{' '}
              </p>
              <PartnerLink href="http://www.gigstr.com/">gigstr.se</PartnerLink>
            </InfoBlock>
            <InfoBlock>
              <JustArrived />
              <p>
                Just Arrived is a non-profit company and a digital service that
                matches newcomers with simple jobs that companies need help
                with.
              </p>
              <PartnerLink href="https://justarrived.se/">
                justarrived.se
              </PartnerLink>
            </InfoBlock>
            <InfoBlock>
              <Taskrunner />
              <p>
                Do you need help to put to gether a furniture from IKEA, do some
                gardening or clean your windos? TaskRunner is here to help. We
                connect you with quality assured people close to you - on
                demand.
              </p>
              <PartnerLink href="https://www.taskrunner.se/">
                taskrunner.se
              </PartnerLink>
            </InfoBlock>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  </Fragment>
)

export default EmployerPage
