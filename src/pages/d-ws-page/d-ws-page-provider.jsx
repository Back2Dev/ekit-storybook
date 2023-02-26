import React from 'react';

const DWSPageContext = React.createContext();

export default DWSPageContext;


function DWSPageReducer(state, action) {
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

export function DWSPageProvider(props) {
  const [state, dispatch] = React.useReducer(DWSPageReducer, props.initalState);
  const setInfoButton = (data) =>{
    dispatch({
      type: 'setInfoButton',
      payload: {
        infoButton: data
      }
    })
  }

  return (
    <DWSPageContext.Provider value={{ ...state, setInfoButton}}>
      {props.children}
    </DWSPageContext.Provider>
  )
}