import React, { Component } from 'react'
import styled from 'styled-components'

import colors from '../colors'

const BackArrow = styled(
  ({ className }) => <span className={className}>〱</span>
)`
  display: inline-block;
  margin: 0 0.6em;
  opacity: 1;
`

class BackButton extends Component {
  static contextTypes = {
    router: () => null
  }

  render() {
    return (
      <div className={this.props.className} onClick={this.context.router.history.goBack}>
        <div className="container">
          <BackArrow />
          Back
        </div>
      </div>
    )
  }
}

const StyledBackButton = styled(BackButton)`
  background: ${colors.primary};
  color: white;
  height: 50px;
  line-height: 50px;
  cursor: pointer;
`

export default StyledBackButton;
