import React from 'react'
import styled from 'styled-components'

import Logo from './Logo'
import Container from '../Common/Container'
import ClickableMenuToggler from '../../containers/Header/ClickableMenuToggler'

const Header = styled(({ className }) =>
  <div className={'navbar navbar-default ' + className}>
    <Container>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div className="navbar-header">
          <Logo />
        </div>
        <ClickableMenuToggler />
      </div>
    </Container>
  </div>
)`
  padding: 1em 0;
  padding-top: calc(1.5em + 3.5px);
  margin-bottom: 0;
  border: none;
  background: #FFF;
`

export default Header
