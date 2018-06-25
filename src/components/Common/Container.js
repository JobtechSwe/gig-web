import React from 'react'

const Container = ({ narrow, children }) =>
  <div className={[
    'container', narrow ? 'container-narrow' : null
    ].join(' ')}
  >
    {children}
  </div>

export default Container
