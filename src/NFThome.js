import {useState , useEffect} from "react";
import NFTlist from "./NFTlist";
import NFTwallet from "./NFTwallet";


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
        { console.log(walletNFTs) }
       
        <NFTlist
        data={data} 
        addToWallet={addToWallet} />

        <NFTwallet
        walletNFTs={walletNFTs}
        addToWallet={addToWallet}
         />
        
        </>
        )
  
}

export default NFThome;