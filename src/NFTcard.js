
import NFTwallet from './NFTwallet.js'

function NFTcard(props) {

    // const [addNFT, walletSetter] = useState(false)

    // function addToWallet() {
    //     walletSetter(!addNFT);
    // }

    return (
        <div>
        <img src={props.data.image_url} alt="no img" />
        <h3>"{props.data.name}"</h3>  
        <p>"{props.data.description}"</p>

      <div className="addButtonDiv" tabIndex="0">

        <button className="addButton" onClick={props.addToWallet}>
        { (props.addToWallet) ? "Sell NFT" : "Buy NFT"}
        { (props.addToWallet) ? <NFTwallet name={props.data.name} 
        price={props.data.price}/> : console.log("in wallet")}
        </button>


      </div>

    </div>
    )
    
}

export default NFTcard;