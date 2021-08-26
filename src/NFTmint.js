import './index.css';

// Material-UI Imports
import { Grid } from '@material-ui/core';
import { Box } from '@material-ui/core';
import { Container } from '@material-ui/core';


function NFTmint(props) {


    return(
        <div id="itemList">
          <Container align="center">    
            

            <Box m={5}>
            <Grid
                container
                spacing={10}
                direction="row"
            >
                        
            Mint...





            </Grid>
            </Box>
            </Container>  
        </div>
    )
}

export default NFTmint;