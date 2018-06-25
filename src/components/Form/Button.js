import React from 'react'
import styled from 'styled-components'

const Button = styled((props) =>
  <button
    className={[
      props.className,
      'btn',
      'btn-' + (props.color || 'primary'),
      props.block ? 'btn-block' : null,
      props.large ? 'btn-lg' : null,
      props.small ? 'btn-sm' : null,
    ].join(' ')}
  >
    {props.children}
  </button>
)`
  font-weight: normal;
  text-transform: none;
`

export default Button
