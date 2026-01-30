// "use client"
// import React,{ useRef, useState }  from 'react'
// import style from'./touch.module.scss'
// import {FormControl} from '@mui/material';
// import TextField from '@mui/material/TextField';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import Link from 'next/link';
// import {
//     faChartPie, faHandshake, faHeadset, faPersonDigging, faRankingStar, faRulerCombined, faVest, faVihara,
//     faEnvelope, faLocationDot, faMobile, faPhone
// } from '@fortawesome/free-solid-svg-icons'
// import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
// import emailjs from '@emailjs/browser';

// function NewContactUs(props) {

//     const form = useRef();
//     const [err,setErr] = useState('')

//     const sendEmail = (e) => {
//         e.preventDefault();
      
//             if(!e.target[0].value || !e.target[1].value || !e.target[2].value || !e.target[3].value || !e.target[4].value  ){
                
//                 setErr('Please fill all  required fields.')
//                 setTimeout(()=>setErr(''),2000)

//                 return;

//             }
    
//         emailjs
//           .sendForm( 'service_lbvt72k', 'template_i1bu4iz', form.current, {
//             publicKey:  'YvcL1-VJjm_J4uKFv',
//           })
//           .then(
//             () => {
//               console.log('SUCCESS!');setErr('Form sumbitted successfully'); setTimeout(()=>setErr(''),2000);e.target.reset(); 

//             },
//             (error) => {
//               console.log('FAILED...', );setErr('Form submission failed'); setTimeout(()=>setErr(''),2000); 

//             },
//           );
//       };
      
//   return (
//     <div className={style.get_container}>
//         <div className={style.container_header}>
//             <h1>Get in touch</h1>
//         </div>
//         <div className={style.form_container}>
           
//             <div className={style.form_wrap}>
//             <p className={style.message}>Send a message</p>
//             <form ref={form} onSubmit={sendEmail}>
//             <div className={style.input_wrap}>
//             <div className={style.input_box}>
//             <TextField id="standard-basic" label="Name" variant="standard"  name="user_name"  />
//             </div>
//             <div className={style.input_box}>
//             <TextField id="standard-basic" type='email' label="Email" variant="standard" name="email" />
//             </div>
//             <div className={style.input_box}>
//             <TextField id="standard-basic" label="Company" variant="standard" name="company_name" />
//             </div>
//             <div className={style.input_box}>
//             <TextField id="standard-basic"  label="Contact Number" variant="standard" name="contact_number" />
//             </div>
//             <FormControl fullWidth>
//             <TextField
//                 id="standard-multiline-flexible"
//                 label="message"
//                 multiline
//                 maxRows={4}
//                 variant="standard"
//                 name="message"
//             />
//              </FormControl>
//             </div>
//             <input type="submit" className={style.inquery_btn} value="Send Inquery"></input>
//             </form>
//             <p className='text-danger mt-3 d-flex justify-content-center font-large'>{err}</p>
//             </div>
//             <div className={`${style.locationOverLay}`}>
//                         <h4>United Kingdom</h4>
//                         <ul>
//                             <li>
//                                 <span><FontAwesomeIcon icon={faLocationDot} /></span>
//                                 <label>Flat 02 Towerfieds, Westerham Road Bromley, BR2 6HF, London, United Kingdom</label>
//                             </li>
//                             <li>
//                                 <span><FontAwesomeIcon icon={faEnvelope} /></span>
//                                 <Link href="mailto:Info@pearlepp.co.uk" target='_blank'><label className='ms-2' style={{cursor:'pointer'}}>Info@pearlepp.co.uk</label></Link>
//                             </li>
//                             <li>
//                                 <span><FontAwesomeIcon icon={faPhone} /></span>
//                                 {/* <label>+44 2035763199</label> */}
//                                 <Link href="tel:+442035763199" target='_blank'><label className='ms-2' style={{cursor:'pointer'}}>+44 2035763199</label></Link>
                                
//                             </li>
//                             <li>
//                                 <span><FontAwesomeIcon icon={faMobile} /></span>
//                                 {/* <label>+44 7460 140474</label> */}
//                                 <Link href="tel:+447460140474" target='_blank'><label className='ms-2' style={{cursor:'pointer'}}>+44 7460 140474</label></Link>
//                             </li>
//                             <li>
//                                 <span><FontAwesomeIcon icon={faWhatsapp} /></span>
//                                 <Link href="https://wa.me/+447460140474" target='_blank'><label className='ms-2' style={{cursor:'pointer'}}>+44 7460 140474</label></Link>
//                             </li>
//                         </ul>
//                         <h5 className='mb-3'>Support</h5>
//                         <label className='mb-3'>We&#44;re here to answer your technical questions whenever you need.</label>
//                         <ul>
//                             <li>
//                                 <span><FontAwesomeIcon icon={faPhone} /></span>
//                                 {/* <label>+44 7460 140474</label> */}
//                                 <Link href="tel:+447460140474" target='_blank'><label style={{cursor:'pointer'}}>+44 7460 140474</label></Link>
//                             </li>
//                         </ul>
//                     </div>
//         </div>
//     </div>
//   )
// }

