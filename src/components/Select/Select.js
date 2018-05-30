import React, { Component } from 'react'
import styled from 'styled-components';

import SelectIcon from './SelectIcon'
import OptionGroup from './OptionGroup'

class Select extends Component {
  constructor(props) {
    super(props)

    this.state = {
      expanded: false,
      selectedValue: this.getDefaultSelectedValue(props)
    }
  }

  getDefaultSelectedValue(props) {
    return Object.values(props.options)[0].value
  }

  componentWillReceiveProps(props) {
    if (!props.options.find(opt => opt.value == this.state.selectedValue)) {
      this.setState({ selectedValue: this.getDefaultSelectedValue(props) })
    }
  }

  onSelect(option) {
    this.props.onSelect(option.key)
    this.setState({ selectedValue: option.value, expanded: false })
  }

  onClick() {
    this.setState({ expanded: true })
  }

  render() {
    const { className, prefix, options } = this.props

    return (
      <div className={className} onClick={this.onClick.bind(this)}>
        <SelectIcon />
        {
          this.state.expanded
            ? <OptionGroup onSelect={this.onSelect.bind(this)} options={options} />
            : <span>
                <span dangerouslySetInnerHTML={{ __html: prefix }} />
                {this.state.selectedValue}
              </span>
        }
      </div>
    )
  }
}

const StyledSelect = styled(Select)`
  background: white;
  padding: 0 14px;
  height: 38px;
  line-height: 38px;
  margin-bottom: 15px;
  font-size: 16px;
  color: black;
  position: relative;
  cursor: pointer;
`

export default StyledSelect
