import React, { Component } from 'react'
import styled from 'styled-components'

import colors from '../../colors'

class ButtonToggle extends Component {
  constructor(props) {
    super(props)

    this.state = {
      checked: this.getDefaultValue(props)
    }
  }

  getDefaultValue(props) {
    return !!props.checked
  }

  onChange() {
    const checked = !this.state.checked
    this.setState({ checked })

    this.props.onUpdate(checked)
  }

  render() {
    const {
      props: { className, text },
      state: { checked }
    } = this

    return (
      <div className={[className, checked && 'checked', 'custom-control', 'custom-radio'].join(' ')} onClick={this.onChange.bind(this)}>
        <input
          type="radio"
          className="custom-control-input"
          checked={checked}
          onChange={this.onChange.bind(this)} />
        <label className="custom-control-label">{text}</label>
      </div>
    )
  }
}

const StyledButtonToggle = styled(ButtonToggle)`
  background: ${colors.gray20};

  &.checked {
    background: ${colors.blue};
    color: ${colors.white};
  }

  border-radius: 5px;
  margin: 0 auto;
  padding: 0 .8em;
  height: 38px;
  line-height: 38px;
  vertical-align: top;

  &, & * {
    &, &:hover, &:active, &:focus {
      cursor: pointer;
    }
  }

  input, label {
    margin: 0 auto;
  }
  input {
    line-height: 38px;
    vertical-align: middle;
    margin-top: -4px;
  }
  label {
    padding-left: .8em;
  }
`

export default StyledButtonToggle
