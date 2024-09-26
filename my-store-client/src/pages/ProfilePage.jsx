import { Box, Button, Card, CardMedia, Grid, TextField, Typography } from "@mui/material";
import BasicModal from "../components/Modals/BasicModal";
import { useStore } from "../stores/StoresManager";
import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";

const ProfilePage = () => {

    const { userStore } = useStore();

    const currentUser = userStore.user;

    const [firstName, setFirstName] = useState(currentUser.firstName);
    const [firstNameErrors, setFirstNameErrors] = useState('');

    const [lastName, setLastName] = useState(currentUser.lastName);
    const [lastNameErrors, setLastNameErrors] = useState('');

    useEffect(() => {
        userStore.getAutenticatedUserInfo();
    }, [userStore]);
  
    const firstNameRef = useRef();
    const lastNameRef = useRef();

    const handleFirstNameChange = (e) => {
        const firstName = e.target.value;

        if (firstName.length === 0) {
            setFirstNameErrors("Fill in the first name input");
        } else {
            setFirstNameErrors('');
        }

        setFirstName(firstName);
    }

    const handleLastNameChange = (e) => {
        const lastName = e.target.value;

        if (lastName.length === 0) {
            setLastNameErrors("Fill in the last name input");
        } else {
            setLastNameErrors('');
        }

        setLastName(lastName);
    }

    const hasErrors = () => {
        const hasAnyErrors = firstNameErrors.length || lastNameErrors.length 
        return hasAnyErrors;
    }


    const submit = async () => {
        if (hasErrors()) {
            return;
        }

        const user = {
            id: currentUser.id,
            firstName: firstName,
            lastName: lastName,
            photo: currentUser.photo
        };

        try { 
            await userStore.updateUserInfo(user); 
            toast.success("Your account has been successfully updated!")            
        } catch (error) {
            toast.error("Failed to update profile")
        }
    }

    
    return (
           <Grid container spacing={2}>
                <Grid item xs={4} md={4} align="center" sx={{mt:"10px"}}>           
                <Card sx={{width: '80%', flexShrink: 0}}>
                    <CardMedia
                        image={currentUser.photo}
                        component="img"
                        alt= " "
                        title= " "
                        sx={{ 
                            width: "100%",
                            height: 230,
                        }}/>                      
                </Card>
                <Button 
                    type='submit' 
                    color='primary' 
                    variant="contained" 
                    sx={{margin: "10px 0"}} 
                    >
                        Upload photo
                </Button>
            </Grid>
            <Grid item xs={2} md={3} align="center" sx={{mt:"10px"}}>
            <Typography
                    variant= "h4"
                    sx={{
                    textAlign: "center"        
                    }}
                    >
                    Profile
                </Typography> 
                <Typography
                    variant= "h6"
                    sx={{   
                    textAlign: "center"        
                    }}
                    >
                    Role: {currentUser.role}
                </Typography> 
                <TextField 
                    variant='standard'
                    label='FirstName'
                    helperText={firstNameErrors}
                    error={firstNameErrors.length !== 0}
                    inputRef={firstNameRef} 
                    value={firstName}
                    onFocus={(e) => handleFirstNameChange(e)}
                    onChange={handleFirstNameChange}
                    sx={{width: "35ch"}}            
                />
                <br></br>
                <TextField 
                    variant='standard' 
                    label='LastName'
                    helperText={lastNameErrors}
                    error={lastNameErrors.length !== 0}
                    inputRef={lastNameRef}
                    value={lastName} 
                    onFocus={(e) => handleLastNameChange(e)}
                    onChange={handleLastNameChange}
                    sx={{width: "35ch"}}      
                /> 
                <br></br>
                <Button 
                    type='submit' 
                    color='primary' 
                    variant="contained" 
                    onClick={submit}
                    sx={{margin: "10px 0"}} 
                    >
                        Save changes
                </Button>
                <br></br>
                {
                currentUser.role === "Admin"
                    &&
                    <>
                    <BasicModal/>  
                    </>
                }              
            </Grid>
        </Grid>
                   
    );
};
export default ProfilePage;