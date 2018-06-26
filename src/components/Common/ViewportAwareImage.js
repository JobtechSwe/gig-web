import React, { Component } from 'react'

class ViewportAwareImage extends Component {
  constructor() {
    super()

    this.state = {
      screenWidth: window.screen.width
    }
  }

  updateDimensions() {
    this.setState({ screenWidth: window.screen.width })
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions.bind(this));
  }

  isDesktop() {
    return this.state.screenWidth > 767
  }

  render() {
    return this.isDesktop() ? <this.props.desktop className={this.props.className} /> : <this.props.mobile className={this.props.className} />
  }
}

export default ViewportAwareImage
