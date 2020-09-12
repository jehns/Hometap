import React from 'react'
import styled from 'styled-components'

const DIRECTIONS = {
  width: "width",
  height: "height"
}

const SpacerContainer = styled.div`
  ${props => props.direction === DIRECTIONS.height && `height: ${props.value}${props.unit};`}
  ${props => props.direction === DIRECTIONS.width && `width: ${props.value}${props.unit};`}
  transition: all 0.5s ease;
`

const Spacer = ({ value, direction = 'height', unit = 'px' }) => {
  return (
    <SpacerContainer
      value={value}
      unit={unit}
      direction={direction}
    />
  )
}

export default Spacer
