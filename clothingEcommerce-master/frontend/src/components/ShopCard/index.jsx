import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useDispatch ,useSelector} from 'react-redux';
import { addToCart } from '../../redux/actions/addtoCart.action';
import { increaseQuantity } from '../../redux/actions/increaseQuantity.action';
function ShopCard({ item }) {
  const [isHovered, setIsHovered] = useState(false);
  const dispatch = useDispatch()
  const cardStyle = {
    position: 'relative',
    transform: isHovered ? 'translateY(-10px)' : 'none',
    transition: 'transform 0.3s',
  };

  const addToCartButtonStyle = {
    position: 'absolute',
    bottom: 78,
    left: '50%',
    transform: 'translateX(-50%)',
    transition: 'transform 0.3s, opacity 0.3s',
    opacity: isHovered ? 1 : 0,
    width: '100%', //width equal to card width
    height:'20%',
    backgroundColor: 'rgba(169, 169, 169, 0.5)',
    border: '0.5px solid black', 
  };

  const cart = useSelector((state)=>state.main.cart)
  const check = (itemId) => {
    return cart.some((cartItem) => cartItem.id === itemId);
  };

  const handleClick=(item)=>{
      if(!check(item.id)){
        dispatch(addToCart(item))
      }else{
        dispatch(increaseQuantity(item))
      }
      
  }

  return (
    <Card
      style={cardStyle}
      sx={{ maxWidth: 250 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardMedia sx={{ height: 200 }} component="img" image={item.imageUrl} title="green iguana" />
      <CardContent>
        <Typography md={8} align="left" variant="h7" component="div">
          {item.name}
        </Typography>
        <Typography sx={{ marginTop: -3 }} md={4} align="right" variant="h6" color="text.secondary">
          {item.price}$
        </Typography>
      </CardContent>
      <CardActions>
        <Button style={addToCartButtonStyle}  onClick={() => handleClick(item)} variant="contained" color="primary">
        <Typography sx={{color:"",fontWeight: 'bold' }}>
          ADD TO CART
        </Typography>
        </Button>
      </CardActions>
    </Card>
  );
}

export default ShopCard;
