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
            <h1>Have a question?</h1>
            <p>We're here to help! Fill out the form or reach us via email or phone. Our Customer Care Team is available to help you get the best experience out of K18 Hair whether you have an issue about your order or looking for helpful hair tips.</p>
            <p>We're here to assist you! Fill out our form or contact us via email or phone. Each inquiry receives a personalized response, so please allow 4-6 hours for a reply.</p>
            <br />
            <p>
              <Email />
              <a href="mailto:Info@pearlepp.co.uk" className="text-dark text-decoration-none mt-10"> Info@pearlepp.co.uk</a>
            </p>
            <p>
              <Phone />
              <a href="tel:+44 2035763199" className="text-dark text-decoration-none"> +44 2035763199 </a>
            </p>
            <p>
              <LocationOn />
              <a href="https://www.google.com/maps/search/?api=1&query=Flat+02+Towerfieds,+Westerham+Road+Bromley,+BR2+6HF,+London,+United+Kingdom" target="_blank" rel="noopener noreferrer" className="text-dark text-decoration-none">
                Flat 02 Towerfieds, Westerham Road Bromley, BR2 6HF, London, United Kingdom
              </a>
            </p>
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


