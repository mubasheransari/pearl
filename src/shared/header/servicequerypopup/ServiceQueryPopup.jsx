// import * as React from 'react';
// import { useRef } from 'react';
// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';
// import {FormControl,InputLabel,Select,MenuItem,Snackbar,Alert } from '@mui/material'
// import { useForm } from "react-hook-form";
// import emailjs from '@emailjs/browser';

// const servicesLinks = [
//     { value: 'architectural_services', label: 'Architectural Services' },
//     { value: 'structural_enigneering_services', label: 'Structural Engineering Services' },
//     { value: 'planning_and_building_control_services', label: 'Planning and Building Control Services' },
//     {value: 'quantity_surverying', label: 'Quantity Surverying'},
//     { value: 'contracts_management', label: 'Contracts Management' },
//     { value: 'snagging_services', label: 'Snagging Works'},
//     { value: 'cost_control_value', label: 'Cost Control & Value Engineering'},
//     { value: 'contractor_management', label: 'Contractor Management' },
//     { value: 'quality_management', label: 'Quality Management'},
//     { value: 'commercial_management', label: 'Commercial Management'},
//     { value: 'project_management', label: 'Project Management'},
//   ]

// export default function ServiceQueryPopup({open,setOpen}) {

//     const [openSnackbar,setOpenSnackbar] = React.useState(false)
//     const [msg,setMsg] = React.useState('')
//     const [severity,setSeverity] = React.useState('')

//     const form = useRef();
//     const { register, handleSubmit } = useForm({
//         defaultValues: {
//             email: '',
//             property_services: '',
//             contact_number:''
//           }
//     });
//     const onSubmit = data => {
       

//         emailjs
//         .sendForm( 'service_lbvt72k', 'template_i1bu4iz', form.current, {
//           publicKey:  'YvcL1-VJjm_J4uKFv',
//         })
//         .then(
//           () => {
//             setOpenSnackbar(open);setMsg('Form sumbitted successfully');setSeverity('success');setOpen(false)
//           },
//           (error) => {
//             setOpenSnackbar(open);setMsg('Something went wrong'); setSeverity('error') 

//           },
//         );
//     };


//   const handleClose = () => {
//     setOpen(false);
//   };

//   const handleCloseSnackbar =()=>{
//     setOpenSnackbar(false)
//   }

//   return (
//     <React.Fragment>
//       <Dialog
//         open={open}
//       >
//         <DialogTitle>Free Expert Advice on Planning, Architecture, Structural Engineering, or Building Control?</DialogTitle>
//         <form onSubmit={handleSubmit(onSubmit)}  ref={form}>
//         <DialogContent>
//           <DialogContentText>
//             Please enter your email address, contact number and service you require. We
//             will contact you soon.
//           </DialogContentText>
//           <TextField
//             autoFocus
//             required
//             margin="dense"
//             id="email"
//             name="email"
//             label="Email Address"
//             type="email"
//             fullWidth
//             variant="standard"
//             {...register("email")}
//           />
//            <TextField
//             autoFocus
//             required
//             margin="dense"
//             id="contact_number"
//             name="contact_number"
//             label="Phone Number"
//             type="text"
//             fullWidth
//             variant="standard"
//             {...register("contact_number")}
//           />
//         <FormControl variant="standard" sx={{ width:'100%' }}>
//         <InputLabel id="demo-simple-select-standard-label" required>Service</InputLabel>
//         <Select
//           labelId="demo-simple-select-standard-label"
//           id="demo-simple-select-standard"
//           name='property_services'
//           label="Service"
//           required  
//           {...register("property_services")}
          
//         >
//           {servicesLinks.map((item,index)=>{
//             return (
//                 <MenuItem key={item+index} value={item.value}>{item.label}</MenuItem>
//             )
//           })}
//         </Select>
//       </FormControl>
//         </DialogContent>
//         <DialogActions>
//           <Button color='error' variant='contained' onClick={handleClose}>Cancel</Button>
//           <Button type="submit" variant='contained'>Submit</Button>
//         </DialogActions>
//         </form>
//       </Dialog>
//       <Snackbar
//       anchorOrigin={{ vertical:'top', horizontal:'right' }}
//         open={openSnackbar}
//         autoHideDuration={5000}
//         onClose={handleCloseSnackbar}
//       >
//         <Alert
//         onClose={handleClose}
//         severity={severity}
//         variant="filled"
//         sx={{ width: '100%' }}
//   >
//          {msg}
//         </Alert>
//       </Snackbar>
//     </React.Fragment>
//   );
// }






import * as React from 'react';
import { useRef } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { FormControl, InputLabel, Select, MenuItem, Snackbar, Alert, Grid } from '@mui/material';
import { useForm } from "react-hook-form";
import emailjs from '@emailjs/browser';

