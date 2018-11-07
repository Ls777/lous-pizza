import React from 'react'
import styled from 'styled-components'
import colors from '../colors.js'

const Star = ({ className }) => (
  <svg viewBox='0 -2 76 73' className={className}>
    <path d='
M 38.000 53.000
L 61.511 70.361
L 52.266 42.635
L 76.042 25.639
L 46.817 25.865
L 38.000 -2.000
L 29.183 25.865
L 0 25.639
L 23.734 42.635
L 14.489 70.361
L 38.000 53.000
' />
  </svg>
)

const StyledStar = styled(Star)`

fill: ${props => (props.yellow ? colors.YELLOW : colors.BLUEGREY)};
stroke: purple;
stroke-width: 0px;
fill-rule: nonzero;
height: ${({ size = 2 }) => size}rem;
`
// ${colors.YELLOW}

export default ({ repeat = 1, yellow, size }) => (
  <React.Fragment>
    {[...Array(repeat)].map((e, i) => (
      <StyledStar yellow={yellow} size={size} key={i} />
    ))}
  </React.Fragment>
)
