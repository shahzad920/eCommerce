
import React, { useReducer, ReactNode } from 'react';

export default (
  reducer: React.Reducer<any, any>,
  initialState: any,
  actions: any
) => {
  const Context = React.createContext<any>(null);

  const Provider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const boundActions: any = {};
    for (let key in actions) {
      boundActions[key] = actions[key](dispatch);
    }

    return (
      <Context.Provider value={{ state, ...boundActions }}>
        {children}
      </Context.Provider>
    );
  };

  return { Context, Provider };
};