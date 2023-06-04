import { createContext, useContext, useReducer } from "react";
import { Reducer } from "./reducer";

export const MainContext = createContext({
  user: {},
  getTickets: undefined,
});

export const MainProvider = ({ children }) => {
  const initialState = useContext(MainContext);
  const [state, dispatch] = useReducer(Reducer, initialState);

  return (
    <MainContext.Provider value={{ state, dispatch }}>
      {children}
    </MainContext.Provider>
  );
};
