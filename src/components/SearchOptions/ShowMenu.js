import React, { Component } from 'react'
import styled from 'styled-components'

import SlidersIcon from '../Icons/SlidersIcon'

class SearchOptions extends Component {
  constructor(props) {
    super(props)

    this.state = {
      show: false
    }
  }

  onClick() {
    const { state: { show } } = this
    const newState = !show

    this.setState({ show: newState })

    this.props.toggle(newState)
  }

  render() {
    const { className } = this.props

    return (
      <div>
        <div className={className} onClick={this.onClick.bind(this)}>
          <SlidersIcon /> Search options
        </div>
      </div>
    )
  }
}

const StyledSearchOptions = styled(SearchOptions)`
  background: white;
  padding: 0 14px;
  height: 38px;
  line-height: 38px;
  margin-bottom: 15px;
  font-size: 16px;
  color: black;
  position: relative;
  cursor: pointer;
  font-weight: bold;
  text-align: center;
`

export default StyledSearchOptions
