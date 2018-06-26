import React from 'react'

const MenuToggler = ({ className, onMenuTogglerClick }) =>
  <svg onClick={onMenuTogglerClick} className={className} width="28" height="24" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line y1="-1" x2="28" y2="-1" transform="translate(0 4)" stroke="#00005A" strokeWidth="2"/>
    <line y1="-1" x2="28" y2="-1" transform="translate(0 13)" stroke="#00005A" strokeWidth="2"/>
    <line y1="-1" x2="28" y2="-1" transform="translate(0 22)" stroke="#00005A" strokeWidth="2"/>
  </svg>

export default MenuToggler
