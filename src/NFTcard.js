
import NFTwallet from './NFTwallet.js'

function NFTcard({ NFT, addToWallet }) {

    // const [addNFT, walletSetter] = useState(false)

    // function addToWallet() {
    //     walletSetter(!addNFT);
    // }

    return (
        <div>
        <img src={NFT.image} alt="no img" />
        <h3>"{NFT.name}"</h3>  
        <h4>"${NFT.price}"</h4>   
        <p>"{NFT.description}"</p>

      <div className="addButtonDiv" tabIndex="0">

        <button className="addButton" onClick={addToWallet}>
        { (addToWallet) ? "Sell NFT" : "Buy NFT"}
        { (addToWallet) ? <NFTwallet name={NFT.name} 
        price={NFT.price}/> : console.log("in wallet")}
        </button>


      </div>

    </div>
    )
    
}

export default NFTcard;