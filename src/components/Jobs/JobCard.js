import React from 'react'

import Body from '../Card/Body'
import Card from '../Card/Card'
import Title from '../Card/Title'
import Footer from '../Card/Footer'
import Header from '../Card/Header'
import Preamble from '../Card/Preamble'
import SourceImage from '../Card/SourceImage'

import Duration from '../Card/Icons/Duration'
import Location from '../Card/Icons/Location'
import IconContainer from '../Card/Icons/IconContainer'

const cleanPreamble = preamble =>
  preamble
    .replace(/(<([^>]+)>)/ig, ' ') // replace html tags with a space
    .replace(/ {2,}/, ' ') // replace 2 or more spaces with one

const extractCityFromAddress = address =>
  address.includes(',')
    ? address.substr(address.indexOf(',') + 1).trim()
    : address

const firstSentence = (text) =>
  text.indexOf('.') === -1
    ? text
    : text.substr(0, text.indexOf('.') + 1)

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
      <Preamble dangerouslySetInnerHTML={{ __html: cleanPreamble(firstSentence(job.preamble)) }} />
      <IconContainer>
        <Location location={extractCityFromAddress(job.address)} />
        <Duration start={job.startDate} end={job.endDate} />
      </IconContainer>
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