const servicesLinks = [
    { value: 'architectural_services', label: 'Architectural Services' },
    { value: 'structural_engineering_services', label: 'Structural Engineering Services' },
    { value: 'planning_and_building_control_services', label: 'Planning and Building Control Services' },
    { value: 'quantity_surveying', label: 'Quantity Surveying' },
    { value: 'contracts_management', label: 'Contracts Management' },
    { value: 'snagging_services', label: 'Snagging Works' },
    { value: 'cost_control_value', label: 'Cost Control & Value Engineering' },
    { value: 'contractor_management', label: 'Contractor Management' },
    { value: 'quality_management', label: 'Quality Management' },
    { value: 'commercial_management', label: 'Commercial Management' },
    { value: 'project_management', label: 'Project Management' },
];

export default function ServiceQueryPopup({ open, setOpen }) {
    const [openSnackbar, setOpenSnackbar] = React.useState(false);
    const [msg, setMsg] = React.useState('');
    const [severity, setSeverity] = React.useState('');

    const form = useRef();
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            email: '',
            property_services: '',
            contact_number: ''
        }
    });

    const onSubmit = (data) => {
        emailjs
            .sendForm('service_lbvt72k', 'template_i1bu4iz', form.current, {
                publicKey: 'YvcL1-VJjm_J4uKFv',
            })
            .then(
                () => {
                    setOpenSnackbar(true);
                    setMsg('Form submitted successfully');
                    setSeverity('success');
                    setOpen(false);
                },
                () => {
                    setOpenSnackbar(true);
                    setMsg('Something went wrong');
                    setSeverity('error');
                }
            );
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleCloseSnackbar = () => {
        setOpenSnackbar(false);
    };

    return (
        <React.Fragment>
            <Dialog 
                open={open} 
                fullWidth
                maxWidth="md"
                sx={{
                    display: 'flex',
                    justifyContent: 'center', // Popup ko center mein karega
                    alignItems: 'center', // Popup ko center mein karega
                    position: 'fixed',
                }}
            >
                <Grid container spacing={0}>
                    <Grid item xs={12} md={6} sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', justifyContent: 'center', backgroundColor: '#ffffff'}}>
                        <img src="/crop-architect-opening-blueprint_23-2147710985.avif" alt="Planning" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </Grid>
                    <Grid item xs={12} md={6} sx={{ padding: 3 }}>
                        <DialogTitle sx={{ textAlign: 'center' }}> {/* Heading ko center karega */}
                            Free Expert Advice on Planning, Architecture, Structural Engineering, or Building Control?
                        </DialogTitle>
                        <form onSubmit={handleSubmit(onSubmit)} ref={form}>
                            <DialogContent>
                                <DialogContentText sx={{ textAlign: 'center' }}> {/* Paragraph ko center karega */}
                                    Please enter your email address, contact number, and service you require. We will contact you soon.
                                </DialogContentText>
                                <TextField
                                    required
                                    margin="dense"
                                    id="email"
                                    name="email"
                                    label="Email Address"
                                    type="email"
                                    fullWidth
                                    variant="standard"
                                    {...register("email", { 
                                        required: "Email is required", 
                                        pattern: {
                                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                            message: "Invalid email address"
                                        }
                                    })}
                                    error={!!errors.email}
                                    helperText={errors.email?.message}
                                />
                                <TextField
                                    required
                                    margin="dense"
                                    id="contact_number"
                                    name="contact_number"
                                    label="Phone Number"
                                    type="text"
                                    fullWidth
                                    variant="standard"
                                    {...register("contact_number", {
                                        required: "Phone number is required",
                                        pattern: {
                                            value: /^[0-9]{10,15}$/,
                                            message: "Phone number must be between 10-15 digits"
                                        }
                                    })}
                                    error={!!errors.contact_number}
                                    helperText={errors.contact_number?.message}
                                />
                                <FormControl variant="standard" sx={{ width: '100%' }}>
                                    <InputLabel id="service-label" required>Service</InputLabel>
                                    <Select
                                        labelId="service-label"
                                        id="property_services"
                                        name="property_services"
                                        required
                                        {...register("property_services", { required: "Service selection is required" })}
                                        error={!!errors.property_services}
                                    >
                                        {servicesLinks.map((item) => (
                                            <MenuItem key={item.value} value={item.value}>{item.label}</MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </DialogContent>
                            <DialogActions sx={{ justifyContent: 'center' }}> {/* Buttons ko center karega */}
                                <Button color='error' variant='contained' onClick={handleClose}>Cancel</Button>
                                <Button type="submit" variant='contained'>Submit</Button>
                            </DialogActions>
                        </form>
                    </Grid>
                </Grid>
            </Dialog>
            <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={openSnackbar}
                autoHideDuration={5000}
                onClose={handleCloseSnackbar}
            >
                <Alert onClose={handleCloseSnackbar} severity={severity} variant="filled" sx={{ width: '100%' }}>
                    {msg}
                </Alert>
            </Snackbar>
        </React.Fragment>
    );
}


























// import * as React from 'react';
// import { useRef } from 'react';
// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';
// import { FormControl, InputLabel, Select, MenuItem, Snackbar, Alert, Grid } from '@mui/material';
// import { useForm } from "react-hook-form";
// import emailjs from '@emailjs/browser';

// const servicesLinks = [
//     { value: 'architectural_services', label: 'Architectural Services' },
//     { value: 'structural_engineering_services', label: 'Structural Engineering Services' },
//     { value: 'planning_and_building_control_services', label: 'Planning and Building Control Services' },
//     { value: 'quantity_surveying', label: 'Quantity Surveying' },
//     { value: 'contracts_management', label: 'Contracts Management' },
//     { value: 'snagging_services', label: 'Snagging Works' },
//     { value: 'cost_control_value', label: 'Cost Control & Value Engineering' },
//     { value: 'contractor_management', label: 'Contractor Management' },
//     { value: 'quality_management', label: 'Quality Management' },
//     { value: 'commercial_management', label: 'Commercial Management' },
//     { value: 'project_management', label: 'Project Management' },
// ];

// export default function ServiceQueryPopup({ open, setOpen }) {
//     const [openSnackbar, setOpenSnackbar] = React.useState(false);
//     const [msg, setMsg] = React.useState('');
//     const [severity, setSeverity] = React.useState('');

//     const form = useRef();
//     const { register, handleSubmit, formState: { errors } } = useForm({
//         defaultValues: {
//             email: '',
//             property_services: '',
//             contact_number: ''
//         }
//     });

//     const onSubmit = (data) => {
//         emailjs
//             .sendForm('service_lbvt72k', 'template_i1bu4iz', form.current, {
//                 publicKey: 'YvcL1-VJjm_J4uKFv',
//             })
//             .then(
//                 () => {
//                     setOpenSnackbar(true);
//                     setMsg('Form submitted successfully');
//                     setSeverity('success');
//                     setOpen(false);
//                 },
//                 () => {
//                     setOpenSnackbar(true);
//                     setMsg('Something went wrong');
//                     setSeverity('error');
//                 }
//             );
//     };

//     const handleClose = () => {
//         setOpen(false);
//     };

//     const handleCloseSnackbar = () => {
//         setOpenSnackbar(false);
//     };

//     return (
//         <React.Fragment>
//             <Dialog 
//                 open={open} 
//                 fullWidth
//                 maxWidth="md"
//                 sx={{
//                     display: 'flex',
//                     justifyContent: { xs: 'center', md: 'flex-end' },
//                     alignItems: 'center',
//                     position: 'fixed',
//                     right: '20px',
//                 }}
//             >
//                 <Grid container spacing={0}>
//                     <Grid item xs={12} md={6} sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', justifyContent: 'center', backgroundColor: '#ffffff' }}>
//                         <img src="/crop-architect-opening-blueprint_23-2147710985.avif" alt="Planning" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
//                     </Grid>
//                     <Grid item xs={12} md={6} sx={{ padding: 3, textAlign: 'center' }}>
//                         <DialogTitle sx={{ textAlign: 'center' }}>Free Expert Advice on Planning, Architecture, Structural Engineering, or Building Control?</DialogTitle>
//                         <DialogContentText sx={{ textAlign: 'center', marginBottom: 2 }}>
//                             Please enter your email address, contact number, and service you require. We will contact you soon.
//                         </DialogContentText>
//                         <form onSubmit={handleSubmit(onSubmit)} ref={form}>
//                             <DialogContent>
//                                 <TextField
//                                     required
//                                     margin="dense"
//                                     id="email"
//                                     name="email"
//                                     label="Email Address"
//                                     type="email"
//                                     fullWidth
//                                     variant="outlined"
//                                     {...register("email", { 
//                                         required: "Email is required", 
//                                         pattern: {
//                                             value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
//                                             message: "Invalid email address"
//                                         }
//                                     })}
//                                     error={!!errors.email}
//                                     helperText={errors.email?.message}
//                                 />
//                                 <TextField
//                                     required
//                                     margin="dense"
//                                     id="contact_number"
//                                     name="contact_number"
//                                     label="Phone Number"
//                                     type="text"
//                                     fullWidth
//                                     variant="outlined"
//                                     {...register("contact_number", {
//                                         required: "Phone number is required",
//                                         pattern: {
//                                             value: /^[0-9]{10,15}$/,
//                                             message: "Phone number must be between 10-15 digits"
//                                         }
//                                     })}
//                                     error={!!errors.contact_number}
//                                     helperText={errors.contact_number?.message}
//                                 />
//                                 <FormControl variant="outlined" sx={{ width: '100%', marginTop: 2 }}>
//                                     <InputLabel id="service-label">Service</InputLabel>
//                                     <Select
//                                         labelId="service-label"
//                                         id="property_services"
//                                         name="property_services"
//                                         required
//                                         {...register("property_services", { required: "Service selection is required" })}
//                                         error={!!errors.property_services}
//                                     >
//                                         {servicesLinks.map((item) => (
//                                             <MenuItem key={item.value} value={item.value}>{item.label}</MenuItem>
//                                         ))}
//                                     </Select>
//                                 </FormControl>
//                             </DialogContent>
//                             <DialogActions>
//                                 <Button color='error' variant='contained' onClick={handleClose}>Cancel</Button>
//                                 <Button type="submit" variant='contained'>Submit</Button>
//                             </DialogActions>
//                         </form>
//                     </Grid>
//                 </Grid>
//             </Dialog>
//         </React.Fragment>
//     );
// }

