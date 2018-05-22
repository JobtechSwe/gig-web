import React from 'react'
import styled from 'styled-components'
import justArrivedLogo from '../resources/img/just-arrived.png'
import gigstrLogo from '../resources/img/gigstr.png'

const logos = {
  'just-arrived': justArrivedLogo,
  gigstr: gigstrLogo
}

const CardTitle = styled.h3`
  font-weight: 600;
  margin-top: 0;
  margin-bottom: 0.25em;
`

const CardDescription = styled.p`
  margin-bottom: 2em;
  margin-top: 0;
`

const CardIconContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const CardIcon = styled(
  ({ type, text, className }) =>
    <div>
      <i className={[ type, className ].join(' ')} /> {text}
    </div>
)`
  color: #1616b2;
  margin-right: 0.4em;
  font-size: 1.4em;
`

const Card = styled(
  ({ className, source, title, location }) => (
    <div className={className}>
      <img
        src={logos[source]}
        className="img img-responsive"
        alt="Just Arrived"
        style={{
           width: '50%',
           margin: '0 auto',
           marginBottom: '2em'
        }}
      />
      <CardTitle>{title}</CardTitle>
      <CardDescription>Are you interested to work as a delivery driver for a well established company?</CardDescription>
      <CardIconContainer>
        <CardIcon type="i-pin" text={location} />
        <CardIcon type="i-af-calendar-alt" text="21 maj - 31 okt" />
      </CardIconContainer>
    </div>
))`
  background: white;
  margin: 0.5em 1em;
  padding: 1.5em;
  box-shadow: 0 1px 2px rgba(0,0,0,.1);
  margin-bottom: 1.5em;
`

export default Card
