import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'


const DIRECTIONS = {
  width: "width",
  height: "height"
}

const SpacerContainer = styled.div`
  ${props => props.direction === DIRECTIONS.height && `height: ${props.desktop}${props.unit};`}
  ${props => props.direction === DIRECTIONS.width && `width: ${props.desktop}${props.unit};`}

  ${props => props.theme.media.tablet`
    ${props => props.direction === DIRECTIONS.height && `height: ${props.mobile}${props.unit};`}
    ${props => props.direction === DIRECTIONS.width && `width: ${props.mobile}${props.unit};`}
  `};
  transition: all 0.5s ease;
`

const Spacer = ({ desktop, mobile, direction, unit}) => {
  return (
    <SpacerContainer
      desktop={desktop}
      mobile={mobile}
      unit={unit}
      direction={direction}
    />
  )
}

Spacer.defaultProps = {
  mobile: 0,
  desktop: 0,
  direction: 'height',
  unit: 'px'
}

Spacer.propTypes = {
  mobile: PropTypes.number,
  desktop: PropTypes.number,
  direction: PropTypes.oneOf(Object.keys(DIRECTIONS)),
  unit: PropTypes.oneOf(['px', '%', 'em', 'rem'])
}


export default Spacer
