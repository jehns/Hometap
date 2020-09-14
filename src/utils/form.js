import { REQUIRED_FORM_FIELDS } from '../constants'

// check to see if required form fields are ready to be submitted. returns a boolean.
export const isSubmitButtonDisabled = (state) => {
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
