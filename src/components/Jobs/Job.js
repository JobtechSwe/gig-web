import React from 'react'
import styled from 'styled-components'
import dayjs from 'dayjs'

import ApplyButton from './ApplyButton'
import Body from '../Card/Body'
import CalendarIcon from '../Icons/CalendarIcon'
import Card from '../Card/Card'
import ClockIcon from '../Icons/ClockIcon'
import Header from '../Card/Header'
import MapIcon from '../Icons/MapIcon'
import Title from '../Card/Title'
import SourceImage from '../Card/SourceImage'

const DATE_FORMAT = 'D MMM'

const Section = styled.div`
  margin: 1em 0;
`

const Job = ({ job }) =>
  <Card>
    <Header>
      <SourceImage source={job.source} />
    </Header>
    <Body>
      <Title>{job.title}</Title>
      <Section>
        <MapIcon padRight /> {job.address}
      </Section>
      <Section>
        <CalendarIcon padRight /> {dayjs(job.startDate).format(DATE_FORMAT)} - {dayjs(job.endDate).format(DATE_FORMAT)}
      </Section>
      <Section>
        <ClockIcon padRight /> Apply before {dayjs(job.endDate).format(DATE_FORMAT)}
      </Section>

      <ApplyButton link={job.link} />

      <p><strong>About the job</strong></p>

      <div style={{ marginBottom: '15px' }} dangerouslySetInnerHTML={{ __html: job.text }} />
      {job.text.length > 250 && <ApplyButton link={job.link} />}
    </Body>
  </Card>

export default Job
