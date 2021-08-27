import { NavLink } from "react-router-dom";


const linkStyles = {
    padding: "3px 10px 3px 10px",
    margin: "5px",
    textDecoration: "none",
    color: "white",
    borderRadius: "10px",
  };




function NavBar({ color, title, description, changeColor }) {
    

    return(
    <div className="NavBar" >

        <div class="title">// NFT Marketplace</div>

        <div className="navlink">
            <NavLink
                to="/NFTmint"
                exact
                style={linkStyles}
                activeStyle={{
                background: "white",
                color: "black",
                }}
            >
                NFTmint
            </NavLink>
        </div>

        <div className="navlink">
            <NavLink
                to="/NFTwallet"
                exact
                style={linkStyles}
                activeStyle={{
                background: "white",
                color: "black",
                }}
            >
                NFT Wallet
            </NavLink>
        </div>

        <div className="navlink">
            <NavLink
                to="/"
                exact
                style={linkStyles}
                activeStyle={{
                background: "white",
                color: "black",
                }}
            >
                NFT List
            </NavLink>
        </div>

        

        

    </div>
)
}


export default NavBar;