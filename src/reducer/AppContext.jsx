import { createContext, useReducer } from "react";
import appReducer, { initialState } from "./ApplicationReducer";

export const AppContext = createContext();

// Context Provider Component
export function AppProvider ({ children }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  // const allProjects= state.allProject
  // console.log(222, allProjects)

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}


