import React from 'react'
import styled from 'styled-components'

const LinkIcon = styled(
  ({ className }) =>
    <svg className={className} width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M9.625 11H1.375C0.615542 11 0 10.3845 0 9.625V1.375C0 0.615542 0.615542 0 1.375 0H11V9.625C11 10.3845 10.3845 11 9.625 11ZM1.375 1.375H9.625V9.625H1.375V1.375ZM2.75 0H4.58333V1.375H2.75V0ZM9.62476 6.4165H10.9998V8.24984H9.62476V6.4165Z" fill="#1616B2"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M0 5.27083L5.27083 0L6.1875 0.916667L0.916667 6.1875L0 5.27083Z" transform="translate(4.125 0.6875)" fill="#1616B2"/>
    </svg>
)`
  display: inline-block;
  margin-right: 8px;
`

const PartnerLink = styled(
  ({ className, href, children }) =>
    <a className={className} href={href} target="_blank">
      <LinkIcon />{children}
    </a>
)`
  font-size: 18px;
  font-weight: normal;
`

export default PartnerLink
