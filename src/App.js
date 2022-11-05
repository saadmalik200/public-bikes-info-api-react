// import { useContext } from "react";
import "./App.css";
import { Context } from "./components/Context";
import FetchData from "./components/FetchData";
import InputField from "./components/InputField";

function App() {
  // const { state, dispatch } = useContext(Context);
  // console.log(state);
  // const [foundProviders, setFoundProviders] = useState([]);
  // const [allProviders, setAllProviders] = useState([]);
  // const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="App">
      <InputField />
      <FetchData />
    </div>
  );
}

export default App;
