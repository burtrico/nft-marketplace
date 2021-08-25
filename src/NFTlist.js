import NFTcard from './NFTcard.js'

// Material-UI Imports
import { Grid } from '@material-ui/core';
import { Box } from '@material-ui/core';
import { Container } from '@material-ui/core';


function NFTlist( {data, addToWallet} ) {



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
            { data && data.map(NFT => {
             return(
                <Grid key={NFT.id} item xs={3}>
                  <NFTcard
                    key={NFT.id}
                    NFT={NFT}
                    addToWallet={addToWallet}
                  />

                </Grid>
              )}
            )}

            </Grid>
            </Box>
            </Container>  
        </div>
    )
}

export default NFTlist;

