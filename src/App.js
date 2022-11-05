// import { useContext } from "react";
import "./App.css";
import { Context } from "./components/Context";
import FetchData from "./components/FetchData";
import InputField from "./components/InputField";
import SearchMap from "./components/SearchMap";

function App() {
  // const { state, dispatch } = useContext(Context);
  // console.log(state);
  // const [foundProviders, setFoundProviders] = useState([]);
  // const [allProviders, setAllProviders] = useState([]);
  // const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="App">
      <h2 className="text-[3rem]">Public Bikes Info</h2>
      <InputField />
      <SearchMap />
      <FetchData />
    </div>
  );
}

export default App;
