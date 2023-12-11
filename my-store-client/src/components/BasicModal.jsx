import { Box, Button, InputLabel, MenuItem, Modal, Select, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useStore } from "../stores/StoresManager";
import { toast } from "react-toastify";


const modalStyle = {
  
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  height: 550,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {


  const { productStore } = useStore();

  const [name, setName] = useState('');
  const [nameErrors, setNameErrors] = useState('');

  const [description, setDescription] = useState('');

  const [price, setPrice] = useState('');
  const [priceErrors, setPriceErrors] = useState('');

  const [quantity, setQuantity] = useState('');
  const [quantityErrors, setQuantityErrors] = useState('');

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [type, setType] = useState('');

   useEffect(() => {    
        validateForm();
    }, [ name, price, quantity]);

     const validateForm = () => {
        validateName();
        validatePrice();
        validateQuantity();
    }

  const handleChange = (event) => {
    setType(event.target.value);
  };

  const validateName = () => {
      if (name.length === 0) {
        setNameErrors("Fill in the Name input");
      } 
      else if (name.length >= 30)
      {
        setNameErrors("Max length 30 letters");
      }
      else {
        setNameErrors('');
      }
  } 

  const validatePrice = () => {
      if (price.length === 0) {
        setPriceErrors("Fill in the Price input");
      }   
      else {
        setPriceErrors('');
      }
  }
  
   const validateQuantity = () => {
      if (quantity.length === 0) {
        setQuantityErrors("Fill in the quantity input");
      }   
      else {
        setQuantityErrors('');
      }
  }

  const hasErrors = () => {
    const hasAnyErrors = nameErrors.length 
                      || priceErrors.length 
                      || quantityErrors.length
    return hasAnyErrors;
}

const submit = async () => {
  if (hasErrors()) {
      return;
  }

  const product = {
      name: name,
      type: type,
      description: description,
      price: price,
      quantity: quantity
  };

  try {
      await productStore.createProduct(product);
      toast.success("Your product has been successfully created!") 
      handleClose();           
  } catch (error) {
      toast.error("Failed to create product")
  }
}
  


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
                helperText={nameErrors}
                error={nameErrors.length !== 0} 
                value={name}
                onChange={e => setName(e.target.value)}
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
            <MenuItem value={"Kettle"}>Electric kettle</MenuItem>
            <MenuItem value={"Refrigerator"}>Refrigerator</MenuItem>
            <MenuItem value={"Multicooker"}>Multicooker</MenuItem>
            </Select>
            <div></div>
            <TextField
                variant='outlined'
                label='Description'
                value={description}
                onChange={e => setDescription(e.target.value)} 
                rows={4}
                sx={{width: "35ch"}}
                multiline
            />
            <div></div>
            <TextField 
                variant='outlined'
                label='Price(UAH)'
                type="number"
                helperText={priceErrors}
                error={priceErrors.length !== 0} 
                value={price}
                onChange={e => setPrice(e.target.value)} 
                sx={{width: "35ch", margin:"5px"}}            
           />
            <div></div>
           <TextField 
                variant='outlined'
                label='Quantity'
                type="number"
                helperText={quantityErrors}
                error={quantityErrors.length !== 0} 
                value={quantity}
                onChange={e => setQuantity(e.target.value)} 
                sx={{width: "35ch"}}            
           />
           <div></div>
            <Button 
                type='submit' 
                color='success' 
                variant="contained" 
                onClick={submit}
                sx={{margin: "10px 0"}} 
            >
                    Create product
        </Button>
        </Box>
      </Modal>
    </div>
  );
}
