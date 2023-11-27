import React from 'react';
import {  Button, FormControlLabel, Grid, Paper, TextField } from '@mui/material';
const RegisterForm=()=>{

    const paperStyle={padding :20,height:'70vh',width:280, margin:"20px auto"}
    const btnstyle={margin:'10px 0'}
    return(
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>                    
                    <h2>Create an account</h2>
                </Grid>
                <TextField variant='standard' label='Email' placeholder='Enter your Email' fullWidth required/>
                <TextField variant='standard' label='Password' placeholder='Enter password' type='password' fullWidth required/> 
                <TextField variant='standard' label='Password' placeholder='Repeat password' type='password' fullWidth required/>              
                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Create account</Button>  
                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Log In</Button>        
            </Paper>
        </Grid>
    )
}

export default RegisterForm