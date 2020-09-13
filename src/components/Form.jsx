import React from 'react';
import styled from 'styled-components';
import { Grid, Col, Row } from 'react-styled-flexboxgrid';
import BasicInput from '../components/inputs/BasicInput';
import InputLabel from '../components/inputs/InputLabel';
import Spacer from '../utils/Spacer'
import { FORM_COLUMNS } from '../styles/constants'
import { FORM_CONSTANTS } from '../constants'
import { useFormContext } from '../context/form';


const FormTitle = styled.h1`
  font-family: ${props => props.theme.fonts.PTSerifBold};
  /* text-align: center; */
`

const Form = () => {
  const [state, dispatch] = useFormContext()

  const handleChange = (e) => {
    dispatch({ type: 'EDIT_FIELD', payload: { name: e.target.name, value: e.target.value} })
  }

  return (
    <>
      <FormTitle>Is my property eligible for a Hometap Investment?</FormTitle>
      <Grid>
        <Row>
          <Col {...FORM_COLUMNS.half}>
            <InputLabel text="First Name" />
            <Spacer value={5} />
            <BasicInput
              placeholderText="First"
              name={FORM_CONSTANTS.FIRST_NAME}
              value={state[FORM_CONSTANTS.FIRST_NAME]}
              handleChange={handleChange}
            />
          </Col>
          <Col {...FORM_COLUMNS.half}>
            <InputLabel text="Last Name" />
            <Spacer value={5} />
            <BasicInput
              placeholderText="First"
              name={FORM_CONSTANTS.LAST_NAME}
              value={state[FORM_CONSTANTS.LAST_NAME]}
              handleChange={handleChange}
            />
          </Col>
        </Row>
        <Spacer value={15} />
        <Row>
          <Col {...FORM_COLUMNS.full}>
            <InputLabel text="Email Address" />
            <Spacer value={5} />
            <BasicInput
              placeholderText="your@email.com"
              name={FORM_CONSTANTS.FIRST_NAME}
              value={state[FORM_CONSTANTS.FIRST_NAME]}
              handleChange={handleChange}
            />
          </Col>
        </Row>
      </Grid>
    </>
  )
};

export default Form;
