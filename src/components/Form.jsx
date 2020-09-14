import React, { useMemo } from 'react';
import styled from 'styled-components';
import { Grid, Col, Row } from 'react-styled-flexboxgrid';
import BasicInput from '../components/inputs/BasicInput';
import InputLabel from '../components/inputs/InputLabel';
import Spacer from '../utils/Spacer'
import { FORM_COLUMNS } from '../styles/constants'
import { FORM_CONSTANTS } from '../constants'
import { useFormContext } from '../context/form';
import Checkbox from './inputs/Checkbox';
import Button from './inputs/Button';
import { isSubmitButtonDisabled } from '../utils/form'

const FormTitle = styled.h1`
  font-family: ${props => props.theme.fonts.PTSerifBold};
`

const Form = () => {
  const [state, dispatch] = useFormContext()

  const handleFieldChange = (e) => {
    dispatch({ type: 'EDIT_FIELD', payload: { name: e.target.name, value: e.target.value} })
  }

  const handleCheckboxChange = (e) => {
    dispatch({ type: 'EDIT_FIELD', payload: { name: e.target.name, value: e.target.checked} })
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    // dispatch({ type: 'SUBMIT_FORM', payload: { name: e.target.name, value: e.target.checked} })
  }

  const isDisabled = useMemo(() => isSubmitButtonDisabled(state), [state]);

  return (
    <form onSubmit={handleFormSubmit}>
      <FormTitle>Is my property eligible for a Hometap Investment?</FormTitle>
      <Grid>
        <Row>
          <Col {...FORM_COLUMNS.half}>
            <InputLabel text="First Name" />
            <Spacer value={8} />
            <BasicInput
              placeholderText="First"
              name={FORM_CONSTANTS.FIRST_NAME}
              value={state[FORM_CONSTANTS.FIRST_NAME]}
              handleChange={handleFieldChange}
            />
          </Col>
          <Col {...FORM_COLUMNS.half}>
            <InputLabel text="Last Name" />
            <Spacer value={8} />
            <BasicInput
              placeholderText="Last"
              name={FORM_CONSTANTS.LAST_NAME}
              value={state[FORM_CONSTANTS.LAST_NAME]}
              handleChange={handleFieldChange}
            />
          </Col>
        </Row>

        <Spacer value={20} />

        <Row>
          <Col {...FORM_COLUMNS.full}>
            <InputLabel text="Email Address" />
            <Spacer value={8} />
            <BasicInput
              placeholderText="your@email.com"
              name={FORM_CONSTANTS.EMAIL}
              value={state[FORM_CONSTANTS.EMAIL]}
              handleChange={handleFieldChange}
            />
          </Col>
        </Row>

        <Spacer value={20} />

        <Row>
          <Col {...FORM_COLUMNS.full}>
            <InputLabel text="Phone Number" />
            <Spacer value={8} />
            <BasicInput
              placeholderText="(617) 819-1199"
              name={FORM_CONSTANTS.PHONE}
              value={state[FORM_CONSTANTS.PHONE]}
              handleChange={handleFieldChange}
            />
          </Col>
        </Row>

        <Spacer value={20} />

        <Row>
          <Col {...FORM_COLUMNS.half}>
            <InputLabel text="Street Address" />
            <Spacer value={8} />
            <BasicInput
              placeholderText="Street Address"
              name={FORM_CONSTANTS.STREET}
              value={state[FORM_CONSTANTS.STREET]}
              handleChange={handleFieldChange}
            />
          </Col>
          <Col {...FORM_COLUMNS.half}>
            <InputLabel text="Unit" required={false} />
            <Spacer value={8} />
            <BasicInput
              placeholderText="Apt / Suite"
              name={FORM_CONSTANTS.UNIT}
              value={state[FORM_CONSTANTS.UNIT]}
              handleChange={handleFieldChange}
            />
          </Col>
        </Row>

        <Spacer value={20} />

        <Row>
          <Col {...FORM_COLUMNS.full}>
            <InputLabel text="City" />
            <Spacer value={8} />
            <BasicInput
              placeholderText="City"
              name={FORM_CONSTANTS.CITY}
              value={state[FORM_CONSTANTS.CITY]}
              handleChange={handleFieldChange}
            />
          </Col>
        </Row>

        <Spacer value={20} />

        <Row>
          <Col {...FORM_COLUMNS.half}>
            <InputLabel text="State" />
            <Spacer value={8} />
            <BasicInput
              placeholderText="Enter a state"
              name={FORM_CONSTANTS.STATE}
              value={state[FORM_CONSTANTS.STATE]}
              handleChange={handleFieldChange}
            />
          </Col>
          <Col {...FORM_COLUMNS.half}>
            <InputLabel text="Zip Code" />
            <Spacer value={8} />
            <BasicInput
              placeholderText="e.g. #####"
              name={FORM_CONSTANTS.ZIP}
              value={state[FORM_CONSTANTS.ZIP]}
              handleChange={handleFieldChange}
            />
          </Col>
        </Row>

        <Spacer value={30} />

        <Row>
          <Col {...FORM_COLUMNS.checkboxLabel}>
            <InputLabel text="Select one or more Products" />
          </Col>
          <Col {...FORM_COLUMNS.checkbox}>
            <Checkbox
              id={FORM_CONSTANTS.PRODUCT_A}
              text="Product A"
              name={FORM_CONSTANTS.PRODUCT_A}
              checked={state.productA}
              handleChange={handleCheckboxChange}
            />
          </Col>
          <Col {...FORM_COLUMNS.checkbox}>
            <Checkbox
              id={FORM_CONSTANTS.PRODUCT_B}
              text="Product B"
              name={FORM_CONSTANTS.PRODUCT_B}
              checked={state.productB}
              handleChange={handleCheckboxChange}
            />
          </Col>
          <Col {...FORM_COLUMNS.checkbox}>
            <Checkbox
              id={FORM_CONSTANTS.PRODUCT_C}
              text="Product C"
              name={FORM_CONSTANTS.PRODUCT_C}
              checked={state.productC}
              handleChange={handleCheckboxChange}
            />
          </Col>
        </Row>

        <Spacer value={40} />

        <Row>
          <Button
            id="button"
            text="Button"
            disabled={isDisabled}
          />
        </Row>

      </Grid>
    </form>
  )
};

export default Form;
