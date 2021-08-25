import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import NavBar from './NavBar';
import NFThome from "./NFThome"

function App() {



  return (
    <div className="App">

      <NavBar />

      <NFThome/>

     




    </div>
  );
}

export default App;

/* < NFTs /> [ data ]
  < crypto_punks /> [ crypto_punks ] */
