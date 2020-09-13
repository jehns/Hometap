import React from 'react';
import reducer from './reducer';
import initialState from './reducer/initialState';

const FormStateContext = React.createContext();
const FormDispatchContext = React.createContext();

function FormContextProvider({ children }) {
  const [state, dispatch] = React.useReducer(reducer, initialState)

  return (
    <FormStateContext.Provider value={state}>
      <FormDispatchContext.Provider value={dispatch}>
        {children}
      </FormDispatchContext.Provider>
    </FormStateContext.Provider>
  )
}

function useState() {
  const context = React.useContext(FormStateContext)

  if (context === undefined) {
    throw new Error('useState must be used within a FormProvider')
  }

  return context
}

function useDispatch() {
  const context = React.useContext(FormDispatchContext)

  if (context === undefined) {
    throw new Error('useDispatch must be used within a FormProvider')
  }

  return context
}

function useFormContext() {
  return [useState(), useDispatch()]
}

export { useFormContext, FormContextProvider }
