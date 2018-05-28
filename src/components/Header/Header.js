import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import Logo from './Logo'

const Header = styled(({ className }) =>
  <div className={'navbar navbar-default ' + className}>
    <div className="container">
      <div className="navbar-header">
        <Link to="/">
          <Logo />
        </Link>
      </div>
    </div>
  </div>
)`
  padding: 1em;
  margin-bottom: 0;
`

export default Header
