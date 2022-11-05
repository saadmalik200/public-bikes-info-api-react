import { createContext, useReducer } from "react";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const initialState = {
    foundProviders: [],
    allProviders: [],
    searchTerm: "",
    center: [45.4642, 9.19],
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "setFoundProviders":
        return {};
      case "setAllProviders":
        return { ...state, allProviders: [...action.payload] };
      case "setSearchTerm":
        console.log(action.payload.search);
        const lat = action.payload.filter[0]?.location?.latitude;
        const lng = action.payload.filter[0]?.location?.longitude;

        return {
          ...state,
          searchTerm: action.payload.search,
          allProviders: [...action.payload.filter],
          center: [lat, lng],
        };
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
