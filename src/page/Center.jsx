import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import rasm from '../assets/images/about-right-dec.png'
import beggraund  from '../assets/images/about-bg.jpg'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function RowAndColumnSpacing() {
    return (
        <Box sx={{ width: '100%',display:'flex', alignItems:'center', justifyContent:'center' }}>

            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                <Grid sx={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                    <Box sx={{width:'80%', display:'grid',alignItems:'center'}}>
                        <Typography variant='h4' sx={{ fontWeight: '800' }}>About <span style={{ color: '#498AF1' }}>What We Do</span>& Who We Are</Typography>
                        <span style={{ fontSize: '60px', color: '#498AF1' }}>--</span>
                        <Typography variant='subtitle2' sx={{color:'#CFCECE'}}>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia, excepturi distinctio. Repudiandae nesciunt odit veritatis id optio blanditiis?
                        </Typography>
                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ padding: '50px 0px 50px 0px' }}>
                            <Grid item xs={6}>
                                <Item sx={{ borderRadius: '50px' }}>
                                    <Typography sx={{fontWeight:'700'}}>Manitence Problems</Typography>
                                    <Typography variant='subtitle2'>Lorem, ipsum dolor.</Typography>
                                </Item>
                            </Grid>
                            <Grid item xs={6}>
                                <Item sx={{ borderRadius: '50px' }}>
                                    <Typography sx={{fontWeight:'700'}}>24/7 Support & Help</Typography>
                                    <Typography variant='subtitle2'>Lorem, ipsum dolor.</Typography>
                                </Item>
                            </Grid>
                            <Grid item xs={6}>
                                <Item sx={{ borderRadius: '50px'}}>
                                    <Typography sx={{fontWeight:'700'}}>Fixsing Issues About</Typography>
                                    <Typography variant='subtitle2'>Lorem, ipsum dolor.</Typography>
                                </Item>
                            </Grid>
                            <Grid item xs={6}>
                                <Item sx={{ borderRadius: '50px' }}>
                                    <Typography sx={{fontWeight:'700'}}>Co. Development</Typography>
                                    <Typography variant='subtitle2'>Lorem, ipsum dolor.</Typography>
                                </Item>
                            </Grid>
                        </Grid>
                        <Typography variant='subtitle2' sx={{color:'#CFCECE'}}>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia, excepturi distinctio. Repudiandae nesciunt odit veritatis id optio blanditiis?
                        </Typography>
                        <Button variant="contained" sx={{ background: '  repeating-linear-gradient(#6470DE,#2CD9FE)', borderRadius: '50px', margin: '20px 0px 20px 0px', width:'28%'}}>Contained</Button>
                        <Typography variant='subtitle2'>Lorem ipsum dolor sit.</Typography>
                    </Box>
                </Grid>
                <Grid >
                    <img src={rasm} style={{marginTop:'30px',backgroundImage:`url(${beggraund})`,backgroundPosition:'center',width:'100%'}}/>
                </Grid>
            </Grid>
        </Box>
    );
}
