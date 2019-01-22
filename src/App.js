import React from 'react'
import { Router, Link } from 'react-static'
import styled, { createGlobalStyle } from 'styled-components'
import Media from 'react-media'
import { hot } from 'react-hot-loader'
//

import Routes from 'react-static-routes'

import Nav from './components/Nav'
import NavMobile from './components/NavMobile'

import background from './img/background.jpg'
import colors from './colors.js'

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Lora:700|Source+Sans+Pro:600i,700');

  * {
    box-sizing: border-box;
  }

  html {
    background-color: ${colors.BLACK};
    font-size: 16px;
    height: 100%;
    overflow-y: scroll;
  }

  body {
    font-family: 'Source Sans Pro', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial,
      'Lucida Grande', sans-serif;
    font-weight: 700;
    color: white;
    margin: 0;
    padding: 0;
    height: 100%;
  }

  @media (max-width: 1200px) {
    html {
      font-size:14px;
    }
  }

  #root {
    height: 100%
  }

`

const AppStyles = styled.div`
  height: 100%;

  a {
    text-decoration: none;
    font-weight: bold;
    font-size: 1.5rem;
  }

  .content {
    height: 100%;
  }

  img {
    max-width: 100%;
  }
`

const App = () => (
  <Router>
    <AppStyles>
      <Media query='(min-width: 900px)'>
        {matches => (matches ? <Nav /> : <NavMobile />)}
      </Media>
      <div className='content'>
        <Routes />
      </div>
      <GlobalStyles />
    </AppStyles>
  </Router>
)

export default hot(module)(App)
