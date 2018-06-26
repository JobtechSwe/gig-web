import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import styled from 'styled-components'

import colors from '../../colors'

const HeaderMenuItem = withRouter(styled(
  ({ className, link, children }) => <li className={className}><Link to={link}>{children}</Link></li>
)`
  list-style-type: none;
  border-bottom: ${({ location, link }) => location.pathname === link ? `4px solid ${colors.blue}` : 'none'}
  margin-bottom: -25px;
  margin-right: 40px;

  a {
    color: black;
    font-weight: ${({ location, link }) => location.pathname === link ? 'semi-bold' : 'normal'};

    &:hover, &:active, &:focus {
      text-decoration: none;
      color: black;
    }
  }

  &:last-child {
    margin-right: 0;
  }
`)


const HeaderMenu = styled(
  ({ className }) =>
    <ul className={className}>
      <HeaderMenuItem link="/">Job seekers</HeaderMenuItem>
      <HeaderMenuItem link="/employers">Employers</HeaderMenuItem>
    </ul>
)`
  display: none;

  @media (min-width: 992px) {
    display: flex;
  }
`

export default HeaderMenu
