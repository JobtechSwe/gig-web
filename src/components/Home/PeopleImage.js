import React from 'react'

import ViewportAwareImage from '../Common/ViewportAwareImage'
import DesktopPeopleImage from './DesktopPeopleImage'
import MobilePeopleImage from './MobilePeopleImage'

const PeopleImage = ({ className }) =>
  <ViewportAwareImage
    className={className}
    mobile={MobilePeopleImage}
    desktop={DesktopPeopleImage}
  />

export default PeopleImage
