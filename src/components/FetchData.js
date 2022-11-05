import React, { useEffect } from "react";
import { useContext } from "react";
import { Context } from "./Context";
import LoadMap from "./LoadMap";

const FetchData = () => {
  const { state, dispatch } = useContext(Context);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("http://api.citybik.es/v2/networks");
      const data = await response.json();
      //   console.log(data[0]);
      dispatch({ type: "setAllProviders", payload: data.networks });
    };
    getData();
  }, []);

  return (
    <div>
      <LoadMap data={state.allProviders} />
    </div>
  );
};

// FetchData();

export default FetchData;
