import React, { Component } from 'react'
import styled from 'styled-components'

class SearchOptionsButton extends Component {
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
    const {
      props: { className, total }
    } = this

    const displayTotal = total > 0

    return (
      <div className={className}>
        <div onClick={this.onClick.bind(this)}>
          { displayTotal ? `Show ${total} jobs` : 'Close' }
        </div>
      </div>
    )
  }
}

const StyledSearchOptionsButton = styled(SearchOptionsButton)`
  div {
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
  }
`

export default StyledSearchOptionsButton
