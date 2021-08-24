import react , {useState , useEffect} from "react";

function NftApi(){

    const [data,setData] = useState([]);

    useEffect(function(){
        fetch("https://api.opensea.io/api/v1/collections?offset=0&limit=100")
        .then(response => response.json())
        .then(response => setData(response));
      },[])
    return(<>


   
        {
            data.collections.map(
                function(objectIn){
                      return(
                          <img src={objectIn.image_url}/>
                          
                      )
                }
            )
        }
    </>)
  
}

export default NftApi;