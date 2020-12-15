import React, {useState} from 'react';

export const EngOrderContext = React.createContext([ {}, () => {}]);

export const initialContextState = {
  restaurants: {},
  tables: {},
  dishes: [],
  payment: false,
  totalPrice: 0,
  currentStep: 'restaurants'
};

export const EngOrderProvider = props => {
  const [state, setState] = useState(initialContextState);

  return (
    <EngOrderContext.Provider value={[state, setState]}>
      {props.children}
    </EngOrderContext.Provider>);
};
