import { useContext, useEffect, useState } from "react";
import "./App.css";
import { Context } from "./components/Context";
import FetchData from "./components/FetchData";

function App() {
  const { state, dispatch } = useContext(Context);
  // console.log(state);
  // const [foundProviders, setFoundProviders] = useState([]);
  // const [allProviders, setAllProviders] = useState([]);
  // const [searchTerm, setSearchTerm] = useState("");

  return <div className="App">{<FetchData />}</div>;
}

export default App;
