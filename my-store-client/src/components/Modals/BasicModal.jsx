import { Box, Button, InputLabel, Modal, NativeSelect, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useStore } from "../../stores/StoresManager";
import { toast } from "react-toastify";
import { modalStyle } from "./ModalStyle";


export default function BasicModal() {


  const { productStore } = useStore();

  const [name, setName] = useState('');
  const [nameErrors, setNameErrors] = useState('');

  const [type, setType] = useState('Blender');
  const [typeErrors, setTypeErrors] = useState('');

  const [description, setDescription] = useState('');

  const [price, setPrice] = useState('');
  const [priceErrors, setPriceErrors] = useState('');

  const [quantity, setQuantity] = useState('');
  const [quantityErrors, setQuantityErrors] = useState('');

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

   useEffect(() => {    
        validateForm();
    }, [ name, type, price, quantity]);

     const validateForm = () => {
        validateName();
        validateType();
        validatePrice();
        validateQuantity();
    }

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

  const validateType = () => {
    if (type.length === 0) {
      setTypeErrors("Fill in the Price input");
    } 
    else if (type.length >= 40)
    {
      setTypeErrors("Max length 30 letters");
    }
    else {
      setTypeErrors('');
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

   const handleQuantity = (value) => {
    if(value >= 0)
      {
        setQuantity(value)
      }
   }

   const handlePrice = (value) => {
    if(value >= 0)
      {
        setPrice(value)
      }
   }


  const hasErrors = () => {
    const hasAnyErrors = nameErrors.length 
                      || priceErrors.length 
                      || quantityErrors.length
                      || typeErrors.length
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
           <br></br>
           <InputLabel variant="standard" htmlFor="uncontrolled-native">
            Type
           </InputLabel>
           <NativeSelect
                sx={{width: "280px", margin:"5px", textAlign: "left", color: "inherit"}}
                value={type}
                onChange={e => setType(e.target.value)}
            >
            <option value={"Blender"}>Blender</option>
            <option value={"Kettle"}>Electric kettle</option>
            <option value={"Refrigerator"}>Refrigerator</option>
            <option value={"Multicooker"}>Multicooker</option>
            </NativeSelect>
            <br></br>
           <TextField 
                variant='outlined'
                label='ProductName' 
                helperText={nameErrors}
                error={nameErrors.length !== 0} 
                value={name}
                onChange={e => setName(e.target.value)}
                sx={{width: "35ch", margin:"5px"}}            
           />
           <br></br>
           <TextField 
                variant='outlined'
                label='Price(UAH)'
                type="number"
                helperText={priceErrors}
                error={priceErrors.length !== 0} 
                value={price}
                onChange={e => handlePrice(e.target.value)} 
                sx={{width: "35ch", margin:"5px"}}            
           />
            <br></br>
           <TextField 
                variant='outlined'
                label='Quantity'
                type="number"
                helperText={quantityErrors}
                error={quantityErrors.length !== 0} 
                value={quantity}
                onChange={e => handleQuantity(e.target.value)} 
                sx={{width: "35ch"}}            
           />
            <br></br>
            <TextField
                variant='outlined'
                label='Description'
                value={description}
                onChange={e => setDescription(e.target.value)} 
                rows={4}
                sx={{width: "35ch", margin:"5px"}}
                multiline
            />
            <br></br>
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
