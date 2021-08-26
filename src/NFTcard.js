
import NFTwallet from './NFTwallet.js'

function NFTcard({nftObj, addToWallet, removeFromWallet}) {

    // const [addNFT, walletSetter] = useState(false)

    // function addToWallet() {
    //     walletSetter(!addNFT);
    // }

    return (
        <div>
        <img src={nftObj.image_url} className="nftImage" alt="no img" />
        <h3>{nftObj.name}</h3>  
        <h4>{nftObj.asset_contract.name}</h4>
        {/* <p>{nftObj.description}</p> */}

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