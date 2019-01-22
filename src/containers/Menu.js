import React from 'react'
import { withRouteData } from 'react-static'
import styled from 'styled-components'
import colors from '../colors.js'
import ContentContainer from '../components/ContentContainer'
import Triangle from '../components/Triangle'
import background from '../img/background2.jpg'

export default withRouteData(({ menuData }) => (
  <ContentContainer background={background}>
    <Title>Menu</Title>
    <MenuContainer>
      {menuData.menu.map(section => (
        <Section>
          <Header>
            <TriangleBar />
            {section.title}
            <TriangleRow>
              <Triangle width={150} />
              <Triangle width={170} />
            </TriangleRow>
          </Header>
          <Table>
            <TableRow>
              <td />
              <Label>small</Label>
              <Label>large</Label>
            </TableRow>
            {section.items.map(item => (
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
        </Section>
      ))}
    </MenuContainer>
  </ContentContainer>
))
const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 42em;
  flex-wrap: wrap;
  max-width: 80rem;
  margin: 50px auto;
  position: relative;

  @media (max-width: 900px) {
    height: 80rem;
  }
`

const Section = styled.div`
  &:nth-child(3) {
    margin-top: 4rem;
  }
`

const TriangleBar = styled.div`
  position: absolute;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 3rem 0 0 2rem;
  border-color: transparent transparent transparent ${colors.BLACK};
  margin-right: 0rem;
  left: 20rem;
  top: 0;
`

const Title = styled.h1`
  font-family: Lora;
  font-size: 60px;
  max-width: 60rem;
  margin: 0 auto -5rem;

  @media (max-width: 900px) {
    text-align: center;
    margin: 5rem auto -5rem;
  }
`

const Header = styled.h2`
  position: relative;
  font-family: Lora;
  font-size: 48px;
  margin: 3rem 0rem -4rem;
  background-color: ${colors.BLACK};
  padding: 1rem 2rem;
  width: 20rem;
  display: flex;
`

const TriangleRow = styled.div`
  position: relative;
  right: -0.8rem;
  top: 1.5rem;
  display: inline-block;
  div {
    margin-bottom: 0.5rem;
  }
`

const Label = styled.td`
  text-align: center;
  position: relative;
  z-index: 5;
`

const Table = styled.div`
  background-color: ${colors.BLACK};
  padding: 2rem 1rem 2rem 2rem;
`

const TableRow = styled.tr`
  width: 100%;
`

const ItemCell = styled.td``

const Name = styled.div`
  font-size: 18px;
  text-transform: uppercase;
  display: flex;
  width: 20rem;
  position: relative;
  top: 5px;

  @media (max-width: 1200px) {
    width: 15rem;
  }

  @media (max-width: 900px) {
    width: 20rem;
  }

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
  color: ${colors.YELLOW};
  position: relative;
  z-index: 5;
`
