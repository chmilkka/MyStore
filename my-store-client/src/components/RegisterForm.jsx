import React from 'react';
import {  Button, FormControl, FormControlLabel, FormLabel, Grid, Paper, Radio, RadioGroup, TextField } from '@mui/material';
import { Roles } from '../models/UserModel';
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
                <FormControl>
                <FormLabel id="role">Role</FormLabel>
                <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                >
                    <FormControlLabel value = {Roles.Admin} control={<Radio />} label="Admin" />
                    <FormControlLabel value= {Roles.User} control={<Radio />} label="User" />                                  
                </RadioGroup>
                </FormControl>              
                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Create account</Button>  
                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Log In</Button>        
            </Paper>
        </Grid>
    )
}

export default RegisterForm