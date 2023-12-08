import { Button, Card, CardMedia, Grid, TextField, Typography } from "@mui/material";
import Header from "../components/Header";
import BasicModal from "../components/BasicModal";
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
        <div>
            <Header/>
                <Grid align='center'>
                    <Typography
                        variant= "h4"
                        sx={{
                        m: "10px",
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
                    <Card sx={{width: "40ch"}}>
                        <CardMedia
                         image={currentUser.photo}
                         component="img"
                         alt= " "
                         title= " "
                         sx={{ 
                             width: "40ch",
                             height: 230,
                            
     
                         }}/>

                       
                    </Card>
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
                    <div></div>
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
                    <div></div>
                    <Button 
                        type='submit' 
                        color='primary' 
                        variant="contained" 
                        onClick={submit}
                        sx={{margin: "10px 0"}} 
                        >
                            Save changes
                    </Button>
                    <div></div>
                    <div></div>
                    {
                    currentUser.role === "Admin"
                     &&
                     <>
                     <BasicModal/>
                     <Button 
                         type='submit' 
                         color='error' 
                         variant="contained" 
                         sx={{margin: "10px "}} 
                         >
                             Delete product
                     </Button>
                     </>
                    }
                   
                </Grid>
           
        </div>
    );
};
export default ProfilePage;