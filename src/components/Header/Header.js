import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import Logo from './Logo'
import MapIcon from '../Icons/MapIcon'
import colors from '../../colors'

const Hamburger = styled(({ className }) =>
  <svg className={className} width="28" height="20" viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line y1="-1" x2="28" y2="-1" transform="translate(0 2)" stroke="#00005A" strokeWidth="2"/>
    <line y1="-1" x2="28" y2="-1" transform="translate(0 11)" stroke="#00005A" strokeWidth="2"/>
    <line y1="-1" x2="28" y2="-1" transform="translate(0 20)" stroke="#00005A" strokeWidth="2"/>
  </svg>
)`
  margin-top: 0.7em;
`

const Header = styled(({ className }) =>
  <div className={'navbar navbar-default ' + className}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div className="navbar-header">
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <Hamburger />
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
