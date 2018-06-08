import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-static'
import backgroundStress from '../img/backgroundstress.png'
import logo from '../img/PizzaLogo.png'
import HamburgerMenu from 'react-hamburger-menu'

import * as colors from '../colors.js'

const Logo = styled.img.attrs({
  src: logo,
})`
  position: relative;
  background-color: #1F1F1F;
  border-radius: 150px;
  margin: 0 10px 0 10px;
  width: 200px;
  height: auto;
`

const Nav = styled.nav`
  width: 100%;
  height: 100px;
  background: ${colors.black};
  display: flex;
  justify-content: center;
  
  margin-bottom: 10rem;
  background-image: url(${backgroundStress});

`

const LinkStyles = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${colors.black};
  padding: 12rem 0 1rem 0;
  width: 100%;
  

  a {
    color: white;
    padding: 1rem 0 1rem 0;
    width: 10rem;
    text-align: center;
  }

  a:not(:last-child) { 
    border-bottom:solid 3px #557;/* This will not give border to last li element */
  }
`

const MenuButton = styled.div`
  position: absolute;
  right: 1.5rem;
  top: 1.5rem;
  cursor: pointer;
`

export default class MobileNav extends Component {
  state = {isOpen: false}

  handleClick = () => this.setState({isOpen: !this.state.isOpen})

  render () {
    const { isOpen } = this.state;

    return (
      <Nav>
        {isOpen &&
          <LinkStyles>
            <Link to="/" onClick={this.handleClick}>HOME</Link>
            <Link to="/menu" onClick={this.handleClick}>MENU</Link>
            <Link to="/catering" onClick={this.handleClick}>CATERING</Link>
            <Link to="/events" onClick={this.handleClick}>EVENTS</Link>
            <Link to="/location" onClick={this.handleClick}>LOCATION</Link>
            <Link to="/about" onClick={this.handleClick}>ABOUT</Link>
          </LinkStyles>
        }
        <Link to="/">
          <Logo />
        </Link>
        <MenuButton>
        <HamburgerMenu 
          isOpen={isOpen}
          menuClicked={this.handleClick}
          width={30}
          height={20}
          strokeWidth={3}
          rotate={0}
          color='white'
          borderRadius={0}
          animationDuration={0.1}
        />
        </MenuButton>
      </Nav>
    )
  }
}

