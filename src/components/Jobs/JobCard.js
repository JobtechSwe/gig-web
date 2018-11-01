import React from 'react'

import Body from '../Card/Body'
import Card from '../Card/Card'
import Title from '../Card/Title'
import Footer from '../Card/Footer'
import Header from '../Card/Header'
import Preamble from '../Card/Preamble'
import SourceImage from './SourceImage'

import Duration from './Duration'
import Location from './Location'
import HorizontalIconContainer from '../Icons/HorizontalIconContainer'

const extractCityFromAddress = address =>
  address.includes(',')
    ? address.substr(address.indexOf(',') + 1).trim()
    : address

const JobCard = ({ job, children, sourceImagePosition = 'footer' }) =>
  <Card>
    {
      sourceImagePosition === 'header' &&
      <Header>
        <SourceImage source={job.source} />
      </Header>
    }
    <Body>
      <Title>{job.title}</Title>
      <Preamble content={job.preamble} />
      <HorizontalIconContainer>
        <Location location={extractCityFromAddress(job.address)} />
        <Duration start={job.startDate} end={job.endDate} />
      </HorizontalIconContainer>
      {children}
    </Body>
    {
      sourceImagePosition === 'footer' &&
        <Footer>
          <SourceImage source={job.source} />
        </Footer>
    }
  </Card>

export default JobCard
