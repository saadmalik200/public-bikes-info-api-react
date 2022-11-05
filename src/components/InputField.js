import React from "react";
import { useContext } from "react";
import { Context } from "./Context";

const InputField = () => {
  const { state, dispatch } = useContext(Context);

  const filter = state.allProviders.filter((item) =>
    item.location.city.toLowerCase().includes(state.searchTerm.toLowerCase())
  );
  //   console.log(state);
  //   console.log(filter);
  //   dispatch({ type: "setFoundProviders", payload: filter });

  return (
    <div>
      <input
        placeholder="Enter a city name"
        value={state.searchTerm}
        onChange={(e) =>
          dispatch({
            type: "setSearchTerm",
            payload: { search: e.target.value, filter },
          })
        }
      />
      {/* <button
      // onClick={() => dispatch({ type: "setFoundProviders", payload: filter })}
      >
        Search
      </button> */}
    </div>
  );
};

export default InputField;
