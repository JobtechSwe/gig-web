import React from 'react'
import styled from 'styled-components'
import { CSSTransition } from 'react-transition-group'

const Backdrop = styled.div`
  position: absolute;
  background: rgba(0, 0, 0, 0.4);
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  z-index: 10000;
`


const CloseMenuButton = ({ onClick, className }) =>
  <svg className={className} onClick={onClick} width="38" height="39" viewBox="0 0 38 39" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M38 0H0V20.3125V22.75H0.160156C1.37451 31.9191 9.34644 39 19 39C28.6536 39 36.6255 31.9191 37.8398 22.75H38V20.3125V0Z" fill="#00005A"/>
    <path d="M8.74983 7.31265L14.5971 1.56131C14.9604 1.20429 14.9604 0.625013 14.5971 0.267993C14.2338 -0.0893311 13.6455 -0.0893311 13.2822 0.267993L7.43494 6.01933L1.58736 0.267993C1.22407 -0.0893311 0.635748 -0.0893311 0.272464 0.267993C-0.0908212 0.625013 -0.0908212 1.20429 0.272464 1.56131L6.12005 7.31265L0.272464 13.064C-0.0908212 13.421 -0.0908212 14.0003 0.272464 14.3573C0.454106 14.5357 0.692163 14.625 0.92991 14.625C1.16766 14.625 1.40571 14.5357 1.58736 14.357L7.43494 8.60567L13.2822 14.357C13.4639 14.5357 13.7019 14.625 13.9397 14.625C14.1774 14.625 14.4155 14.5357 14.5971 14.357C14.9604 14 14.9604 13.4207 14.5971 13.0637L8.74983 7.31265Z" transform="translate(11.5652 13)" fill="white"/>
  </svg>

const PositionedCloseMenuButton = styled(CloseMenuButton)`
  position: absolute;
  right: 14px;
`

const Menu = styled(
  ({ className, onCloseClick }) =>
    <div className={className}>
      <PositionedCloseMenuButton onClick={onCloseClick} />
    </div>
)`
  height: 100vh;
  background: white;
  position: absolute;
  width: 90%;
  top: 0;
  right: 0;
  z-index: 10000;
`

const SideBarMenu = ({ className, show, onCloseClick }) =>
  <div className={className}>
    <CSSTransition in={show} timeout={300} classNames="side-bar-backdrop" unmountOnExit>
      <Backdrop onClick={onCloseClick} />
    </CSSTransition>
    <CSSTransition in={show} timeout={300} classNames="side-bar-menu" unmountOnExit>
      <Menu onCloseClick={onCloseClick} />
    </CSSTransition>
  </div>

export default SideBarMenu
