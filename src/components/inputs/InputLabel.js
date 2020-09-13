import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Label = styled.div`
  /* outline: none;
  height: 38px;
  width: 100%; */
  /* max-width: 364px; */
  font-family: ${props => props.theme.fonts.AverageSansRegular};
  font-size: 1rem;
  color: ${props => props.theme.colors.black};
`
const Asterisk = styled.span`
  color: ${props => props.theme.colors.blue};
`


const InputLabel = ({text, required}) => {
  return (
    <Label>
      {text} {required && <Asterisk>*</Asterisk>}
    </Label>
  )
}

InputLabel.propTypes = {
  text: PropTypes.string,
  required: PropTypes.bool
};

InputLabel.defaultProps = {
  text: '',
  required: true
};


export default InputLabel;
