import React from 'react'
import styled from 'styled-components'

import Logo from './Logo'

const Navbar = ({ className }) => (
  <div className={'navbar navbar-default ' + className} style={{ marginBottom: 0 }}>
    <div className="container">
      <div className="navbar-header">
        <Logo />
      </div>
    </div>
  </div>
)

export default styled(Navbar)`
  padding: 1em;
`
