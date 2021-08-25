// Material-UI Imports
import { Grid } from '@material-ui/core';
import { Box } from '@material-ui/core';
import { Container } from '@material-ui/core';
import NFTcard from './NFTcard';

function NFTwallet({walletNFTs, addToWallet}) {

    console.log(walletNFTs)

    return(
        <div id="itemList">
          <Container align="center">    
            <h1>NFT Wallet</h1>

            <Box m={5}>
            <Grid
                container
                spacing={10}
                direction="row"
            >
                        
            { walletNFTs && walletNFTs.map(NFT => {
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

export default NFTwallet;