import React from 'react'

import ViewportAwareImage from '../Common/ViewportAwareImage'
import DesktopEmployerImage from './DesktopEmployerImage'
import MobileEmployerImage from './MobileEmployerImage'

const EmployerImage = ({ className }) =>
  <ViewportAwareImage
    className={className}
    mobile={MobileEmployerImage}
    desktop={DesktopEmployerImage}
  />

export default EmployerImage
