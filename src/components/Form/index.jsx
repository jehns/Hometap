import React, { useMemo } from 'react';
import { navigate } from 'gatsby'
import styled from 'styled-components';
import { Grid, Col, Row } from 'react-styled-flexboxgrid';
import BasicInput from '../inputs/BasicInput';
import InputLabel from '../inputs/InputLabel';
import Spacer from '../../utils/Spacer';
import { FORM_COLUMNS } from '../../styles/constants'
import { FORM_CONSTANTS } from '../../constants'
import { useFormContext } from '../../context/form';
import Checkbox from '../inputs/Checkbox';
import Button from '../inputs/Button';
import { getInputErrors } from '../../utils/form';
import FormValidation from './formValidation'


const FormTitle = styled.h1`
  font-family: ${props => props.theme.fonts.PTSerifBold};
  font-size: 38px;
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
    dispatch({ type: 'ERRORS', payload: []})
    const formValidation = new FormValidation(state)
    const validatedForm = formValidation.validate()
    if (validatedForm.errors.length) {
      dispatch({ type: 'ERRORS', payload: validatedForm.errors})
    } else {
      // submit form (redirect to success page)
      navigate('/success')
    }
  }

  const isDisabled = useMemo(() => FormValidation.isSubmitButtonDisabled(state), [state]);

  return (
    <form onSubmit={handleFormSubmit}>
      <Spacer desktop={2} mobile={0} />
      <FormTitle>Is my property eligible for a Hometap Investment?</FormTitle>
      <Spacer desktop={10} mobile={5} />
      <Grid>
        <Row>
          <Col {...FORM_COLUMNS.half}>
            <InputLabel text="First Name" />
            <Spacer desktop={8} mobile={4} />
            <BasicInput
              placeholderText="First"
              name={FORM_CONSTANTS.FIRST_NAME}
              value={state[FORM_CONSTANTS.FIRST_NAME]}
              handleChange={handleFieldChange}
              error={getInputErrors(FORM_CONSTANTS.FIRST_NAME, state.errors)}
            />
            <Spacer desktop={0} mobile={10} />
          </Col>

          <Col {...FORM_COLUMNS.half}>
            <InputLabel text="Last Name" />
            <Spacer desktop={8} mobile={4} />
            <BasicInput
              placeholderText="Last"
              name={FORM_CONSTANTS.LAST_NAME}
              value={state[FORM_CONSTANTS.LAST_NAME]}
              handleChange={handleFieldChange}
              error={getInputErrors(FORM_CONSTANTS.LAST_NAME, state.errors)}
            />
            <Spacer desktop={0} mobile={10} />
          </Col>
        </Row>

        <Spacer desktop={20} mobile={10} />

        <Row>
          <Col {...FORM_COLUMNS.full}>
            <InputLabel text="Email Address" />
            <Spacer desktop={8} mobile={4} />
            <BasicInput
              placeholderText="your@email.com"
              name={FORM_CONSTANTS.EMAIL}
              value={state[FORM_CONSTANTS.EMAIL]}
              handleChange={handleFieldChange}
              error={getInputErrors(FORM_CONSTANTS.EMAIL, state.errors)}
            />
            <Spacer desktop={0} mobile={10} />
          </Col>
        </Row>

        <Spacer desktop={20} mobile={10} />

        <Row>
          <Col {...FORM_COLUMNS.full}>
            <InputLabel text="Phone Number" />
            <Spacer desktop={8} mobile={4} />
            <BasicInput
              placeholderText="(617) 819-1199"
              name={FORM_CONSTANTS.PHONE}
              value={state[FORM_CONSTANTS.PHONE]}
              handleChange={handleFieldChange}
              error={getInputErrors(FORM_CONSTANTS.PHONE, state.errors)}
            />
            <Spacer desktop={0} mobile={10} />
          </Col>
        </Row>

        <Spacer desktop={20} mobile={10} />

        <Row>
          <Col {...FORM_COLUMNS.half}>
            <InputLabel text="Street Address" />
            <Spacer desktop={8} mobile={4} />
            <BasicInput
              placeholderText="Street Address"
              name={FORM_CONSTANTS.STREET}
              value={state[FORM_CONSTANTS.STREET]}
              handleChange={handleFieldChange}
              error={getInputErrors(FORM_CONSTANTS.STREET, state.errors)}
            />
            <Spacer desktop={0} mobile={10} />
          </Col>
          <Col {...FORM_COLUMNS.half}>
            <InputLabel text="Unit" required={false} />
            <Spacer desktop={8} mobile={4} />
            <BasicInput
              placeholderText="Apt / Suite"
              name={FORM_CONSTANTS.UNIT}
              value={state[FORM_CONSTANTS.UNIT]}
              handleChange={handleFieldChange}
            />
            <Spacer desktop={0} mobile={10} />
          </Col>
        </Row>

        <Spacer desktop={20} mobile={10} />

        <Row>
          <Col {...FORM_COLUMNS.full}>
            <InputLabel text="City" />
            <Spacer desktop={8} mobile={4} />
            <BasicInput
              placeholderText="City"
              name={FORM_CONSTANTS.CITY}
              value={state[FORM_CONSTANTS.CITY]}
              handleChange={handleFieldChange}
              error={getInputErrors(FORM_CONSTANTS.CITY, state.errors)}
            />
            <Spacer desktop={0} mobile={10} />
          </Col>
        </Row>

        <Spacer desktop={20} mobile={10} />

        <Row>
          <Col {...FORM_COLUMNS.half}>
            <InputLabel text="State" />
            <Spacer desktop={8} mobile={4} />
            <BasicInput
              placeholderText="Enter a state"
              name={FORM_CONSTANTS.STATE}
              value={state[FORM_CONSTANTS.STATE]}
              handleChange={handleFieldChange}
              error={getInputErrors(FORM_CONSTANTS.STATE, state.errors)}
            />
            <Spacer desktop={0} mobile={10} />
          </Col>
          <Col {...FORM_COLUMNS.half}>
            <InputLabel text="Zip Code" />
            <Spacer desktop={8} mobile={4} />
            <BasicInput
              placeholderText="e.g. #####"
              name={FORM_CONSTANTS.ZIP}
              value={state[FORM_CONSTANTS.ZIP]}
              handleChange={handleFieldChange}
              error={getInputErrors(FORM_CONSTANTS.ZIP, state.errors)}
            />
            <Spacer desktop={0} mobile={10} />
          </Col>
        </Row>

        <Spacer desktop={30} mobile={20} />

        <Row>
          <Col {...FORM_COLUMNS.checkboxLabel}>
            <InputLabel text="Select one or more Products" />
            <Spacer desktop={0} mobile={10} />
          </Col>
          <Col {...FORM_COLUMNS.checkbox}>
            <Checkbox
              id={FORM_CONSTANTS.PRODUCT_A}
              text="Product A"
              name={FORM_CONSTANTS.PRODUCT_A}
              checked={state.productA}
              handleChange={handleCheckboxChange}
            />
            <Spacer desktop={0} mobile={10} />
          </Col>
          <Col {...FORM_COLUMNS.checkbox}>
            <Checkbox
              id={FORM_CONSTANTS.PRODUCT_B}
              text="Product B"
              name={FORM_CONSTANTS.PRODUCT_B}
              checked={state.productB}
              handleChange={handleCheckboxChange}
            />
            <Spacer desktop={0} mobile={10} />
          </Col>
          <Col {...FORM_COLUMNS.checkbox}>
            <Checkbox
              id={FORM_CONSTANTS.PRODUCT_C}
              text="Product C"
              name={FORM_CONSTANTS.PRODUCT_C}
              checked={state.productC}
              handleChange={handleCheckboxChange}
            />
            <Spacer desktop={0} mobile={10} />
          </Col>
        </Row>

        <Spacer desktop={40} mobile={20} />

        <Row>
          <Button
            id="button"
            text="Check eligibility"
            disabled={isDisabled}
          />
        </Row>

      </Grid>
    </form>
  )
};

export default Form;
