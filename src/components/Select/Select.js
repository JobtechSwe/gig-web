import React, { Component } from 'react'
import styled from 'styled-components';

import colors from '../../colors'

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
    const visibleOptions = props.options.filter(option => option.display !== false)

    if (visibleOptions.length === 0) {
      return ''
    }

    return visibleOptions[0].value
  }

  componentWillReceiveProps(props) {
    const currentSelection = props.options.find(opt => opt.value === this.state.selectedValue)

    if (!currentSelection || currentSelection.display === false) {
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
  background: ${colors.gray20};
  padding: 0 14px;
  height: 38px;
  line-height: 38px;
  margin-bottom: 15px;
  font-size: 16px;
  color: black;
  position: relative;
  cursor: pointer;
  border-radius: 5px;
`

export default StyledSelect
