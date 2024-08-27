// Style your elements here

import styled from 'styled-components'

export const DirectionButton = styled.button`
width: 120px;
color: #000000;
height: 40px;
margin: 10px;
cursor: pointer;
opacity: ${props => (props.active ? 1 : 0.5)}
`

export const DirectionItem = styled.li`
list-style-type: none;
`
