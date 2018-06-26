import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import PeopleImage from './PeopleImage'

const PositionedPeopleImage = styled(PeopleImage)`
  display: block;
  margin: 0 auto;
  margin-bottom: 2em;

  @media(min-width: 768px) {
    float: right;
  }
`

const Intro = styled(
  ({ className }) =>
    <div className={className}>
      <div className="row">
        <div className="col-md-7 col-md-push-5">
          <PositionedPeopleImage />
        </div>
        <div className="col-md-5 col-md-pull-7">
          <h1>Find jobs in Sweden!</h1>
          <p style={{ marginBottom: '3em' }}>Get matched with gig jobs based on your work experience, competence and education!</p>
          <Link to="/jobs" className="btn btn-primary btn-block btn-lg">
            Find jobs
          </Link>
        </div>
      </div>
    </div>
)`
  margin: 5em 0;
`

export default Intro
