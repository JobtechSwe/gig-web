import React from 'react'
import InfoIcon from '../Icons/InfoIcon'

const getHostFromLink = (link) => new URL(link).host

const ApplyInfo = ({ link }) =>
  <div>
    <small><InfoIcon padRight /> You apply for the job at {getHostFromLink(link)}</small>
  </div>

export default ApplyInfo
