// Material-UI Imports
import { Grid } from '@material-ui/core';
import { Box } from '@material-ui/core';
import { Container } from '@material-ui/core';
import NFTcard from './NFTcard';

function NFTwallet(props) {


    return(
        <div id="itemList">
          <Container align="center">    
            <h1>NFT Wallet...</h1>

            <Box m={5}>
            <Grid
                container
                spacing={10}
                direction="row"
            >
                        
            { props.walletNFTs && props.walletNFTs.map(objectIn => {
            return(
                <Grid key={objectIn.id} item xs={3}>
                  <NFTcard
                   nftObj={objectIn}
                   removeFromWallet={props.removeFromWallet}

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

export default NFTwallet;