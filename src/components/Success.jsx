import React from 'react';
import styled from 'styled-components';
import { useFormContext } from '../context/form';



const FormTitle = styled.h1`
  font-family: ${props => props.theme.fonts.PTSerifBold};
  font-size: 38px;
`

const Form = () => {
  const [state, dispatch] = useFormContext()

  return (
  <>
    <FormTitle>Thank you for submitting your information! We will reach out shortly.</FormTitle>
    {/* <Spacer desktop={2} mobile={0} /> */}
    name: {state.firstName}
    email: {state.email}
  </>
  )
};

export default Form;
