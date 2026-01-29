"use client";

import * as React from "react";
import { useMemo, useRef } from "react";
import {
  Dialog,
  Box,
  Grid,
  Stack,
  Typography,
  IconButton,
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Snackbar,
  Alert,
  Divider,
  useMediaQuery,
} from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import emailjs from "@emailjs/browser";
import { useForm, Controller } from "react-hook-form";

const servicesLinks = [
  { value: "architectural_services", label: "Architectural Services" },
  { value: "structural_engineering_services", label: "Structural Engineering Services" },
  { value: "planning_and_building_control_services", label: "Planning and Building Control Services" },
  { value: "quantity_surveying", label: "Quantity Surveying" },
  { value: "contracts_management", label: "Contracts Management" },
  { value: "snagging_services", label: "Snagging Works" },
  { value: "cost_control_value", label: "Cost Control & Value Engineering" },
  { value: "contractor_management", label: "Contractor Management" },
  { value: "quality_management", label: "Quality Management" },
  { value: "commercial_management", label: "Commercial Management" },
  { value: "project_management", label: "Project Management" },
];

export default function ServiceQueryPopup({ open, setOpen }) {
  const formRef = useRef(null);
  const isMobile = useMediaQuery("(max-width:900px)");

  const [openSnackbar, setOpenSnackbar] = React.useState(false);
  const [msg, setMsg] = React.useState("");
  const [severity, setSeverity] = React.useState("success");

  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      email: "",
      property_services: "",
      contact_number: "",
    },
  });

  const heroImg = useMemo(
    () => "/crop-architect-opening-blueprint_23-2147710985.avif",
    []
  );

  const onSubmit = async () => {
    try {
      await emailjs.sendForm("service_lbvt72k", "template_i1bu4iz", formRef.current, {
        publicKey: "YvcL1-VJjm_J4uKFv",
      });

      setSeverity("success");
      setMsg("Form submitted successfully");
      setOpenSnackbar(true);

      reset();
      setOpen(false);
    } catch (e) {
      setSeverity("error");
      setMsg("Something went wrong. Please try again.");
      setOpenSnackbar(true);
    }
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
        onClose={handleClose}
        fullWidth
        maxWidth="md"
        PaperProps={{
          sx: {
            borderRadius: 4,
            overflow: "hidden",
            boxShadow: "0 20px 60px rgba(15, 23, 42, 0.25)",
          },
        }}
      >
        <Grid container spacing={0} sx={{ minHeight: isMobile ? "auto" : 520 }}>
          {/* LEFT HERO (hidden on mobile) */}
          <Grid
            item
            xs={12}
            md={5}
            sx={{
              display: { xs: "none", md: "block" },
              position: "relative",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                backgroundImage: `url(${heroImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                filter: "saturate(1.05)",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(135deg, rgba(99,102,241,.88), rgba(59,130,246,.68), rgba(15,23,42,.35))",
              }}
            />
            <Box sx={{ position: "relative", p: 3.5, height: "100%" }}>
              <Stack spacing={2} sx={{ height: "100%", justifyContent: "space-between" }}>
                <Stack spacing={1.2}>
                  <Typography
                    sx={{
                      color: "rgba(255,255,255,.92)",
                      fontWeight: 900,
                      letterSpacing: 0.6,
                      fontSize: 12,
                      textTransform: "uppercase",
                    }}
                  >
                    PEPP • Quick Quote
                  </Typography>

                  <Typography
                    sx={{
                      color: "white",
                      fontWeight: 900,
                      fontSize: 30,
                      lineHeight: 1.15,
                    }}
                  >
                    Get expert advice
                    <br />
                    within 24 hours
                  </Typography>

                  <Typography sx={{ color: "rgba(255,255,255,.9)", fontSize: 14.5, lineHeight: 1.6 }}>
                    Tell us what you need—Planning, Architecture, Structural Engineering or Building Control. We’ll reply
                    with clear next steps.
                  </Typography>
                </Stack>

                <Stack spacing={1.2}>
                  {[
                    "Free guidance from an experienced team",
                    "Transparent & fixed-fee options available",
                    "UK-wide support for residential & commercial",
                  ].map((t) => (
                    <Stack key={t} direction="row" spacing={1.2} alignItems="center">
                      <CheckCircleRoundedIcon sx={{ color: "rgba(255,255,255,.92)" }} />
                      <Typography sx={{ color: "rgba(255,255,255,.92)", fontSize: 14 }}>{t}</Typography>
                    </Stack>
                  ))}
                </Stack>
              </Stack>
            </Box>
          </Grid>

          {/* RIGHT FORM */}
          <Grid item xs={12} md={7} sx={{ position: "relative", background: "#fff" }}>
            {/* Top bar */}
            <Box sx={{ p: 2.25, pb: 1.25 }}>
              <Stack direction="row" alignItems="flex-start" justifyContent="space-between" spacing={2}>
                <Box>
                  <Typography sx={{ fontWeight: 900, fontSize: 20, lineHeight: 1.25, color: "#0f172a" }}>
                    Free Expert Advice
                  </Typography>
                  <Typography sx={{ mt: 0.7, color: "#475569", fontSize: 13.5, lineHeight: 1.6 }}>
                    Share your details and the service you need. We’ll get back to you shortly.
                  </Typography>
                </Box>

                <IconButton
                  aria-label="Close"
                  onClick={handleClose}
                  sx={{
                    mt: -0.25,
                    borderRadius: 2,
                    background: "rgba(15, 23, 42, 0.04)",
                    "&:hover": { background: "rgba(15, 23, 42, 0.08)" },
                  }}
                >
                  <CloseRoundedIcon />
                </IconButton>
              </Stack>
            </Box>

            <Divider />

            <Box sx={{ p: 2.25 }}>
              <Box component="form" ref={formRef} onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      label="Email Address"
                      fullWidth
                      autoComplete="email"
                      size="medium"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                          message: "Invalid email address",
                        },
                      })}
                      error={!!errors.email}
                      helperText={errors.email?.message || " "}
                      sx={{
                        "& .MuiOutlinedInput-root": { borderRadius: 3 },
                      }}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      label="Phone Number"
                      fullWidth
                      autoComplete="tel"
                      size="medium"
                      {...register("contact_number", {
                        required: "Phone number is required",
                        pattern: {
                          value: /^[0-9]{10,15}$/,
                          message: "Phone number must be between 10-15 digits",
                        },
                      })}
                      error={!!errors.contact_number}
                      helperText={errors.contact_number?.message || " "}
                      sx={{
                        "& .MuiOutlinedInput-root": { borderRadius: 3 },
                      }}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <FormControl
                      fullWidth
                      error={!!errors.property_services}
                      sx={{
                        "& .MuiOutlinedInput-root": { borderRadius: 3 },
                      }}
                    >
                      <InputLabel id="service-label">Service</InputLabel>

                      {/* IMPORTANT:
                          We use Controller for MUI Select.
                          Your previous code used register() directly which is unreliable for Select.
                          Functionality remains same (still sends the value) but now it works correctly. */}
                      <Controller
                        name="property_services"
                        control={control}
                        rules={{ required: "Service selection is required" }}
                        render={({ field }) => (
                          <Select
                            {...field}
                            labelId="service-label"
                            label="Service"
                            MenuProps={{ PaperProps: { sx: { borderRadius: 3 } } }}
                          >
                            {servicesLinks.map((item) => (
                              <MenuItem key={item.value} value={item.value}>
                                {item.label}
                              </MenuItem>
                            ))}
                          </Select>
                        )}
                      />

                      <Typography
                        sx={{
                          mt: 0.6,
                          ml: 1.75,
                          fontSize: 12,
                          color: errors.property_services ? "#d32f2f" : "transparent",
                          minHeight: 18,
                        }}
                      >
                        {errors.property_services?.message || " "}
                      </Typography>
                    </FormControl>
                  </Grid>

                  <Grid item xs={12}>
                    <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5} sx={{ mt: 0.5 }}>
                      <Button
                        onClick={handleClose}
                        variant="outlined"
                        color="inherit"
                        fullWidth
                        sx={{
                          borderRadius: 3,
                          py: 1.25,
                          borderColor: "rgba(15, 23, 42, 0.18)",
                          color: "#0f172a",
                          "&:hover": { borderColor: "rgba(15, 23, 42, 0.32)" },
                        }}
                      >
                        Cancel
                      </Button>

                      <Button
                        type="submit"
                        variant="contained"
                        fullWidth
                        disabled={isSubmitting}
                        sx={{
                          borderRadius: 3,
                          py: 1.25,
                          fontWeight: 800,
                          boxShadow: "0 10px 24px rgba(59, 130, 246, 0.28)",
                        }}
                      >
                        {isSubmitting ? "Submitting..." : "Submit"}
                      </Button>
                    </Stack>

                    <Typography sx={{ mt: 1.4, color: "#64748b", fontSize: 12.5, lineHeight: 1.6 }}>
                      By submitting, you agree that PEPP may contact you regarding your enquiry.
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Dialog>

      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={openSnackbar}
        autoHideDuration={5000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={severity}
          variant="filled"
          sx={{ width: "100%", borderRadius: 3 }}
        >
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
//                     justifyContent: 'center', // Popup ko center mein karega
//                     alignItems: 'center', // Popup ko center mein karega
//                     position: 'fixed',
//                 }}
//             >
//                 <Grid container spacing={0}>
//                     <Grid item xs={12} md={6} sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', justifyContent: 'center', backgroundColor: '#ffffff'}}>
//                         <img src="/crop-architect-opening-blueprint_23-2147710985.avif" alt="Planning" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
//                     </Grid>
//                     <Grid item xs={12} md={6} sx={{ padding: 1 }}>
//                         <DialogTitle sx={{ textAlign: 'center' }}> {/* Heading ko center karega */}
//                             Free Expert Advice on Planning, Architecture, Structural Engineering or Building Control?
//                         </DialogTitle>
//                         <form onSubmit={handleSubmit(onSubmit)} ref={form}>
//                             <DialogContent>
//                                 <DialogContentText sx={{ textAlign: 'center' }}> {/* Paragraph ko center karega */}
//                                 Please provide your email address, contact number, and the service you need. We will get in touch with you shortly.                                </DialogContentText>
//                                 <TextField
//                                     required
//                                     margin="dense"
//                                     id="email"
//                                     name="email"
//                                     label="Email Address"
//                                     type="email"
//                                     fullWidth
//                                     variant="standard"
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
//                                     variant="standard"
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
//                                 <FormControl variant="standard" sx={{ width: '100%' }}>
//                                     <InputLabel id="service-label" required>Service</InputLabel>
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
//                             <DialogActions sx={{ justifyContent: 'center' }}> {/* Buttons ko center karega */}
//                                 <Button color='error' variant='contained' onClick={handleClose}>Cancel</Button>
//                                 <Button type="submit" variant='contained'>Submit</Button>
//                             </DialogActions>
//                         </form>
//                     </Grid>
//                 </Grid>
//             </Dialog>
//             <Snackbar
//                 anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
//                 open={openSnackbar}
//                 autoHideDuration={5000}
//                 onClose={handleCloseSnackbar}
//             >
//                 <Alert onClose={handleCloseSnackbar} severity={severity} variant="filled" sx={{ width: '100%' }}>
//                     {msg}
//                 </Alert>
//             </Snackbar>
//         </React.Fragment>
//     );
// }


























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

