import react , {useState , useEffect} from "react"

function NftApi(){

    const [data,setData] = useState([]);

    useEffect(function(){
        fetch("https://api.opensea.io/api/v1/collections?offset=0&limit=300")
        .then(response => response.json())
        .then(response => setData(response));
      },[])


    return(<>
        {
            data.collections.map(
                function(objectIn){
                      return(
                          <span>{objectIn.image_url}</span>
                          
                      )
                }
            )
        }
    </>)
  
}

export default NftApi;