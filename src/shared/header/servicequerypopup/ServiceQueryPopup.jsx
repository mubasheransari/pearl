import * as React from 'react';
import { useRef } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {FormControl,InputLabel,Select,MenuItem,Snackbar,Alert } from '@mui/material'
import { useForm } from "react-hook-form";
import emailjs from '@emailjs/browser';

const servicesLinks = [
    { value: 'architectural_services', label: 'Architectural Services' },
    { value: 'structural_enigneering_services', label: 'Structural Engineering Services' },
    { value: 'planning_and_building_control_services', label: 'Planning and Building Control Services' },
    {value: 'quantity_surverying', label: 'Quantity Surverying'},
    { value: 'contracts_management', label: 'Contracts Management' },
    { value: 'snagging_services', label: 'Snagging Works'},
    { value: 'cost_control_value', label: 'Cost Control & Value Engineering'},
    { value: 'contractor_management', label: 'Contractor Management' },
    { value: 'quality_management', label: 'Quality Management'},
    { value: 'commercial_management', label: 'Commercial Management'},
    { value: 'project_management', label: 'Project Management'},
  ]

export default function ServiceQueryPopup({open,setOpen}) {

    const [openSnackbar,setOpenSnackbar] = React.useState(false)
    const [msg,setMsg] = React.useState('')
    const [severity,setSeverity] = React.useState('')

    const form = useRef();
    const { register, handleSubmit } = useForm({
        defaultValues: {
            email: '',
            property_services: '',
            contact_number:''
          }
    });
    const onSubmit = data => {
       

        emailjs
        .sendForm( 'service_lbvt72k', 'template_i1bu4iz', form.current, {
          publicKey:  'YvcL1-VJjm_J4uKFv',
        })
        .then(
          () => {
            setOpenSnackbar(open);setMsg('Form sumbitted successfully');setSeverity('success');setOpen(false)
          },
          (error) => {
            setOpenSnackbar(open);setMsg('Something went wrong'); setSeverity('error') 

          },
        );
    };


  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseSnackbar =()=>{
    setOpenSnackbar(false)
  }

  return (
    <React.Fragment>
      <Dialog
        open={open}
      >
        <DialogTitle>Free Expert Advice on Planning, Architecture, Structural Engineering, or Building Control?</DialogTitle>
        <form onSubmit={handleSubmit(onSubmit)}  ref={form}>
        <DialogContent>
          <DialogContentText>
            Please enter your email address, contact number and service you require. We
            will contact you soon.
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="email"
            name="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
            {...register("email")}
          />
           <TextField
            autoFocus
            required
            margin="dense"
            id="contact_number"
            name="contact_number"
            label="Phone Number"
            type="text"
            fullWidth
            variant="standard"
            {...register("contact_number")}
          />
        <FormControl variant="standard" sx={{ width:'100%' }}>
        <InputLabel id="demo-simple-select-standard-label" required>Service</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          name='property_services'
          label="Service"
          required  
          {...register("property_services")}
          
        >
          {servicesLinks.map((item,index)=>{
            return (
                <MenuItem key={item+index} value={item.value}>{item.label}</MenuItem>
            )
          })}
        </Select>
      </FormControl>
        </DialogContent>
        <DialogActions>
          <Button color='error' variant='contained' onClick={handleClose}>Cancel</Button>
          <Button type="submit" variant='contained'>Submit</Button>
        </DialogActions>
        </form>
      </Dialog>
      <Snackbar
      anchorOrigin={{ vertical:'top', horizontal:'right' }}
        open={openSnackbar}
        autoHideDuration={5000}
        onClose={handleCloseSnackbar}
      >
        <Alert
        onClose={handleClose}
        severity={severity}
        variant="filled"
        sx={{ width: '100%' }}
  >
         {msg}
        </Alert>
      </Snackbar>
    </React.Fragment>
  );
}
