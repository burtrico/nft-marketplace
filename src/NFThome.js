import React from "react";
import ReactDOM from "react-dom";
import {useState , useEffect} from "react";
import { BrowserRouter , Route , NavLink , Switch } from "react-router-dom";
import NFTlist from "./NFTlist";
import NFTwallet from "./NFTwallet";
import NavBar from "./NavBar";


function NFThome(){

    const [data,setData] = useState([]);
    const [walletNFTs,setWalletNFTs] = useState( [] );
    const [loading, setLoading] = useState(false);

    const addToWallet = (NFTtoAdd) => {
        setWalletNFTs([...walletNFTs, NFTtoAdd])
      }

      
const options = {method: 'GET'};

fetch('https://api.opensea.io/api/v1/collections?offset=0&limit=50', options)
  .then(response => response.json())
  .then(response => setData(response.collections))

  
 



    

    return(
        <>
        
        <BrowserRouter>
        <NavBar/>
        { console.log(walletNFTs) }

            <Switch>
                <Route path="/NFTlist">
                    <NFTlist
                    data={data} 
                    addToWallet={addToWallet}
                    />
                </Route>

                <Route path="/NFTwallet">
                    <NFTwallet
                    walletNFTs={walletNFTs}
                    addToWallet={addToWallet}
                    />
                </Route>

            </Switch>
        </BrowserRouter>
        </>
        )
  
}

export default NFThome;