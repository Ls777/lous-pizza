import styled from 'styled-components'
import colors from '../colors'

export default styled.div`
width: 0;
height: 0;
border-style: solid;
border-top-width: ${({ height = 8 }) => height / 2}px;
border-right-width: ${({ width = 100 }) => width}px;
border-bottom-width: ${({ height = 8 }) => height / 2}px;
border-left-width: ${({ width = 100 }) => width}px;
border-color: transparent ${props => (props.left ? colors.BLUEGREY : 'transparent')} transparent ${props => (props.left ? 'transparent' : colors.BLUEGREY)};
`
