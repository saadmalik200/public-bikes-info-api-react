import React from "react";
import { useContext } from "react";
import { Context } from "./Context";

const InputField = () => {
  const { state, dispatch } = useContext(Context);

  return (
    <div>
      <input
        placeholder="search"
        value={state.searchTerm}
        onChange={(e) =>
          dispatch({ type: "setSearchTerm", payload: e.target.value })
        }
      />
    </div>
  );
};

export default InputField;
