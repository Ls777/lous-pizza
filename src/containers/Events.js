import React from 'react'
import { withSiteData } from 'react-static'
import ContentContainer from '../components/ContentContainer'
import background from '../img/background3.jpg'
import styled from 'styled-components'
import colors from '../colors'

export default withSiteData(() => (
  <ContentContainer background={background}>
    <Title>Events</Title>
    <EventContainer>
      <h4>Upcoming:</h4>
    </EventContainer>
  </ContentContainer>
))

const Title = styled.h1`
  font-family: Lora;
  font-size: 60px;
  max-width: 60rem;
  margin: 0 auto 3rem;

  @media (max-width: 900px) {
    text-align: center;
    margin: 5rem auto -5rem;
  }
`

const EventContainer = styled.div`
  background-color: ${colors.BLACK};
  max-width: 60rem;
  margin: 0 auto;
  height: 30rem;
`
