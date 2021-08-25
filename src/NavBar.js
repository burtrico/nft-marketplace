import { NavLink } from "react-router-dom";

function NavBar({ color, title, description, changeColor }) {
    

    return(
    <div className="NavBar" >
    <ul class="navlist">
        <li class="navlink">
        <NavLink
            to="/"
        >
            Home
        </NavLink>
        </li>

        <li class="navlink">
        <NavLink
            to="NFTlist"
        >
            NFT List
        </NavLink>
        </li>

        <li class="navlink">
        <NavLink
            to="NFTwallet"
        >
            NFT Wallet
        </NavLink>
        </li>
    </ul>
    </div>
)
}


export default NavBar;