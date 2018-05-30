import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import Logo from './Logo'
import MapIcon from '../Icons/MapIcon'
import colors from '../../colors'

const Header = styled(({ className }) =>
  <div className={'navbar navbar-default ' + className}>
    <div className="container">
      <div className="navbar-header">
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <ul className="nav navbar-nav navbar-right hidden-xs">
        <li style={{ lineHeight: '2em', paddingTop: '0.25em' }}>
          <Link to="/map" style={{ display: 'inline', color: 'black' }}><MapIcon padRight fill={colors.primary} />Show gigs on map</Link>
        </li>
      </ul>
    </div>
  </div>
)`
  padding: 1em;
  margin-bottom: 0;
`

export default Header
