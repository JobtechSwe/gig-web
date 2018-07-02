import React, { Component } from 'react'
import styled from 'styled-components'

import colors from '../../colors'

import Option from './Option'

class OptionGroup extends Component {
  onClick(option, event) {
    event.stopPropagation()
    this.props.onSelect(option)
  }

  render() {
    const { className, options } = this.props

    return (
      <div className={className}>
        {
          options
            .filter(option => option.display !== false)
            .map(option =>
              <Option key={option.key} onClick={this.onClick.bind(this, option)}>{option.value}</Option>
            )
        }
      </div>
    )
  }
}

const StyledOptionGroup = styled(OptionGroup)`
  background: white;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  box-shadow: 0 2px 6px ${colors.gray50};
`

export default StyledOptionGroup
