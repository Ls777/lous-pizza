import React from 'react'
import { withSiteData } from 'react-static'
import HomePageSpecial from '../components/HomePageSpecial'
import ContentContainer from '../components/ContentContainer'

export default withSiteData(() => (
  <div>
    <ContentContainer>
      We are Here
    </ContentContainer>
  </div>
))
