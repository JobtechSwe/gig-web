import styled from 'styled-components'

const Layout = styled.div`
  @media(min-width: 1000px) {
    display: flex;
    flex-flow: row wrap;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    height: 100%;
    margin-left: -8px;
    margin-right: -8px;
  }
`

export default Layout
