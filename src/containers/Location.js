import React from 'react'
import { withSiteData } from 'react-static'
import ContentContainer from '../components/ContentContainer'
import styled from 'styled-components'

export default withSiteData(() => (
  <div>
    <ContentContainer>
      <MapOuter>
        <GmapCanvas>
          <iframe
            width='100%'
            height='546'
            id='gmap_canvas'
            src='https://maps.google.com/maps?q=university%20of%20san%20francisco&t=&z=13&ie=UTF8&iwloc=&output=embed'
            frameborder='0'
            scrolling='no'
            marginheight='0'
            marginwidth='0'
          />
          <a href='https://www.pureblack.de/internetagentur/' />
        </GmapCanvas>
      </MapOuter>
    </ContentContainer>
  </div>
))

const MapOuter = styled.div`
  text-align: right;
  height: 546px;
  width: 100%;
`

const GmapCanvas = styled.div`
  overflow: hidden;
  background: none !important;
  height: 546px;
  width: 100%;

  iframe {
    width: 100%;
  }
`
