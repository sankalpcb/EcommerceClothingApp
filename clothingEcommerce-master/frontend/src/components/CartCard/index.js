import * as React from 'react';
import { Grid, Typography, Box } from '@mui/material';

function CartCard({ item }) {

    return (
        <Box sx={{ marginBottom: 2 ,maxWidth:400}}>
            <Grid container spacing={2} alignItems="center">
                <Grid item xs={3} sx={{marginRight:10}}>
                    <img
                        src={item.imageUrl}
                        alt="Item"
                        style={{ height: 60, width: 60, borderRadius: 4}}
                    />
                </Grid>
                <Grid item xs={9}>
                    <Typography variant="h6" sx={{ marginBottom: 1 }}>
                        {item.name}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        {item.quantity} X {item.price}$
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
}

export default CartCard;
