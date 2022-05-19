import "../styles.css";
import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import { Box } from '@mui/system';
import validator from 'validator';
import emailPWSignIn from "../controllers/emailAuth";

export default function LoginRegister() {
const formReset = {
    email: "",
    password: "",
    passwordc: ""
};
const [errorMsg, setErrorMsg] = useState();
const [formValidate, setFormValidate] = useState({
    emailValidate: false,
    pwValidate: false
});
const [formState, setFormState] = useState('login');
const [credential, setCredential] = useState({
    email: "",
    password: "",
    passwordc: ""
});
const handleLR = (stateSelect) => {
    console.log(stateSelect);
    setFormState(stateSelect);
};
const handleformSubmitLogin = (e) => {
    e.preventDefault();
    if (!validator.isEmail(credential.email)) {
        setFormValidate({
            emailValidate: true,
            pwValidate: false
        });
        console.log("incorrect email format");
        setErrorMsg("Incorrect email format");
    } else {
        emailPWSignIn(credential)
    }
};
const handleformSubmitRegister = (e) => {
    e.preventDefault();
    if (!validator.isEmail(credential.email) && credential.password !== credential.passwordc) {
        setFormValidate({
            emailValidate: true,
            pwValidate: true
        });
        setErrorMsg("Incorrect email format / Password mismatch");
    } else {
        if (!validator.isEmail(credential.email)) {
            setFormValidate({
                emailValidate: true,
                pwValidate: false
            });
            console.log("incorrect email format");
            setErrorMsg("Incorrect email format");
        } else if (credential.password !== credential.passwordc) {
            setFormValidate({
                emailValidate: false,
                pwValidate: true
            });
            console.log("password does not match");
            setErrorMsg("Password Mismatch"); 
        } else {
            emailPWSignIn(credential)
        }

    }
    
    
};
const handleChange = (event) => {
    setFormValidate({
        emailValidate: false,
        pwValidate: false
    });
    setErrorMsg();
    setCredential({...credential, [event.target.name]: event.target.value});
};

function resetForm() {
    setCredential(formReset);
    setErrorMsg();
    setFormValidate({
        emailValidate: false,
        pwValidate: false
    });
};

switch(formState) {
case 'login': 
    return (
    <>
        <form onSubmit={handleformSubmitLogin}>
    <Grid item align="center">

    <TextField required id="outlined-basic" label="Email" helperText={formValidate.emailValidate ? errorMsg : null} error={formValidate.emailValidate} name="email" variant="outlined" value={credential.email} onChange={handleChange} />
    </Grid>
    <Grid item align="center">
        <Box sx={{
            height: 20
        }} />
    </Grid>
    <Grid item align="center">
    <TextField required id="outlined-basic" label="Password" name="password" variant="outlined" value={credential.password} onChange={handleChange}/>
    </Grid>

    <Grid item align="center">
        <Box sx={{
            height: 20
        }} />
    </Grid>

    <Grid item align="center">
    <Button variant="outlined" type="submit" color='primary'>Log In</Button>
    {/* <Button variant="outlined" type="submit" color='primary' component={Link} to="/homepage">Log In</Button> */}

    </Grid>
    </form>

    <Grid item container direction="row" justifyContent="space-around">
    <Button color='primary' onClick={() => {handleLR('register'); resetForm(); }}>REGISTER</Button>
    <Button color='primary' onClick={() => {handleLR('forgotpw'); resetForm(); }}>FORGOT PW</Button>
    </Grid>

     </> 
     
    )

case 'register':
    return (
    <>
    <form onSubmit={handleformSubmitRegister}>
    <Grid item align="center">
    <TextField required id="outlined-basic" helperText={formValidate.emailValidate ? errorMsg : null} error={formValidate.emailValidate} name="email" value={credential.email} onChange={handleChange} label="Email" variant="outlined" />
    </Grid>
    <Grid item align="center">
        <Box sx={{
            height: 20
        }} />
    </Grid>
    <Grid item align="center">
    <TextField required id="outlined-basic" helperText={formValidate.pwValidate ? errorMsg : null} error={formValidate.pwValidate} name="password" value={credential.password} onChange={handleChange} label="Password" variant="outlined" />
    </Grid>
    <Grid item align="center">
        <Box sx={{
            height: 20
        }} />
    </Grid>
    <Grid item align="center">
    <TextField required id="outlined-basic" helperText={formValidate.pwValidate ? errorMsg : null} error={formValidate.pwValidate} name="passwordc" value={credential.passwordc} onChange={handleChange} label="Confirm Password" variant="outlined" />
    </Grid>
    <Grid item align="center">
        <Box sx={{
            height: 20
        }} />
    </Grid>

    <Grid item align="center">
    <Button variant="outlined" color='primary' type="submit">REGISTER</Button>
    </Grid>
    </form>

    <Grid item align="center">
    <Button color='primary' onClick={() => {handleLR('login'); resetForm(); }}>BACK TO LOGIN</Button>
    </Grid>

     </> 
    )
case 'forgotpw':
    return (
    <>
    <Grid item align="center">
    <TextField id="outlined-basic" label="Enter your email address" variant="outlined" />
    </Grid>
    <Grid item align="center">
    <Button variant="outlined" color='primary' component={Link} to="/homepage">SUBMIT</Button>
    </Grid>

    <Grid item container direction="row" justifyContent="space-around">
    <Button color='primary' onClick={() => {handleLR('register'); resetForm(); }}>REGISTER</Button>
    <Button color='primary' onClick={() => {handleLR('login'); resetForm(); }}>BACK TO LOGIN</Button>
    </Grid>

     </> 
    )
default:
    setFormState('login')

}



}


