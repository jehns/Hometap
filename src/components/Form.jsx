import React from 'react';
import styled from 'styled-components'


const FormTitle = styled.h1`
  font-family: ${props => props.theme.fonts.PTSerifBold};
`

const Form = () => (
  <>
    <FormTitle>Welcome to Hometap's Form Submission.</FormTitle>
  </>
);

export default Form;
