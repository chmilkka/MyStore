import { Button, Card, CardMedia, Grid, TextField, Typography } from "@mui/material";
import Header from "../components/Header";

const ProfilePage = () => {
    
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
                    Role: User
                    </Typography> 
                    <Card sx={{width: "40ch"}}>
                        <CardMedia
                         image="https://content2.rozetka.com.ua/goods/images/big_tile/377542135.png"
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
                        sx={{width: "35ch"}}            
                    />
                    <div></div>
                    <TextField 
                        variant='standard' 
                        label='LastName' 
                        sx={{width: "35ch"}}      
                    /> 
                    <div></div>
                    <Button 
                        type='submit' 
                        color='primary' 
                        variant="contained" 
                        sx={{margin: "10px 0"}} 
                        >
                            Save changes
                    </Button>
                    <div></div>
                    <div></div>
                    <Button 
                        type='submit' 
                        color='success' 
                        variant="contained" 
                        sx={{margin: "10px 0"}} 
                        >
                            Create product
                    </Button>
                    <Button 
                        type='submit' 
                        color='error' 
                        variant="contained" 
                        sx={{margin: "10px "}} 
                        >
                            Delete product
                    </Button>
                </Grid>
           
        </div>
    );
};
export default ProfilePage;