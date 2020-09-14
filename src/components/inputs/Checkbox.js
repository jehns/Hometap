import React from 'react';
import styled from 'styled-components';
import Spacer from '../../utils/Spacer';
import PropTypes from 'prop-types';


const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  height: 22px;
  width: 22px;
`;

const Checkbox = ({id, name, text, handleChange, checked}) => {
  return (
    <Wrapper>
      <Input type="checkbox" id={id} checked={checked} name={name} onChange={handleChange} />
      <Spacer desktop={5} mobile={5} direction="width" />
      <label htmlFor={id}>{text}</label>
    </Wrapper>
  )
};

Checkbox.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  text: PropTypes.string,
  handleChange: PropTypes.func,
  checked: PropTypes.bool
};

Checkbox.defaultProps = {
  id: "",
  name: "",
  text: "",
  checked: false
};


export default Checkbox
