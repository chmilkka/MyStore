import React, { useEffect, useRef, useState } from 'react';
import {  Button, FormControl, FormControlLabel, FormLabel, Grid, Paper, Radio, RadioGroup, TextField } from '@mui/material';
import { Roles } from '../models/UserModel';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useStore } from '../stores/StoresManager';

const RegisterForm=()=>{

    const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

    const [email, setEmail] = useState('');

    const [password, setPassword] = useState('');

    const [repeatPassword, setRepeatPassword] = useState('');

    const [role, setRole] = useState(0);

    const { userStore } = useStore();

    const navigate = useNavigate();

    const firstRender = useRef(true);

    useEffect(() => {
        if (firstRender.current) {
            firstRender.current = false;
            return;
        }

    }, [ email, password, repeatPassword, role]);

    const submit = async () => {
        const user = {
            email: email, 
            password: password,
            role: role,
        };
        try {
            const result = await userStore.register(user);
            
        } catch (error) {
            console.log(error)
            toast.error(error)
        }
        
        
        
    }

    const redirectToLogin = () => {
        navigate("/login", { replace: true });
    }


    const paperStyle={padding :20,height:'70vh',width:280, margin:"20px auto"}
    const btnstyle={margin:'10px 0'}
    return(
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>                    
                    <h2>Create an account</h2>
                </Grid>
                <TextField 
                variant='standard'
                label='Email' 
                placeholder='Enter your Email' 
                fullWidth required
                value={email}
                aria-required="true"
                onChange={e => setEmail(e.target.value)}
                />
                <TextField 
                variant='standard' 
                label='Password' 
                placeholder='Enter password' 
                type='password' 
                fullWidth required
                value={password}
                aria-required="true"
                onChange={e => setPassword(e.target.value)}
                /> 
                <TextField variant='standard' 
                label='Repeat password' 
                placeholder='Repeat password' 
                type='password' 
                fullWidth required
                value={repeatPassword}
                aria-required="true"
                onChange={e => setRepeatPassword(e.target.value)}
                />
                <FormControl>
                <FormLabel id="role">Role</FormLabel>
                <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                >
                    <FormControlLabel 
                    value = {Roles.Admin} 
                    control={<Radio />} 
                    onChange={e => setRole(e.target.value)}
                    label="Admin" 
                    />
                    <FormControlLabel 
                    value= {Roles.User} 
                    control={<Radio />} 
                    onChange={e => setRole(e.target.value)}
                    label="User" 
                    />                                  
                </RadioGroup>
                </FormControl>              
                <Button 
                type='submit' 
                color='primary' 
                variant="contained" 
                style={btnstyle} 
                fullWidth
                onClick={submit}
                >
                    Create account
                </Button>  
                <Button 
                type='submit' 
                color='primary' 
                variant="contained" 
                style={btnstyle} 
                fullWidth
                onClick={redirectToLogin}
                >
                    Log In
                </Button>        
            </Paper>
        </Grid>
    )
}

export default RegisterForm