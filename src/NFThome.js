import {useState , useEffect} from "react";
import NFTlist from "./NFTlist";
import NFTwallet from "./NFTwallet";

const NFTs = [
        {
            id: 1,
            name: "beef",
            price: 5.99,
            section: "meat",
            description: "Delicious cow meat, moo moo!",
            image: "https://www.kroger.com/product/images/medium/front/0001111096970"
        },
        {
            id: 2,
            name: "chicken",
            price: 3.99,
            section: "meat",
            description: "Delicious chicken meat, bock bock!",
            image: "https://www.kroger.com/product/images/medium/front/0002410558105"
        }
  ]

function NFThome(){

    const [data,setData] = useState([]);
    const [walletNFTs,setWalletNFTs] = useState( [] );
    const [loading, setLoading] = useState(false);

    const addToWallet = (NFTtoAdd) => {
        setWalletNFTs([...walletNFTs, NFTtoAdd])
      }

 useEffect(function(){
    // setData(NFTs);
    setLoading(true);
        fetch("https://api.opensea.io/api/v1/collections?offset=0&limit=100")
        .then(response => response.json())
        .then(response => 
            setData(response)
            
        );
        setLoading(false)
        // ^^^ Make sure this runs alright here
   },[])

    

    return(
        <>
        { console.log(walletNFTs) }
        <NFTlist data={data} 
        addToWallet={addToWallet} />

        <NFTwallet walletNFTs={walletNFTs}
        addToWallet={addToWallet}
         />


   

        </>
        )
  
}

export default NFThome;