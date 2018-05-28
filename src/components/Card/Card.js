import React from 'react'
import styled from 'styled-components'

import Body from './Body'
import Title from './Title'
import Footer from './Footer'
import Preamble from './Preamble'
import SourceImage from './SourceImage'

import CalendarIcon from './Icons/CalendarIcon'
import LocationIcon from './Icons/LocationIcon'
import IconContainer from './Icons/IconContainer'

import colors from '../../colors'

const Card = styled(
  ({ className, job }) => (
    <div className={className}>
      <Body>
        <Title>{job.title}</Title>
        <Preamble>{job.preamble}</Preamble>
        <IconContainer>
          <LocationIcon location={job.address} />
          <CalendarIcon start={job.startDate} end={job.endDate} />
        </IconContainer>
      </Body>
      <Footer>
        <SourceImage source={job.source} />
      </Footer>
    </div>
))`
  background: ${colors.white};
  box-shadow: 0 1px 2px rgba(0,0,0,.1);
  margin-bottom: 1.5em;
`

export default Card
