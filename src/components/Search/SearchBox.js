import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import colors from '../../colors'
import SearchInput from './SearchInput'

const Select = styled.div`
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

const SelectIcon = styled(
  ({ className }) => <div className={className}><i className="i-angle-down"></i></div>
)`
  position: absolute;
  color: ${colors.blue};
  right: 0.6em;
  top: 0;
  font-size: 1.4em;
`

const OptionsBox = styled.div`
  background: white;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  box-shadow: 0 2px 6px ${colors.gray50};
`

const Option = styled.div`
  padding: 2px 14px;
  cursor: pointer;

  &:hover {
    background: ${colors.gray30};
  }
`

class SearchBox extends Component {
  constructor(props) {
    super(props)

    this.state = {
      selectExpanded: false,
      selectedItem: props.profileSource ? 'ref' : 'recent',
      options: {
        ref: 'Best match',
        recent: 'Recently posted',
        distance: 'Distance',
        startDate: 'Start date',
        duration: 'Duration'
      }
    }
  }

  openSelect() {
    this.setState({ selectExpanded: true })
  }

  onSelect(value, event) {
    event.stopPropagation()
    this.setState({ selectedItem: value, selectExpanded: false })
  }

  clearProfile() {
    if (this.state.selectedItem === 'ref') {
      this.setState({ selectedItem: 'recent' })
    }

    this.props.clearProfile()
  }

  render() {
    const { className, search, onSearch, profileSource, clearProfile } = this.props

    return (
      <div className={[className].join(' ')}>
      <div className="container">
        <SearchInput value={search} onChange={onSearch} />
        <Select onClick={this.openSelect.bind(this)}>
          <strong>Sort:</strong> {this.state.options[this.state.selectedItem]}
          <SelectIcon />
          {
            this.state.selectExpanded &&
              <OptionsBox>
                {this.props.profileSource && <Option onClick={this.onSelect.bind(this, 'ref')}>{this.state.options.ref}</Option>}
                <Option onClick={this.onSelect.bind(this, 'recent')}>{this.state.options.recent}</Option>
                <Option onClick={this.onSelect.bind(this, 'distance')}>{this.state.options.distance}</Option>
                <Option onClick={this.onSelect.bind(this, 'startDate')}>{this.state.options.startDate}</Option>
                <Option onClick={this.onSelect.bind(this, 'duration')}>{this.state.options.duration}</Option>
              </OptionsBox>
          }
        </Select>
        {
          profileSource &&
            <p className="pull-left" style={{ fontSize: '12px', color: 'white', marginTop: '-6px' }}>
              <button
                onClick={clearProfile}
                style={{ display: 'inline-block', background: 'transparent', border: 'none', textDecoration: 'underline', padding: 0 }}
              >
                Clear {profileSource} profile
              </button>
            </p>
        }
      </div>
    </div>
    )
  }
}

const StyledSearchBox = styled(SearchBox)`
  background: ${colors.primary};
  color: white;
  padding-top: 1em;
  margin-bottom: 1.5em;
  font-weight: 200;
`

export default StyledSearchBox
