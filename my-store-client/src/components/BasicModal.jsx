import { Box, Button, InputLabel, MenuItem, Modal, Select, TextField, Typography } from "@mui/material";
import { useState } from "react";


const modalStyle = {
  
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  height: 500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [type, setType] = useState('');

  const handleChange = (event) => {
    setType(event.target.value);
  };


  return (
    <div>
        <Button 
            type='submit' 
            color='success' 
            variant="contained" 
            onClick={handleOpen}
            sx={{margin: "10px 0"}} 
                >
                    Create product
        </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box  align='center' sx={modalStyle}>
            <Typography
                id="modal-modal-title"
                variant="h6" 
                component="h2"
                sx={{textAlign: "center"}}
            >
            Add Product
           </Typography>
           <TextField 
                variant='outlined'
                label='ProductName' 
                sx={{width: "35ch"}}            
           />
           <div></div>
           <InputLabel>Type</InputLabel>
           <Select
                sx={{width: "280px", margin:"5px", textAlign: "left", color: "inherit"}}
                value={type}
                label = "Type"
                onChange={handleChange}
            >
            <MenuItem value={"Blender"}>Blender</MenuItem>
            <MenuItem value={"Electric kettle"}>Electric kettle</MenuItem>
            <MenuItem value={"Refrigerator"}>Refrigerator</MenuItem>
            <MenuItem value={"Multicooker"}>Multicooker</MenuItem>
            </Select>
            <div></div>
            <TextField
                variant='outlined'
                label='Description' 
                rows={4}
                sx={{width: "35ch"}}
                multiline
            />
            <div></div>
            <TextField 
                variant='outlined'
                label='Price(UAH)' 
                sx={{width: "35ch", margin:"5px"}}            
           />
            <div></div>
           <TextField 
                variant='outlined'
                label='Quantity' 
                sx={{width: "35ch"}}            
           />
           <div></div>
            <Button 
                type='submit' 
                color='success' 
                variant="contained" 
                onClick={handleClose}
                sx={{margin: "10px 0"}} 
            >
                    Create product
        </Button>
        </Box>
      </Modal>
    </div>
  );
}
