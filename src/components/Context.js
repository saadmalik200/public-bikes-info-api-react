import { createContext, useReducer } from "react";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const initialState = {
    foundProviders: [],
    allProviders: [],
    searchTerm: "",
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "setFoundProviders":
        return;
      case "setAllProviders":
        return { ...state, allProviders: [...action.payload] };
      case "setSearchTerm":
        return;
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export default ContextProvider;
