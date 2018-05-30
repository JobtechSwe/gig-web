import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  height: ${props => props.size || 50}px;
  width: ${props => props.size || 50}px;
  border: 3px solid ${props => props.color};
  border-left-color: transparent;
  border-bottom-color: transparent;
  border-radius: 2000px;
  animation: ${rotate} ${props => props.speed || '500ms'} linear infinite;
`

export default Spinner
