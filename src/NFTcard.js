
// import NFTwallet from './NFTwallet.js'
import './index.css';

function NFTcard({nftObj, addToWallet, removeFromWallet}) {

    // const [addNFT, walletSetter] = useState(false)

    // function addToWallet() {
    //     walletSetter(!addNFT);
    // }
    const renderPrice=()=> {
      // if(nftObj.last_sale !== null) {
      //   if(nftObj.last_sale.payment_token.eth_price !== null ) {
      //     return(<h4>{nftObj.last_sale.payment_token.eth_price}</h4>)
      let x = 20;
      if(nftObj.asset_contract && nftObj.asset_contract.name === "cryptopunks") { let x = 2000 }
      if(nftObj.asset_contract && nftObj.asset_contract.name === "boredapeyachtclub") { let x = 300 }
      else if(nftObj.asset_contract && nftObj.asset_contract.name === "pudgypenguins") { let x = 10 }
      else  { let x = 20 }
        const price = (Math.random()*x).toFixed(2)
        const eth = "https://storage.opensea.io/files/6f8e2979d428180222796ff4a33ab929.svg"
        return( <div className="divPrice"> <h4><img src={eth} className="eth" /> {price}</h4></div>  )

      // } } 
    }
    // renderPrice();
    
    return (
        <div >
        <img src={nftObj.image_url} className="nftImage" alt="no img" />
        <h3>{nftObj.name}</h3>  
        <h4>{(nftObj.asset_contract) ? nftObj.asset_contract.name : nftObj.collection }</h4>
        {renderPrice()}
        

      <div className="addButtonDiv" tabIndex="0">

        <button className="addButton" onClick={addToWallet ? ()=>addToWallet(nftObj) 
                 : ()=>removeFromWallet(nftObj)}>
        { (addToWallet) ? "Buy NFT" : "Sell NFT"}
        </button>


      </div>

    </div>
    )
    
}

export default NFTcard;