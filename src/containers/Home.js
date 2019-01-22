import React from 'react'
import { withSiteData } from 'react-static'
import HomePageSpecial from '../components/HomePageSpecial'
import ContentContainer from '../components/ContentContainer'
import background from '../img/background.jpg'
//

export default withSiteData(() => (
  <ContentContainer background={background}>
    <HomePageSpecial pizza={'3-topping pizza'} price={'13.99'} />
  </ContentContainer>
))
