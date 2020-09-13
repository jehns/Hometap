
const reducer = (state, action) => {
  if (!action.payload) {
    console.error(`Undefined "payload" in action ${action.type}`)
    return state
  }

  switch (action.type) {
    case 'EDIT_FIELD':
      return {...state, [action.payload.name]: action.payload.value }
    default:
      return state
  }

}

export default reducer
