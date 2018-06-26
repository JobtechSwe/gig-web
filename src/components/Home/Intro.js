import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import PeopleImage from './PeopleImage'
import Button from '../Form/Button'

const PositionedPeopleImage = styled(PeopleImage)`
  display: block;
  margin: 0 auto;
  margin-bottom: 2em;
`

const Intro = styled(
  ({ className }) =>
    <div className={className}>
      <PositionedPeopleImage />
      <h1>Find jobs in Sweden!</h1>
      <p style={{ marginBottom: '3em' }}>Get matched with gig jobs based on your work experience, competence and education!</p>
      <Link to="/jobs">
        <Button large block>Find jobs</Button>
      </Link>
    </div>
)`
  margin: 5em 0;
`

export default Intro
