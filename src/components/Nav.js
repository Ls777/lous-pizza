import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-static'
import backgroundStress from '../img/backgroundstress.png'
import logo from '../img/PizzaLogo.png'

import * as colors from '../colors.js'

const Logo = styled.img.attrs({
  src: logo,
})`
  background-color: #1F1F1F;
  border-radius: 150px;
  margin: 0 10px 0 10px
`

const Nav = styled.nav`
  width: 100%;
  height: 100px;
  background: ${colors.black};
  display: flex;
  justify-content: center;
  color: ${colors.red};
  font-size: 14px;
  margin-bottom: 10rem;
  background-image: url(${backgroundStress});

  span {
    color: ${colors.yellow};
    padding: 5px;
  }
`

const LinkStyles = styled.div`
  a {
    color: white;
    padding: 0 1rem 0 1rem;
    margin: 1rem 0 1rem 0;
    display: inline-block;
  }

  a:not(:last-child) { 
    border-right:solid 3px #557;/* This will not give border to last li element */
  }
`

const LeftAlignLinks = styled.div`
  display: flex;
  flex-direction: column;
  
`

const RightAlignLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default () => (
  <Nav>
    <RightAlignLinks>
      <LinkStyles>
        <Link to="/">HOME</Link>
        <Link to="/menu">MENU</Link>
        <Link to="/catering">CATERING</Link>
      </LinkStyles>
      <div>
        OPEN
        <span>11AM - 1AM</span>
        WEEKDAYS
        <span>11AM - 9PM</span>
        SUNDAYS
      </div>
    </RightAlignLinks>
    <Link to="/">
      <Logo />
    </Link>
    <LeftAlignLinks>
      <LinkStyles>
        <Link to="/events">EVENTS</Link>
        <Link to="/location">LOCATION</Link>
        <Link to="/about">ABOUT</Link>
      </LinkStyles>
      <div>
        CALL US at
        <span>123-456-7890</span>
        EMAIL:
        <span>feedback@louspizza.com</span>
      </div>
    </LeftAlignLinks>
  </Nav>
)
