import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';


const Button = styled.button`
  height: 50px;
  width: 320px;
  border: none;
  border-radius: .3rem;
  font: ${props => props.theme.fonts.AverageSansRegular};
  font-size: 18px;
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.blue};
  cursor: pointer;
  &:disabled {
    background-color: ${props => props.theme.colors.darkGray2};
    opacity: 50%;
    cursor: auto;
  }
`;

const ButtonComponent = ({id, text, disabled}) => {
  return (
    <Button type="submit" id={id} disabled={disabled}>{text}</Button>
  )
};

ButtonComponent.propTypes = {
  id: PropTypes.string,
  text: PropTypes.string,
  disabled: PropTypes.bool
};

ButtonComponent.defaultProps = {
  id: "",
  text: "",
  disabled: true
};


export default ButtonComponent
