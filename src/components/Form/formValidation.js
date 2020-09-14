import { REQUIRED_FORM_FIELDS, FORM_CONSTANTS } from '../../constants'
import { validateZipCode } from '../../services/validation'


class FormValidation {
  constructor(state) {
    this[FORM_CONSTANTS.FIRST_NAME] = state[FORM_CONSTANTS.FIRST_NAME].toLowerCase().trim();
    this[FORM_CONSTANTS.LAST_NAME] = state[FORM_CONSTANTS.LAST_NAME].toLowerCase().trim();
    this[FORM_CONSTANTS.EMAIL] = state[FORM_CONSTANTS.EMAIL].toLowerCase().trim();
    this[FORM_CONSTANTS.PHONE] = state[FORM_CONSTANTS.PHONE].toLowerCase().trim();
    this[FORM_CONSTANTS.STREET] = state[FORM_CONSTANTS.STREET].toLowerCase().trim();
    this[FORM_CONSTANTS.CITY] = state[FORM_CONSTANTS.CITY].toLowerCase().trim();
    this[FORM_CONSTANTS.STATE] = state[FORM_CONSTANTS.STATE].toLowerCase().trim();
    this[FORM_CONSTANTS.ZIP] = state[FORM_CONSTANTS.ZIP].toLowerCase().trim();
    this[FORM_CONSTANTS.UNIT] = state[FORM_CONSTANTS.UNIT].toLowerCase().trim();
    this[FORM_CONSTANTS.PRODUCT_A] = state[FORM_CONSTANTS.PRODUCT_A];
    this[FORM_CONSTANTS.PRODUCT_B] = state[FORM_CONSTANTS.PRODUCT_B];
    this[FORM_CONSTANTS.PRODUCT_C] = state[FORM_CONSTANTS.PRODUCT_C];
    this.errors = [];
  }

  static isSubmitButtonDisabled = (state) => {
    // check to see if required form fields are ready to be submitted. returns a boolean.
    return REQUIRED_FORM_FIELDS.reduce((acc, cur) => {
      // if a previous input was falsy, do not compute any further and disable button.
      if (acc && !Array.isArray(cur)) return acc;

      // array representing required multi-select items.
      if (Array.isArray(cur)) {
        const any = cur.reduce((acc2, cur2) => {
          if (acc2) return acc2;
          if (state[cur2]) {
            acc2 = true
            return acc2
          }
          return acc2
        }, false)

        // if no multi-selects are selected, disable button.
        if (!any) {
          acc = true
        }
        return acc
      }

      // if input is falsy (empty), disable button.
      if (!state[cur]) {
        acc = true
      }

      return acc
    }, false)
  }

  getFormFields = () => {
    return {
      [FORM_CONSTANTS.FIRST_NAME]: this[FORM_CONSTANTS.FIRST_NAME],
      [FORM_CONSTANTS.LAST_NAME]: this[FORM_CONSTANTS.LAST_NAME],
      [FORM_CONSTANTS.EMAIL]: this[FORM_CONSTANTS.EMAIL],
      [FORM_CONSTANTS.PHONE]: this[FORM_CONSTANTS.PHONE],
      [FORM_CONSTANTS.STREET]: this[FORM_CONSTANTS.STREET],
      [FORM_CONSTANTS.CITY]: this[FORM_CONSTANTS.CITY],
      [FORM_CONSTANTS.STATE]: this[FORM_CONSTANTS.STATE],
      [FORM_CONSTANTS.ZIP]: this[FORM_CONSTANTS.ZIP],
      [FORM_CONSTANTS.UNIT]: this[FORM_CONSTANTS.UNIT],
      [FORM_CONSTANTS.PRODUCT_A]: this[FORM_CONSTANTS.PRODUCT_A],
      [FORM_CONSTANTS.PRODUCT_B]: this[FORM_CONSTANTS.PRODUCT_B],
      [FORM_CONSTANTS.PRODUCT_C]: this[FORM_CONSTANTS.PRODUCT_C]
    }
  }

  firstNameValidation = () => {
    if (this[FORM_CONSTANTS.FIRST_NAME].length < 2) {
      this.errors.push({
        input: FORM_CONSTANTS.FIRST_NAME,
        message: "first name must be greater than 1 letter."
      })
      return;
    }
  }

  phoneValidation = () => {
    const regex = /\-|\(|\)/gi;
    const phoneStripped = this[FORM_CONSTANTS.PHONE].replace(regex, "")
    if (phoneStripped.length !== 10) {
      this.errors.push({
        input: FORM_CONSTANTS.PHONE,
        message: "please enter a valid phone number."
      })
      return;
    }
  }

  zipCodeValidation = async () => {
    if (this[FORM_CONSTANTS.ZIP].length !== 5) {
      this.errors.push({
        input: FORM_CONSTANTS.ZIP,
        message: "please enter a 5-digit zip code."
      })
      return;
    }

    const zipCodeLocation = await validateZipCode(this[FORM_CONSTANTS.ZIP])

    if (!zipCodeLocation) {
      this.errors.push({
        input: FORM_CONSTANTS.ZIP,
        message: "please enter a valid zip code."
      })
      return;
    }
  }

  emailValidation = () => {
    // email regex
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const isValid = regex.test(String(this[FORM_CONSTANTS.EMAIL]).toLowerCase());
    if (!isValid) {
      this.errors.push({
        input: FORM_CONSTANTS.EMAIL,
        message: "please enter a valid email."
      })
      return;
    }
  }

  validate = () => {
    this.firstNameValidation()
    this.phoneValidation()
    this.zipCodeValidation()
    this.emailValidation()
    return {
      errors: this.errors,
      formFields: this.getFormFields()
    }
  }
}

export default FormValidation
