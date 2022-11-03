import { useEffect, useState } from 'react'
import './App.css';

function App() {
  const [foundProviders, setFoundProviders] = useState([]) 
  const [allProviders, setAllProviders] = useState([]) 
  const [searchTerm, setSearchTerm] = useState('')


  return (
    <div className="App">Hello World</div>
  );
}

export default App;
