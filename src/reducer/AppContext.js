import { createContext, useReducer } from "react";

export const AppContext = createContext();

// Context Provider Component
export function AppProvider ({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}


