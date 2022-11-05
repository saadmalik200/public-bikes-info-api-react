import { createContext, useReducer } from "react";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const initialState = {
    foundProviders: [],
    allProviders: [],
    searchTerm: "",
    center: [45.4642, 9.19],
    zoom: 8,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "setFoundProviders":
        return {};

      case "setAllProviders":
        return { ...state, allProviders: [...action.payload] };

      case "setSearchTerm":
        const lat = action.payload.filter[0]?.location?.latitude;
        const lng = action.payload.filter[0]?.location?.longitude;

        return {
          ...state,
          searchTerm: action.payload.search,
          foundProviders: [...action.payload.filter],
          center: [lat, lng],
          zoom: 8,
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
