import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import Logo from './Logo'
import ClickableMenuToggler from '../../containers/Header/ClickableMenuToggler'
import MapIcon from '../Icons/MapIcon'
import colors from '../../colors'

const Header = styled(({ className }) =>
  <div className={'navbar navbar-default ' + className}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div className="navbar-header">
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <ClickableMenuToggler />
      </div>
      <ul className="nav navbar-nav navbar-right hidden-xs">
        <li style={{ lineHeight: '2em', paddingTop: '0.25em' }}>
          <Link to="/map" style={{ display: 'inline', color: 'black' }}><MapIcon padRight fill={colors.primary} />Show gigs on map</Link>
        </li>
      </ul>
  </div>
)`
  padding: 1em 1.5em;
  margin-bottom: 0;
  border: none;
  background: #FFF;
`

export default Header
