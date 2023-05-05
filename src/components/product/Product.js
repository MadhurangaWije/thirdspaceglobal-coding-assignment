import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const Product = ({product})=>{
    return(
        <Card style={{margin: '2% auto', }} sx={{ maxWidth: 500 }}>
            <CardActionArea>
                <CardMedia
                component="img"
                height="300"
                image={product.images[0]}
                alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {product.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {product.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default Product;