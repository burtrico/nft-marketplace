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

  let walletNFTs = [
    {
        id: 1,
        name: "beef",
        price: 5.99,
        section: "meat",
        description: "Delicious cow meat, moo moo!",
        image: "https://www.kroger.com/product/images/medium/front/0001111096970"
    }
]

function NFThome(){

    const [data,setData] = useState([]);
    // const [walletNFTs,setWalletNFTs] = useState([]);

    const addToWallet = (NFTtoAdd) => {
        console.log("State of Wallet before adding:", walletNFTs)
        // setWalletNFTs([...walletNFTs, NFTtoAdd])
      }

 useEffect(function(){
    setData(NFTs);
    //     fetch("https://api.opensea.io/api/v1/collections?offset=0&limit=100")
    //     .then(response => response.json())
    //     .then(response =>
    //         console.log(response) 
    //         //  setData(response)
    //         );
   },[])

    

    return(<>

        <NFTlist data={data} 
        addToWallet={addToWallet} />

        <NFTwallet walletNFTs={walletNFTs}
         />


   

    </>)
  
}

export default NFThome;