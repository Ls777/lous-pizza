import React from 'react'
import styled from 'styled-components'
import colors from '../colors.js'
import backgroundStress from '../img/backgroundstress.png'
import Star from './Star'
import Triangle from './Triangle'

const LeftOrCenter = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-end;
  padding: 0px;
  margin-left: -1rem;
  margin-top: 7rem;
  @media (max-width: 1200px) {
    margin-top: 0rem;
    font-size: 10px;
  }
  @media (max-width: 900px) {
    width: 45em;
    margin-left: -1rem;
    margin-top: -5rem;
    font-size: 10px;
  }

  @media (max-width: 600px) {
    margin-left: -4rem;
    transform: scale(0.8);
  }

`

const Special = styled.div`
  background-color: ${colors.BLACK};
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;
  padding: 0px;
  margin: 0px;
  margin-top: 10rem;
  background-image: url(${backgroundStress});
`

const Pizza = styled.h2`
  text-align: right;
  margin-right: 1em;

  .line1 {
    color: ${colors.BLUEGREY};
    margin-right: 3rem;
    margin-bottom: -3rem;
    font-size: 2.5rem;
  }

  .line2 {
    color: white;
    font-family: "Lora";
    font-size: 6rem;
  }

  .line3 {
    margin-top: -1.5rem;
    color: ${colors.YELLOW};
    font-size: 2.4rem
  }
`

const Price = styled.div`
  margin-top: 1rem;
  display:flex;
  color: ${colors.RED};
  font-size: 6rem;
  > * {
    margin-top: 1rem;
    font-size: 3rem;
  }
`

const TriangleBar = styled.div`
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 12rem 0 0 6rem;
  border-color: transparent transparent transparent ${colors.BLACK};
  margin-right: -6rem;
`

const StarLine = styled.div`
  display: flex;
  position: relative;
  width: 120%;
  justify-content: space-between;
  top: -10px;
`

const TriangleLine = styled.div`
  display: flex;
  position: relative;
  height: 0px;
  top: -3.1rem;
  left: 6.5rem;
  flex-direction: column; 
  div {
    margin-bottom: 5px;
  }
`

const HomePageSpecial = ({ pizza, price }) => (
  <LeftOrCenter>
    <Special>
      <div>
        <Pizza>
          <div className='line1'>
            SPECIAL
          </div>
          <div className='line2'>
            Blazed
          </div>
          <div className='line3'>
            {pizza}
          </div>
        </Pizza>
      </div>
      <div>
        <Price>
          {price.slice(0, -3)}
          <div>{price.slice(-2)}</div>
        </Price>
        <TriangleLine>
          <Triangle width={60} />
          <Triangle width={70} />
        </TriangleLine>
        <StarLine>
          <Star repeat={5} />
        </StarLine>
      </div>
      <TriangleBar />
    </Special>
  </LeftOrCenter>
)

export default HomePageSpecial
