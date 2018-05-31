import React from 'react'
import { Router, Link } from 'react-static'
import styled, { injectGlobal } from 'styled-components'
import { hot } from 'react-hot-loader'
//

import Routes from 'react-static-routes'

import Nav from './components/Nav'

injectGlobal`
  body {
    font-family: 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial,
      'Lucida Grande', sans-serif;
    font-weight: 300;
    font-size: 16px;
    margin: 0;
    padding: 0;
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
      <Nav />
      <div className="content">
        <Routes />
      </div>
    </AppStyles>
  </Router>
)

export default hot(module)(App)
