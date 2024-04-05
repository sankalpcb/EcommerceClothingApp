import React  from 'react';

import Grid from '@mui/material/Grid';

import { Box, Typography } from '@mui/material';
import ShopCard from '../ShopCard';
import { useNavigate } from 'react-router-dom';

function ShopGrid({item}) {
    console.log(item)
    let navigate = useNavigate()
    return (<>
        <Box sx={{ marginTop: 10 ,marginLeft:5,marginRight:-5}}>
            <Grid container sx={{marginBottom:2}}>
                <Grid item md={9} >
                    <Typography variant="h5" textAlign="left">
                        {item.title}
                    </Typography>
                   </Grid>
                <Grid item md={3}>

                <Typography variant="h5" sx={{marginRight:18}}textAlign="right"  onClick={() => navigate(`/shop/${item.id}`)} >
                        VIEW ALL
                    </Typography>
                </Grid>
            </Grid>
            <Grid container sx={{}} spacing={-14}>

               
                <Grid item md={3}>
                    <ShopCard item={item.items[0]}/>
                </Grid>
                <Grid item md={3}>
                    <ShopCard item={item.items[1]}/>
                </Grid>
                <Grid item md={3}>
                    <ShopCard item={item.items[2]}/>
                </Grid>
                <Grid item md={3}>
                    <ShopCard item={item.items[3]}/>
                </Grid>

            </Grid>
        </Box>

    </>
    );
}

export default ShopGrid;