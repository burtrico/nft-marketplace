import NFTcard from './NFTcard.js'
import './index.css';

// Material-UI Imports
import { createChainedFunction, Grid } from '@material-ui/core';
import { Box } from '@material-ui/core';
import { Container } from '@material-ui/core';


function NFTlist(props) {


    return(
        <div id="itemList">
          <Container
            align="center"
             
          >    
            

            <Box
            
              m={5}
            >

            <Grid
                gap={10}
                row-gap={10}
                container
                spacing={10}
                direction="row"
            >
    {
        props.data.map(
            function(objectIn){
                  return(
                    <Grid
                      className="nftCard"
                      key={objectIn.id}
                      item xs={3}
                      
                    >
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

