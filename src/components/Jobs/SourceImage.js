import React from 'react'

import justArrivedLogo from '../../resources/img/just-arrived.png'
import gigstrLogo from '../../resources/img/gigstr.png'
import taskRunnerLogo from '../../resources/img/task-runner.png'

const sources = {
  'justarrived': {
    name: 'Just Arrived',
    image: justArrivedLogo
  },
  'gigstr': {
    name: 'Gigstr',
    image: gigstrLogo
  },
  'task-runner': {
    name: 'Task runner',
    image: taskRunnerLogo
  }
}

const SourceImage = ({ source }) =>
  <img
    src={sources[source].image}
    className="img img-responsive"
    alt={sources[source].name}
    style={{
      maxHeight: '35px'
    }}
  />

export default SourceImage
