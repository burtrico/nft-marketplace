import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import NavBar from './NavBar';
import NFT_List from './NFT_List';
import React , { useEffect } from 'react';
import NftApi from "./NftApi"

function App() {



  return (
    <div className="App">


      <NftApi/>


    </div>
  );
}

export default App;

{/* < NFTs /> [ data ]
  < crypto_punks /> [ crypto_punks ] */}
