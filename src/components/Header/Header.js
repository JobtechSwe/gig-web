import React from 'react'
import styled from 'styled-components'

import Logo from './Logo'

const Header = styled(({ className }) =>
  <div className={'navbar navbar-default ' + className}>
    <div className="container">
      <div className="navbar-header">
        <Logo />
      </div>
    </div>
  </div>
)`
  padding: 1em;
  margin-bottom: 0;
`

export default Header
