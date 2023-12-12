import { Box, Button, CardMedia, Modal, Typography } from "@mui/material";
import { useState } from "react";

const modalStyle = {
  
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    height: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  
  export default function AboutModal() {

    const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  
  return (
    <div>
        <Button color="inherit"  onClick={handleOpen} >About</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box  align='center' sx={modalStyle}>
            <Typography variant="h5">
                Автор
            </Typography>      
            <CardMedia 
                image="https://i.imgur.com/29Tiqgr.jpeg"
                component="img"
                alt="Author"
                sx={{ 
                    height: 150,
                    width: 150,
                    padding: "10px 0px "

                }}>
                
            </CardMedia>
            <Typography variant="h7" >
                Курсова робота за темою: <br></br> 
                Розроблення програмного продукту для роботи з базою даних про
                товари магазина побутової техніки.
            </Typography>
            <br>
            </br>
            <Typography variant="h7">
                Виконав: <br></br>
                Студент 6.04.122.010.21.4 <br></br>
                Чміль М.Ю.
            </Typography>
        </Box>
      </Modal>
    </div>
  );
  }
  
