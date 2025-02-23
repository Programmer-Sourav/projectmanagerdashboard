import { createContext, useReducer } from "react";
import appReducer, { initialState } from "./ApplicationReducer";

export const AppContext = createContext();

// Context Provider Component
export function AppProvider ({ children }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}


