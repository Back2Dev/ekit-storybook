import React from 'react';

const DPListContext = React.createContext();

export default DPListContext;


function DPListReducer(state, action) {
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

export function DPListProvider(props) {
  const [state, dispatch] = React.useReducer(DPListReducer, props.initalState);
  const setInfoButton = (data) =>{
    dispatch({
      type: 'setInfoButton',
      payload: {
        infoButton: data
      }
    })
  }

  return (
    <DPListContext.Provider value={{ ...state, setInfoButton}}>
      {props.children}
    </DPListContext.Provider>
  )
}