import React from 'react'
import Card from '../Card/Card'
import Body from '../Card/Body'

import styled from 'styled-components'
import colors from '../../colors'

const ListItem = styled(({ className, job, onSelectJob }) =>
  <div className={className}>
    <h3 style={{ fontSize: '16px', marginRight: '4px' }}>{job.title}</h3>
    <button onClick={() => onSelectJob(job)} style={{
      color: colors.primary,
      borderColor: colors.primary,
      borderWidth: '1px',
      borderRadius: '3px',
      background: 'transparent',
      outline: 0
    }}>Show</button>
  </div>
)`
  display: flex;
  justify-content: space-between;

  &:not(:last-child) {
    padding-bottom: 1em;
    margin-bottom: 1em;
    border-bottom: 1px solid ${colors.gray20};
  }
`

const MultipleSelectedJobsList = styled(({ className, jobs, onSelectJob }) =>
  <div className={className}>
    <Card>
      <Body>
        <div style={{ maxHeight: '300px', overflowY: 'scroll' }}>
          {jobs.map(job => <ListItem key={job.id} job={job} onSelectJob={onSelectJob} />)}
        </div>
      </Body>
    </Card>
  </div>
)`
  position: absolute;
  width: calc(100% - 20px);
  left: 10px;
  bottom: 0;

  padding: 20px;

  @media(min-width: 768px) {
    width: 500px;
    left: calc(50% - 250px);
  }
`

export default MultipleSelectedJobsList
