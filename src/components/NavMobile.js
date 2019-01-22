import React, { Component } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { Link } from 'react-static'
import backgroundStress from '../img/backgroundstress.png'
import logo from '../img/PizzaLogo.png'
import HamburgerMenu from 'react-hamburger-menu'
import Triangle from './Triangle'
import Star from './Star'

import colors from '../colors.js'

const GlobalStyle = createGlobalStyle`
  html {
    overflow-y: ${({ isOpen }) => (isOpen ? 'hidden' : 'scroll')} !important;
  }
`

const Logo = styled.img.attrs({
  src: logo
})`
  position: relative;
  background-color: #1f1f1f;
  border-radius: 150px;
  margin: 0 10px 0 10px;
  width: 200px;
  height: auto;
  z-index: 10;
`

const Nav = styled.nav`
  width: 100%;
  height: 100px;
  background: ${colors.BLACK};
  display: flex;
  justify-content: center;
  position: absolute;
  z-index: 10;
  background-image: url(${backgroundStress});
`

const LinkStyles = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${colors.BLACK};
  padding: 12rem 0 1rem 0;
  width: 100%;
  margin-top: 2rem;
  height: 100vh;
  z-index: 5;

  a {
    color: white;
    padding: 1rem 0 1rem 0;
    text-align: center;
    font-family: Lora;
    font-size: 48px !important;
  }
`

const MenuButton = styled.div`
  position: absolute;
  right: 1.5rem;
  top: 1.5rem;
  z-index: 10;
  cursor: pointer;
`
const DividerStyles = styled.div`
  display: flex;
  align-items: center;
  svg {
    margin: 0px 5px;
  }
  div {
    margin: 0px 10px;
    width: 0 !important;
  }
`

const Divider = () => (
  <DividerStyles>
    <Triangle left />
    <Star repeat={3} yellow size={1.2} />
    <Triangle />
  </DividerStyles>
)

export default class MobileNav extends Component {
  state = { isOpen: false }

  handleClick = () => this.setState({ isOpen: !this.state.isOpen })

  render () {
    const { isOpen } = this.state

    return (
      <Nav>
        <GlobalStyle isOpen={isOpen} />
        {isOpen && (
          <LinkStyles>
            <Link to='/' onClick={this.handleClick}>
              Home
            </Link>
            <Divider />
            <Link to='/menu' onClick={this.handleClick}>
              Menu
            </Link>
            <Divider />
            <Link to='/catering' onClick={this.handleClick}>
              Catering
            </Link>
            <Divider />
            <Link to='/events' onClick={this.handleClick}>
              Events
            </Link>
            <Divider />
            <Link to='/location' onClick={this.handleClick}>
              Location
            </Link>
            <Divider />
            <Link to='/about' onClick={this.handleClick}>
              About
            </Link>
          </LinkStyles>
        )}
        <Link to='/'>
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
