import React from 'react'
import styled from 'styled-components'

const MenuToggler = styled(({ className, onMenuTogglerClick }) =>
  <svg onClick={onMenuTogglerClick} className={className} width="28" height="20" viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line y1="-1" x2="28" y2="-1" transform="translate(0 2)" stroke="#00005A" strokeWidth="2"/>
    <line y1="-1" x2="28" y2="-1" transform="translate(0 11)" stroke="#00005A" strokeWidth="2"/>
    <line y1="-1" x2="28" y2="-1" transform="translate(0 20)" stroke="#00005A" strokeWidth="2"/>
  </svg>
)`
  margin-top: 0.7em;
`

export default MenuToggler
