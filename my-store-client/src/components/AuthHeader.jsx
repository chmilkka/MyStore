import { AppBar, Toolbar, Typography } from "@mui/material"

function AuthHeader()
{
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography 
                variant="h4" 
                sx={{flexGrow: 1}}
                >
                    MyStore
                </Typography>           
            </Toolbar>
        </AppBar>
    );
}
export default AuthHeader