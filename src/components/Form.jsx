import React from 'react';
import styled from 'styled-components';
import { Grid, Col, Row } from 'react-styled-flexboxgrid';
import BasicInput from '../components/inputs/BasicInput';
import InputLabel from '../components/inputs/InputLabel';
import Spacer from '../utils/Spacer'
import { FORM_COLUMNS } from '../styles/constants'

const FormTitle = styled.h1`
  font-family: ${props => props.theme.fonts.PTSerifBold};
  /* text-align: center; */
`

const Form = () => (
  <>
    <FormTitle>Is my property eligible for a Hometap Investment?</FormTitle>
      <Grid>
        <Row>
          <Col {...FORM_COLUMNS.half}>
            <InputLabel text="First Name" />
            <Spacer value={5} />
            <BasicInput placeholderText="First" />
          </Col>
          <Col {...FORM_COLUMNS.half}>
            <InputLabel text="Last Name" />
            <Spacer value={5} />
            <BasicInput placeholderText="Last" />
          </Col>
        </Row>
        <Spacer value={15} />
        <Row>
          <Col {...FORM_COLUMNS.full}>
            <InputLabel text="Email Address" />
            <Spacer value={5} />
            <BasicInput placeholderText="your@email.com" />
          </Col>
        </Row>
      </Grid>
  </>
);

export default Form;
