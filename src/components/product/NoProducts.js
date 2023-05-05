import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const NoProducts = ({product})=>{
    return(
        <Card style={{margin: '2% auto', }} sx={{ maxWidth: 500 }}>
            <CardActionArea>
                
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        No Products Found!
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Please search for another product.
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default NoProducts;