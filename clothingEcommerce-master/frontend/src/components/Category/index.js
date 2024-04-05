import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import shopItems from '../../shopseed';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import Button from '@mui/material/Button';
import { CardActions } from '@mui/material';
import { useSelector ,useDispatch} from 'react-redux';
import { addToCart } from '../../redux/actions/addtoCart.action';
import { increaseQuantity } from '../../redux/actions/increaseQuantity.action';
function Category() {
  const { categoryId } = useParams();
  const cat = shopItems[categoryId - 1];
  const [hoveredStates, setHoveredStates] = useState(Array(cat.items.length).fill(false));
  const dispatch = useDispatch()
  const handleMouseEnter = (index) => {
    const updatedStates = [...hoveredStates];
    updatedStates[index] = true;
    setHoveredStates(updatedStates);
  };
  const cart = useSelector((state)=>state.main.cart)
  const handleMouseLeave = (index) => {
    const updatedStates = [...hoveredStates];
    updatedStates[index] = false;
    setHoveredStates(updatedStates);
  };

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
    <>
      <Grid container md={12} spacing={-8} sx={{ marginTop: 10, marginLeft: 8 }}>
        <Grid item md={12} sx={{ marginTop: -8, textAlign: 'left', paddingBottom: 1 }}>
          <h1>{cat.title}</h1>
        </Grid>
        {cat.items.map((item, index) => (
          <Grid item xs={2} md={3} sx={{ marginBottom: 4 }} key={index}>
            <Card
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
              style={{
                position: 'relative',
                transform: hoveredStates[index] ? 'translateY(-10px)' : 'none',
                transition: 'transform 0.3s',
              }}
              sx={{ maxWidth: 250 }}
              name={item.name}
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
                <Button
                  style={{
                    position: 'absolute',
                    bottom: 79,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    transition: 'transform 0.3s, opacity 0.3s',
                    opacity: hoveredStates[index] ? 1 : 0,
                    width: '100%',
                    height: '20%',
                    backgroundColor: 'rgba(169, 169, 169, 0.5)',
                    border: '0.5px solid black',
                  }}
                  variant="contained"
                  color="primary"
                  onClick={() => handleClick(item)}
                >
                  <Typography sx={{ color: '', fontWeight: 'bold' }}>ADD TO CART</Typography>
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default Category;
