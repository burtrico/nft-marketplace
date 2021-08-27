import './index.css';
import What from './images/heading.png';

// Material-UI Imports
import { Grid } from '@material-ui/core';
import { Box } from '@material-ui/core';
import { Container } from '@material-ui/core';


function NFTwhat(props) {


    return(
        <div class="homepage" id="itemList">
          <Container align="
          left">    
            

            <Box m={5}>
            <Grid
                container
                spacing={10}
                direction="row"
            >
                        
                    <Grid
                      className="nftCard"

                      item xs={12}
                      
                    >
                    <div>
                      <div class="headingwhat"><img src={What} alt="What is an NFT?"/></div>
                      <br>
                      </br>
                      <ul>
                        <li className="nftWhat">
                        An NFT is a unit of data stored on a digital ledger, called a blockchain, which can be sold and traded.
                        </li>
                        <li className="nftWhat">
                        The NFT can be associated with a particular digital or physical asset (such as a file or a physical object) and a license to use the asset for a specified purpose.
                        </li>
                        <li className="nftWhat">
                        NFTs (and the associated license to use, copy or display the underlying asset) can be traded and sold on digital markets.
                        </li>
                        <li className="nftWhat">
                        NFTs function like cryptographic tokens, but, unlike cryptocurrencies like Bitcoin, NFTs are not mutually interchangeable, so not fungible.
                        </li>
                        <li className="nftWhat">
                        While all bitcoins are equal, each NFT may represent a different underlying asset and thus have a different value. 
                        </li>
                        <li className="nftWhat">
                        NFTs are created (minted) when blockchains string records of cryptographic hash, a set of characters identifying a set of data, onto previous records therefore creating a chain of identifiable data blocks. 
                        </li>
                        <li className="nftWhat">
                        This cryptographic transaction process ensures the authentication of each digital file by providing a digital signature that is used to track NFT ownership. However, data links that point to details like where the art is stored can die.
                        </li>
                      </ul>
                      </div>
                    </Grid>





            </Grid>
            </Box>
            </Container>  
        </div>
    )
}

export default NFTwhat;