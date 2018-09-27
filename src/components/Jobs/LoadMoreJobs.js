import React, { Component } from 'react'
import styled from 'styled-components'
import colors from '../../colors'

const MAX_PAGE_OFFSET = 6

const PaginationButton = styled(
  ({ onClick, text, active, className }) =>
    <li className={[className].join(' ')}>
      {active
        ? <span>{text}</span>
        : (
          // AF uses A-nodes  their visual guidelines
          // eslint-disable-next-line
          <a href="#" onClick={onClick}>{text}</a>
        )
      }
    </li>
)`
  &.active, &.disabled {
    & > a, & > span {
      &, &:hover {
        color: ${colors.gray90};
        text-decoration: none;
        background: none;
        border-color: transparent;
      }
    }
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
  async onClick (page, enabled, event) {
    event.stopPropagation()

    if (!enabled) {
      return
    }

    await this.props.setPage(page)

    document.querySelector('.navbar').scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  render () {
    const { pagination, className } = this.props

    const { currentPage: current, totalPages: total } = pagination

    const prev = current > 1
    const next = current < total
    const offset = Math.floor(MAX_PAGE_OFFSET / 2)

    const toStart = (current - offset) > 1 && <PaginationButton key="start" onClick={this.onClick.bind(this, 1, true)} text="<<" />
    const toEnd = (current + offset) < total && <PaginationButton key="end" onClick={this.onClick.bind(this, total, true)} text=">>" />

    return <ul className={[className, 'pagination'].join(' ')}>
      {toStart}
      <PaginationButton className={!prev && 'disabled'} key="prev" onClick={this.onClick.bind(this, current - 1, prev)} text="<" />
      {
        pageRange(current, total).map(page => {
          const active = page === current
          return <PaginationButton className={active && 'active'} active={active} key={page} onClick={this.onClick.bind(this, page, true)} text={page} />
        })
      }
      <PaginationButton className={!next && 'disabled'} key="next" onClick={this.onClick.bind(this, current + 1, next)} text=">" />
      {toEnd}
    </ul>
  }
}

const StyledLoadMoreJobs = styled(LoadMoreJobs)`
  max-width: 500px;
  display: flex;
  margin: 2em auto 7em;
  align-items: center;
  justify-content: center;
  li {
    & > a, & > span {
      padding: 0.3em 0.5em;
      margin-right: 5px;
      margin-bottom: 5px;
      border-radius: 0 !important;
      &, &:active, &:focus, &:hover {
        color: ${colors.gray90};
      }
    }
  }
`

export default StyledLoadMoreJobs
