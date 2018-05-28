import React from 'react'

import colors from '../../colors'
import styled from 'styled-components';

const MapIcon = ({ fill, className }) =>
  <div className={className}>
    <svg width="21" height="21" viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M11.9497 2.04752C9.21627 -0.682507 4.78411 -0.682507 2.05026 2.04752C-0.412865 4.50754 -0.69014 9.13951 1.4002 11.923L7 20L12.5998 11.923C14.6901 9.13951 14.4129 4.50754 11.9497 2.04752ZM7.06816 9.23067C5.79193 9.23067 4.75754 8.19758 4.75754 6.92295C4.75754 5.64832 5.79193 4.61524 7.06816 4.61524C8.3444 4.61524 9.37879 5.64832 9.37879 6.92295C9.37879 8.19758 8.3444 9.23067 7.06816 9.23067Z"
        fill={fill || colors.blue} />
    />
    </svg>
  </div>

const StyledMapIcon = styled(MapIcon)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: sub;
  height: 21px;
  width: 21px;
  margin-right: ${({ padRight }) => padRight ? '0.4em' : '0'};
`



export default StyledMapIcon
