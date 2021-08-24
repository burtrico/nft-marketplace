
function NavBar({ color, title, description, changeColor }) {
    

return(
    <div className="NavBar" >
    <h2>NavBar</h2>
            <div className="content">{title}</div>
            <div className="sub header">{description}</div>  
    
    </div>
    )
}


export default NavBar;

