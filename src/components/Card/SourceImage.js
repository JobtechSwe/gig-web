import React from 'react'

import justArrivedLogo from '../../resources/img/just-arrived.png'
import gigstrLogo from '../../resources/img/gigstr.png'

const sources = {
  'just-arrived': {
    name: 'Just Arrived',
    image: justArrivedLogo
  },
  'gigstr': {
    name: 'Gigstr',
    image: gigstrLogo
  }
}

const SourceImage = ({ source }) =>
  <img
    src={sources[source].image}
    className="img img-responsive"
    alt={sources[source].name}
    style={{
      width: '50%'
    }}
  />

export default SourceImage
