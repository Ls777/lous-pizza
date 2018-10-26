import React from 'react'
import { withRouteData } from 'react-static'
import styled from 'styled-components'
import colors from '../colors.js'
import ContentContainer from '../components/ContentContainer'

export default withRouteData(({ menu }) => (
  <ContentContainer>
    <Header>Pizza</Header>
    <Table>
      <TableRow><td /><Label>small</Label><Label>large</Label></TableRow>
      {menu.pizza.map(item => (
        <TableRow>
          <ItemCell>
            <Name>{item.name}</Name>
            <Description>{item.description}</Description>
          </ItemCell>
          <PriceCell>{item.small}</PriceCell>
          <PriceCell>{item.large}</PriceCell>
        </TableRow>
      ))}
    </Table>
  </ContentContainer>
))

const Header = styled.h1`
font-family: Lora;
font-size: 48px;
margin: -2rem 0 -4rem;
background-color: ${colors.BLACK};
padding: 1rem 2rem;
width: 20rem;
`

const Label = styled.td`
text-align: center;
`

const Table = styled.div`
background-color: ${colors.BLACK};
padding: 2rem;
width: 32rem;
`

const TableRow = styled.tr`
 width: 100%;
`

const ItemCell = styled.td`

`

const Name = styled.div`
font-size: 18px;
text-transform: uppercase;
display: flex;
width: 20rem;
position: relative;
top: 5px;

&:after {
  content: '';
  flex-grow: 1;
  border-style: dotted;
  border-color: ${colors.BLUEGREY};
  border-width: 0 0 6px 0;
  margin: auto 10px;
}
`

const Description = styled.div`
font-size: 14px;
font-weight: 600;
font-style: italic;
color: ${colors.RED};
`

const PriceCell = styled.td`
padding: 0px;
font-size: 24px;
text-align: right; 
vertical-align: top;
padding: 0 1rem;
color: ${colors.YELLOW}
`
