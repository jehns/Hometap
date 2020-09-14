
export const getInputErrors = (inputName, errorArray) => {
  return errorArray.find(errorObj => errorObj.input === inputName)
}
