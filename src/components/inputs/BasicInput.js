import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Input = styled.input`
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-appearance: none;
  border: 1px solid
    ${props =>
      props.error ? props.theme.colors.error : props.isActive ? props.theme.colors.blue : props.theme.colors.lightGray};
  border-radius: .25rem;
  outline: none;
  height: 38px;
  width: 100%;
  font-family: ${props => props.theme.fonts.AverageSansRegular};
  font-size: 1rem;
  text-indent: 9px;
  color: ${props => props.theme.colors.black};
  &::placeholder {
    color: ${props => props.theme.colors.darkGray4};
  }
  caret-color: ${props => props.theme.colors.black};
`

const BasicInput = ({placeholderText, name, value, handleChange}) => {
  return (
    <Input
      placeholder={placeholderText}
      name={name}
      onChange={handleChange}
      value={value}
    />
  )
}

BasicInput.propTypes = {
  placeholderText: PropTypes.string,
  handleChange: PropTypes.func,
  name: PropTypes.string,
  value: PropTypes.string
};

BasicInput.defaultProps = {
  placeholderText: '',
  name: "",
  value: ""
};


export default BasicInput