// export default NewContactUs


"use client"
import React, { useRef, useState } from "react";
import { TextField, MenuItem, Button, Snackbar, Alert } from "@mui/material";
import emailjs from "@emailjs/browser";
import { Email, Phone, LocationOn } from "@mui/icons-material";
import style from "./touch.module.scss";

const servicesLinks = [
    { value: 'architectural_services', label: 'Architectural Services' },
    { value: 'structural_engineering_services', label: 'Structural Engineering Services' },
    { value: 'planning_and_building_control_services', label: 'Planning and Building Control Services' },
    { value: 'bim_coordination_and_asset_ready_as_built_models', label: 'BIM Coordination and Asset-Ready As-Built Models' },
    { value: 'quantity_surveying', label: 'Quantity Surveying' },
    { value: 'contracts_management', label: 'Contracts Management' },
    { value: 'snagging_services', label: 'Snagging Works' },
    { value: 'cost_control_value', label: 'Cost Control & Value Engineering' },
    { value: 'contractor_management', label: 'Contractor Management' },
    { value: 'quality_management', label: 'Quality Management' },
    { value: 'commercial_management', label: 'Commercial Management' },
    { value: 'project_management', label: 'Project Management' },
];

const ContactForm = () => {
  const form = useRef();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const handlePhoneChange = (e) => {
    const phoneNumber = e.target.value;
    if (!/^\+?[0-9]{10,15}$/.test(phoneNumber)) {
      setPhoneError("Invalid phone number. Please enter a valid number.");
    } else {
      setPhoneError("");
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const requiredFields = ["first_name", "last_name", "email", "message", "property_services", "phone"];
    
    for (const field of requiredFields) {
      if (!formData.get(field)) {
        setError("Please fill all required fields.");
        return;
      }
    }

    const phoneNumber = formData.get("phone");
    if (!/^\+?[0-9]{10,15}$/.test(phoneNumber)) {
      setPhoneError("Invalid phone number. Please enter a valid number.");
      return;
    }

    emailjs
      .sendForm("service_lbvt72k", "template_i1bu4iz", form.current, {
        publicKey: "YvcL1-VJjm_J4uKFv",
      })
      .then(
        () => {
          setSuccess(true);
          e.target.reset();
          setSelectedService("");
          setPhoneError("");
        },
        () => {
          setError("Form submission failed");
        }
      );
  };

  return (
    <>
      <div><h2 className={style.h2}>Get in touch</h2></div>
      <div className={style.contactContainer}>
        <div className={style.contentWrapper}>
          <div className={style.contactInfo}>
            <h6>Let’s Talk! From Imagination to Reality—We Build, You Thrive</h6>
            <p>We're here to assist you! Fill out our form or contact us via email or phone. Each inquiry receives a personalized response, so please allow 4-6 hours for a reply.</p>
            <br />
            <p>
              <Email />
              <a href="mailto:Info@pearlepp.co.uk" className="text-dark text-decoration-none mt-10"> Info@pearlepp.co.uk</a>
            </p>
            <p>
              <Phone />
              <a href="tel:+44 7460140474" className="text-dark text-decoration-none"> +44 7460140474 </a>
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
  <LocationOn style={{ position: "relative", top: "0px" }} />
  <a 
    href="https://www.google.com/maps/search/?api=1&query=Flat+02+Towerfieds,+Westerham+Road+Bromley,+BR2+6HF,+London,+United+Kingdom" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="text-dark text-decoration-none"
    style={{ textDecoration: "none", color: "black" }}
  >
    Flat 02 Towerfieds, Westerham Road Bromley, BR2 6HF, London, United Kingdom.
  </a>
</div>
          </div>
          <div className={style.contactForm}>
            <form ref={form} onSubmit={sendEmail} className={style.formFields}>
              <div className={style.nameFields}>
                <TextField label="First Name" name="first_name" fullWidth required />
                <TextField label="Last Name" name="last_name" fullWidth required />
              </div>
              <TextField label="Email" name="email" type="email" fullWidth required />
              <TextField label="Phone Number" name="phone" fullWidth required onChange={handlePhoneChange} error={!!phoneError} helperText={phoneError} />
              <TextField
                select
                label="Select your service"
                name="property_services"
                fullWidth
                required
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
              >
                {servicesLinks.map((item) => (
                  <MenuItem key={item.value} value={item.value}>{item.label}</MenuItem>
                ))}
              </TextField>
              <TextField label="Message" name="message" multiline rows={4} fullWidth required />
              <Button type="submit" variant="contained" className={style.submitBtn}>
                Submit
              </Button>
              {error && <p className={style.errorMessage}>{error}</p>}
            </form>
          </div>
        </div>
        <Snackbar open={success} autoHideDuration={3000} onClose={() => setSuccess(false)}>
          <Alert onClose={() => setSuccess(false)} severity="success" variant="filled">
            Form submitted successfully!
          </Alert>
        </Snackbar>
      </div>
    </>
  );
};

export default ContactForm;


