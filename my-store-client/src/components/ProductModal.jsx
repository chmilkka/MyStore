import { Box, Button, Card, CardMedia, Modal, TextField, Typography } from "@mui/material";
import { useState } from "react";

const style = {
    position: 'absolute',
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    height: 550,
    width: 700,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  
  export default function ProductModal({name, price, photo, description}) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
    return (
      <div>
        <Button fullWidth onClick={handleOpen}>
        <Typography
                    variant="h5"
                    sx={{ 
                    display: "inline-block",
                    whiteSpace: "nowrap",
                    overflow: "hidden !important",
                    textOverflow: "ellipsis"}}
                    >
                    {name}
                </Typography>
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Box>
                <Card sx={{width: 300, height: 270, justifyContent: "center", display: "flex"}}>
                    <CardMedia
                        image={photo}
                        component="img"
                        alt= " "
                        title= " "
                        sx={{ 
                            maxWidth: "70%",
                            height: "auto",
                            padding: "10px 0px "
                        }}
                    />
                </Card>
            </Box>
            <br/>
            <Box>
                <Typography
                    variant="h5"
                    sx={{ 
                    display: "inline-block",
                    whiteSpace: "nowrap",
                    overflow: "hidden !important",
                    textOverflow: "ellipsis"}}
                    >
                        {name}
                </Typography>
            </Box>
            <Box>
            <TextField
                variant='outlined'
                value={description}
                rows={4}
                sx={{width: "45ch"}}
                multiline
            />
            </Box>
            <Box>
                <Typography
                    variant="h5"
                    
                    >
                      Price: {price} UAH
                </Typography>
            </Box>
          </Box>
        </Modal>
      </div>
    );
  }