import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
const Home = () => {
  return (
   <>
    <Box sx={{ flexGrow: 1 }}   >
      <Grid container spacing={2}  columns={{xs: 12, sm: 8, md: 12}} >
        <Grid item xs={12} sm={4} md={3}  >
          <Item>xs=8</Item>
        </Grid>
        <Grid  item xs={12} sm={4} md={3} >
          <Item>xs=4</Item>
        </Grid>
        <Grid item xs={12} sm={4} md={3}  >
          <Item>xs=4</Item>
        </Grid>
        <Grid item xs={12} sm={4} md={3} >
          <Item>xs=8</Item>
        </Grid>
      </Grid>
    </Box></>
  )
}

export default Home
