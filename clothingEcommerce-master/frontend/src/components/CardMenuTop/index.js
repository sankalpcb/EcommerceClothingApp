import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import { items } from '../../seed';

import CustomCard from '../CustomHomeCard';
const { sections } = items;

function CardMenuTop() {

  return (
    <Box sx={{ flexGrow: 1, marginTop: 10, marginLeft: 8, marginRight: 8 }}>
      <Grid container justifyContent="center" alignItems="center" spacing={1}>
        <Grid item md={4} sx={{}}>
          <CustomCard item={sections[0]} />
        </Grid>
        <Grid item md={4}>
          <CustomCard item={sections[1]} />
        </Grid>
        <Grid item md={4} sx={{}}>
          <CustomCard item={sections[2]} />
        </Grid>
      </Grid>
    </Box>
  );
}

export default CardMenuTop;
