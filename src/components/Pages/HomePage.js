import React, { Fragment } from 'react'
import styled from 'styled-components'
import colors from '../../colors'
import { Link } from 'react-router-dom'

import Button from '../Form/Button'
import PeopleImage from '../Home/PeopleImage'
import Container from '../Common/Container'
import AFLogo from '../Common/AFLogo'

const Separator = styled.div`
  height: 6px;
  background: ${colors.primary};
  width: 40%;
`

const Intro = styled(
  ({ className }) =>
    <div className={className}>
      <div style={{ textAlign: 'center', marginBottom: '2em' }}>
        <PeopleImage />
      </div>
      <h1>Find jobs in Sweden!</h1>
      <Separator />
      <p style={{ marginBottom: '3em' }}>Get matched with gig jobs based on your work experience, competence and education!</p>
      <Link to="/jobs">
        <Button large block>Find jobs</Button>
      </Link>
    </div>
)`
  margin: 5em 0;
`

const InfoBlock = styled.div`
  margin: 5em 0;
`

const InfoBox = styled.div`
  background: ${colors.gray10};
  border-left: 8px solid ${colors.primary};
  padding: 2em 1.5em;
  margin-bottom: 5em;
`

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
        <InfoBox>
          <h2>Do you want to post job ads on Gig?</h2>
          <p>At gig.se we collect jobs from several Swedish job platforms and employment services. Post your ad through our partners.</p>
          <Link to="/employers">Read more about posting jobs</Link>
        </InfoBox>
      </Container>
      <Footer />
    </div>
  </Fragment>
)

export default HomePage
