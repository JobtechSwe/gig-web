import React from 'react'
import styled from 'styled-components'

import EmployerImage from './EmployerImage'

const PositionedEmployerImage = styled(EmployerImage)`
  display: block;
  margin: 0 auto;
  margin-bottom: 2em;

  @media (min-width: 767px) {
    float: right;
  }
`

const Intro = styled(({ className }) => (
  <div className={className}>
    <div className="row">
      <div className="col-md-7 col-md-push-5">
        <PositionedEmployerImage />
      </div>
      <div className="col-md-5 col-md-pull-7">
        <h1>For employers</h1>
        <p style={{ marginBottom: '3em' }}>
          We match your gig job with jobseekers with the right work experience,
          competens or education. Let us find your new collegue.
        </p>
      </div>
    </div>
  </div>
))`
  margin: 5em 0;
`

export default Intro
