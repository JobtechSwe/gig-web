import styled from 'styled-components'

import colors from '../../colors'

const Option = styled.div`
  padding: 2px 14px;
  cursor: pointer;

  &:first-child {
    border-radius: 5px 5px 0 0;
  }

  &:last-child {
    border-radius: 0 0 5px 5px;
  }

  &:hover {
    background: ${colors.gray30};
  }
`

export default Option
