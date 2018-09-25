import React, { Component } from 'react'
import styled from 'styled-components'

import colors from '../../colors'

const MAX_PAGE_OFFSET = 6

const PaginationButton = styled(
  ({ onClick, className, text, attr }) =>
    <button className={className} {...attr} onClick={onClick}>
      {text}
    </button>
)`
  background: transparent;
  border: none;
  text-decoration: underline;
  width: 100%;
  &:disabled {
    color: ${colors.gray50};
    text-decoration: none;
  }
`

function pageRange (current, total) {
  const split = Math.floor(MAX_PAGE_OFFSET / 2)

  if (current === 1 && total === 1) {
    return [current]
  }

  let inc = Math.max(0, Math.min(split, total - current))
  let min = Math.max(1, current - split)

  const maxReached = (current + inc) >= total
  const minReached = min === 1

  if (!minReached && maxReached) {
    min = Math.max(1, min - (split - inc))
  } else if (minReached && !maxReached) {
    inc = Math.min(total - 1, inc + (split - (current - min)))
  }

  const start = (current - min)
  const steps = start + (inc + 1)

  const range = [...new Array(steps)].map((_, i) => min + i)

  return range
}

class LoadMoreJobs extends Component {
  async onClick (page, event) {
    event.stopPropagation()
    await this.props.setPage(page)

    // document.querySelector('.navbar').scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' })
    document.querySelector('.navbar').scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  render () {
    const { pagination, className } = this.props

    const { currentPage: current, totalPages: total } = pagination

    const prev = current > total
    const next = current < total

    return <div className={className}>
      {prev && <PaginationButton key="prev" onClick={this.onClick.bind(this, current - 1)} text="<"/>}
      {
        pageRange(current, total).map(page => {
          const disabled = page === current ? { disabled: true } : null
          return <PaginationButton attr={disabled} key={page} onClick={this.onClick.bind(this, page)} text={page} />
        })
      }
      {next && <PaginationButton key="next" onClick={this.onClick.bind(this, current + 1)} text=">" />}
    </div>
  }
}

const StyledLoadMoreJobs = styled(LoadMoreJobs)`
  color: ${colors.blue};
  font-weight: 600;
  max-width: 500px;
  display: flex;
  margin: 2em auto;
  align-items: center;
`

export default StyledLoadMoreJobs
