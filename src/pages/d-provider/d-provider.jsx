import React from 'react';

const DesktopContext = React.createContext();

export default DesktopContext;


function DesktopReducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case 'setInfoButton':
      return { ...state,  infoButton: payload.infoButton };
    case 'setPageNavData':
      return { ...state, pageNavData: payload.pageNavData }
    case 'setPageNow':
      return { ...state, pageNow: payload.pageNow };
    default:
      return state;
  }
}

export function DesktopProvider(props) {
  const [state, dispatch] = React.useReducer(DesktopReducer, {
    infoButton: false,
    pageNavData: {title:['Workshops'], data: []},
    pageNow: 'workshops',
  });
  const setInfoButton = (data) =>{ dispatch({ type: 'setInfoButton', payload: { infoButton: data }})}
  const setPageNavData = (data) =>{ dispatch({ type: 'setPageNavData', payload: { pageNavData: data }})}
  const setPageNow = (data) =>{ dispatch({ type: 'setPageNow', payload: { pageNow: data }})}

  return (
    <DesktopContext.Provider value={{ ...state, setInfoButton, setPageNavData, setPageNow}}>
      {props.children}
    </DesktopContext.Provider>
  )
}