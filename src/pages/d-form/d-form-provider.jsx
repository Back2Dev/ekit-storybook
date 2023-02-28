import React from 'react';

const DFormContext = React.createContext();

export default DFormContext;


function DFormReducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case 'setInfoButton':
      return { ...state, 
        infoButton: payload.infoButton
      };
    default:
      return state;
  }
}

export function DFormProvider(props) {
  const [state, dispatch] = React.useReducer(DFormReducer, props.initalState);
  const setInfoButton = (data) =>{
    dispatch({
      type: 'setInfoButton',
      payload: {
        infoButton: data
      }
    })
  }

  return (
    <DFormContext.Provider value={{ ...state, setInfoButton}}>
      {props.children}
    </DFormContext.Provider>
  )
}