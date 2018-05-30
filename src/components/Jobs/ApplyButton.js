import React from 'react'
import styled from 'styled-components'

import colors from '../../colors'

import ApplyInfo from './ApplyInfo'

const ApplyButton = styled(
  ({ className, link }) =>
    <div>
      <a href={link} target="_blank" className={['btn', 'btn-primary', className].join(' ')}>
        Apply for this job
      </a>
      <ApplyInfo link={link} />
    </div>
)`
  background: ${colors.primary};
  border-color: ${colors.primary};
  font-size: 16px;
  width: 100%;
  font-weight: normal;
  text-transform: none;
  margin-bottom: 10px;

  &:hover {
    background: ${colors.primaryDark};
    border-color: ${colors.primary};
  }
`

export default ApplyButton
