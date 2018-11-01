import React from 'react'
import styled from 'styled-components'

const firstSentence = (text) =>
  text.indexOf('.') === -1
    ? text
    : text.substr(0, text.indexOf('.') + 1)

const cleanPreamble = preamble =>
  preamble
    .replace(/(<([^>]+)>)/ig, ' ') // replace html tags with a space
    .replace(/ {2,}/, ' ') // replace 2 or more spaces with one

const truncate = (string, size = 100, endWith = '...') =>
  string.length < size
    ? string
    : `${string.substr(0, size)}${endWith}`

const Preamble = ({ className, children, content }) => (
  <p
    dangerouslySetInnerHTML={{ __html: truncate(cleanPreamble(firstSentence(content))) }}
    className={className}
  />
)

const StyledPreamble = styled(Preamble)`
  margin-bottom: 2em;
  margin-top: 0;

  @media (min-width: 1000px) {
    height: 65px;
    overflow: hidden;
  }
`

export default StyledPreamble
