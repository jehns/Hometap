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

const Checkbox = ({id, name, text, handleChange}) => {
  return (
    <Wrapper>
      <Input type="checkbox" id={id} name={name} onChange={handleChange} />
      <Spacer desktop={5} mobile={0} direction="width" />
      <label htmlFor={id}>{text}</label>
    </Wrapper>
  )
};

Checkbox.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  text: PropTypes.string,
  handleChange: PropTypes.func
};

Checkbox.defaultProps = {
  id: "",
  name: "",
  text: ""
};


export default Checkbox
