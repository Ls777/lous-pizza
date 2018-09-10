import React from 'react'
import { Router, Link } from 'react-static'
import styled, { injectGlobal } from 'styled-components'
import Media from 'react-media'
import { hot } from 'react-hot-loader'
//

import Routes from 'react-static-routes'

import Nav from './components/Nav'
import NavMobile from './components/NavMobile'

import background from './img/background.jpg'
import * as colors from './colors.js'

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Lora:700|Source+Sans+Pro:600i,700');

  html {
    background: url(${background}) no-repeat center fixed; ;
    background-size: cover;
    font-size: 16px;

  }

  body {
    font-family: 'Source Sans Pro', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial,
      'Lucida Grande', sans-serif;
    font-weight: 700;
    color: white;
    margin: 0;
    padding: 0;
  }

  @media (max-width: 1200px) {
    html {
      font-size:14px;
    }
  }
`

const AppStyles = styled.div`
  a {
    text-decoration: none;
    font-weight: bold;
    font-size: 1.5rem;
  }

  .content {
    padding: 1rem;
  }

  img {
    max-width: 100%;
  }
`



const App = () => (
  <Router>
    <AppStyles>
      <Media query="(min-width: 900px)">
        {matches => matches ? <Nav /> : <NavMobile />}
      </Media>
      <div className="content">
        <Routes />
      </div>
    </AppStyles>
  </Router>
)

export default hot(module)(App)
