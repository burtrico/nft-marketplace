import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import NavBar from './NavBar';
import NFT_List from './NFT_List';
import { useEffect } from 'react';

function App() {

useEffect(
fetch()
  ,[])

  return (
    <div className="App">
      <NavBar />

      <BrowserRouter >
        <Route exact path="/NFT_List" component={NFT_List}>
          
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;

{/* < NFTs /> [ data ]
  < crypto_punks /> [ crypto_punks ] */}
