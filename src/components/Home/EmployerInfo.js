import React from 'react'
import { Link } from 'react-router-dom'
import InfoBox from '../Common/InfoBox'

const EmployerInfo = () =>
  <InfoBox>
    <h2>Do you want to post job ads on Gig?</h2>
    <p>At gig.se we collect jobs from several Swedish job platforms and employment services. Post your ad through our partners.</p>
    <Link to="/employers">Read more about posting jobs</Link>
  </InfoBox>

export default EmployerInfo
