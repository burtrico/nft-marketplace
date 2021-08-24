import react , {useState , useEffect} from "React"

function NftApi(){

    const [data,setData] = useState()

    const options = {method: 'GET'};

    fetch('https://api.opensea.io/api/v1/collections?offset=0&limit=300', options)
    .then(response => response.json())
    .then(response => setData(response))
    .catch(err => console.error(err));


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