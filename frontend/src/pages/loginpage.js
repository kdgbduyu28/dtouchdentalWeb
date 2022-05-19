import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import LoginRegister from "../components/loginregister";


export default function LoginPage() {

return (
    <>
    <Container maxWidth="xs">

    <Box

        bgcolor="white"
        sx={{
            borderRadius: 5,
            marginTop: 10,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            paddingBottom: 5
        }}
    >
   
    <Grid container direction="column" alignItems="center" spacing={2} >

    <Grid item align="center">
    <img src="images/logo.png" alt="d-touch logo" width="300"/>
    </Grid>

    <LoginRegister/>


    <Divider style={{backgroundColor: 'black', paddingTop: 10}} flexItem />


    <Grid item align="center">
    <Button variant="outlined" color='primary'>SIGN IN WITH GOOGLE</Button>
    </Grid>

    <Grid item align="center">
    <Button variant="outlined" color='primary'>SIGN IN WITH FACEBOOK</Button>
    </Grid>


    </Grid>

    </Box>

    </Container>
    </>
)
};