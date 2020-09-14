import React from 'react';
import styled from 'styled-components';
import { useFormContext } from '../context/form';
import Spacer from '../utils/Spacer';
import { FORM_CONSTANTS } from '../constants';


const SuccessTitle = styled.h1`
  font-family: ${props => props.theme.fonts.PTSerifBold};
  font-size: 38px;
  padding: 0 7px;
`

const Text = styled.div`
  font-family: ${props => props.theme.fonts.AverageSansRegular};
  font-size: 20px;
  padding: 0 7px;
`

const Success = () => {
  const [state, ] = useFormContext()
  const products = [
    state[FORM_CONSTANTS.PRODUCT_A] ? 'Product A' : false,
    state[FORM_CONSTANTS.PRODUCT_B] ? 'Product B' : false,
    state[FORM_CONSTANTS.PRODUCT_C] ? 'Product C' : false
  ].filter(val => val)
  return (
    <>
      <SuccessTitle>Thank you for submitting your information! We will reach out shortly.</SuccessTitle>
      <Spacer desktop={20} mobile={20} />
      <Text>
        {state[FORM_CONSTANTS.FIRST_NAME]}{' '}{state[FORM_CONSTANTS.LAST_NAME]}
      </Text>
      <Spacer desktop={5} mobile={5} />
      <Text>
        {state[FORM_CONSTANTS.EMAIL]}
      </Text>
      <Spacer desktop={5} mobile={5} />
      <Text>
        {state[FORM_CONSTANTS.PHONE]}
      </Text>
      <Spacer desktop={5} mobile={5} />
      <Text>
        {state[FORM_CONSTANTS.STREET]}{state[FORM_CONSTANTS.UNIT] ? ', Unit: ' : ' '}{state[FORM_CONSTANTS.UNIT]}
      </Text>
      <Spacer desktop={5} mobile={5} />
      <Text>
        {state[FORM_CONSTANTS.CITY]}, {state[FORM_CONSTANTS.STATE]} {' '} {state[FORM_CONSTANTS.ZIP]}
      </Text>
      <Spacer desktop={5} mobile={5} />
      {
        products.map(product => {
          return (
            <div key={product}>
              <Text>{product}</Text>
              <Spacer desktop={5} mobile={5} />
            </div>
          )
        })
      }
    </>
  )
};

export default Success;
