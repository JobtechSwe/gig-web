import React, { Fragment } from 'react'

import Intro from './Intro'
import Container from '../Common/Container'
import Footer from '../Common/Footer'
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
              <p>
                At gig.se we collect jobs from several Swedish job platforms and
                employment services. Here you can find part-time or gig jobs.
                This is a perfect opportunity to expand your network and a great
                way to enter the Swedish labor market.
              </p>
            </InfoBlock>

            <InfoBlock>
              <h2>How does it work?</h2>
              <p>
                There is two ways to get started. Either just enter the site and
                start searching for your next job or you can register with
                jobskills.se. Enter your CV and let us match you with jobs
                perfect for you.
              </p>
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
