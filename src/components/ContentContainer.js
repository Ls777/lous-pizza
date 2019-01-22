import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import colors from '../colors'

const ContentContainer = ({ children, ...props }) => (
  <React.Fragment>
    <Container>
      <Background {...props} />
      {children}
    </Container>
    <Footer>
      <h4>Copywright bla bla</h4>
    </Footer>
  </React.Fragment>
)

const Container = styled.div`
  padding: 1rem;
  padding-top: 10rem;
  width: 100%;
  overflow-x: hidden;
  margin: 0rem;
  min-height: 100%;
`
const Background = createGlobalStyle`
html {
  background: url(${props => props.background}) no-repeat center fixed;
  background-size: cover;
}
`

const Footer = styled.div`
  background-color: ${colors.BLUEGREY};
  height: 10em;
`

export default ContentContainer
