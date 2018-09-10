import React from 'react'
import { withSiteData } from 'react-static'
import HomePageSpecial from '../components/HomePageSpecial'
//


export default withSiteData(() => (
  <div>
    <HomePageSpecial pizza={"3-topping pizza"} price={"13.99"} />
  </div>
))
