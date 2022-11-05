import React from "react";
import { useContext, useEffect } from "react";
import { Context } from "./Context";

const SearchMap = () => {
  const { state, dispatch } = useContext(Context);

  //   useEffect(() => {
  //     const getData = async () => {
  //       const response = await fetch(
  //         "http://api.citybik.es/v2/networks?fields=location"
  //       );
  //       const data = await response.json();
  //       //   console.log(data);
  //       dispatch({ type: "setFoundProviders", payload: data.networks });
  //     };
  //     getData();
  //   }, []);

  return <div></div>;
};

export default SearchMap;
