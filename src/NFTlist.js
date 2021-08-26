import NFTcard from './NFTcard.js'

// Material-UI Imports
import { createChainedFunction, Grid } from '@material-ui/core';
import { Box } from '@material-ui/core';
import { Container } from '@material-ui/core';


function NFTlist(props) {


    return(
        <div id="itemList">
          <Container align="center">    
            <h1>NFT List</h1>

            <Box m={5}>
            <Grid
                container
                spacing={10}
                direction="row"
            >
    {
        props.data.map(
            function(objectIn){
                  return(
                    <Grid key={objectIn.id} item xs={3} >
                    <NFTcard
                      nftObj={objectIn}
                      addToWallet={props.addToWallet}
                    />
                    </Grid>
                      
                  )
            }
        )
    }

            </Grid>
            </Box>
            </Container>  
        </div>
    )
}

export default NFTlist;

