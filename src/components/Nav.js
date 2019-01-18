import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-static'
import backgroundStress from '../img/backgroundstress.png'
import logo from '../img/PizzaLogo.png'

import colors from '../colors.js'

const Logo = styled.img.attrs({
  src: logo
})`
  background-color: #1f1f1f;
  border-radius: 150px;
  margin: 0 0.5rem 0 0.5rem;
  @media (max-width: 1200px) {
    width: 200px;
    height: auto;
  }
`

const Nav = styled.nav`
  width: 100%;
  height: 100px;
  background: ${colors.BLACK};
  display: flex;
  justify-content: center;
  color: ${colors.RED};
  font-size: 0.9rem;
  margin-bottom: 10rem;
  background-image: url(${backgroundStress});

  span {
    color: ${colors.YELLOW};
    padding: 0.3rem;
  }
`

const LinkStyles = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: relative;
  ${props => props.pos}: -1.5rem;

  a {
    color: white;
    padding: 0;
    margin: 1rem 0 1rem 0;
    display: inline-block;
  }

  div {
    position: relative;
  }

  a:before {
    content: ' ';
    display: block;
    position: absolute;
    margin-left: -10%;
    width: 0;
    height: 20px;
    background: ${colors.RED};
    top: 47%;
    animation: out 0.2s cubic-bezier(1, 0, 0.58, 0.97) 1 both;
    mix-blend-mode: lighten;
    transform: rotate(3deg);
  }
  .active:before {
    left: 0;
    right: auto;
    width: 120%;
  }
  a:not(.active):hover:before {
    animation: in 0.1s cubic-bezier(1, 0, 0.58, 0.97) 1 both;
  }

  @keyframes in {
    0% {
      width: 0;
      left: 0;
      right: auto;
    }
    100% {
      left: 0;
      right: auto;
      width: 120%;
    }
  }

  a:not(:last-child) {
    border-right: solid 0px #557;
  }
`

const VerticalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const InfoStyles = styled.div`
  font-size: 3px;
`

export default () => (
  <Nav>
    <VerticalWrapper>
      <LinkStyles pos={'left'}>
        <div>
          <Link to='/' activeClassName='home'>
            HOME
          </Link>
        </div>
        <div>
          <Link to='/menu'>MENU</Link>
        </div>
        <div>
          <Link to='/catering'>CATERING</Link>
        </div>
      </LinkStyles>
      <div>
        OPEN
        <span>11AM - 1AM</span>
        WEEKDAYS
        <span>11AM - 9PM</span>
        SUNDAYS
      </div>
    </VerticalWrapper>
    <Link to='/'>
      <Logo />
    </Link>
    <VerticalWrapper>
      <LinkStyles pos={'right'}>
        <div>
          <Link to='/events'>EVENTS</Link>
        </div>
        <div>
          <Link to='/location'>LOCATION</Link>
        </div>
        <div>
          <Link to='/about'>ABOUT</Link>
        </div>
      </LinkStyles>
      <div>
        CALL US at
        <span>123-456-7890</span>
        EMAIL:
        <span>feedback@louspizza.com</span>
      </div>
    </VerticalWrapper>
  </Nav>
)
