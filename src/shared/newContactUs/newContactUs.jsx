"use client"
import React,{ useRef, useState }  from 'react'
import style from'./touch.module.scss'
import {FormControl} from '@mui/material';
import TextField from '@mui/material/TextField';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import {
    faChartPie, faHandshake, faHeadset, faPersonDigging, faRankingStar, faRulerCombined, faVest, faVihara,
    faEnvelope, faLocationDot, faMobile, faPhone
} from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import emailjs from '@emailjs/browser';

function NewContactUs(props) {

    const form = useRef();
    const [err,setErr] = useState('')

    const sendEmail = (e) => {
        e.preventDefault();
      
            if(!e.target[0].value || !e.target[1].value || !e.target[2].value || !e.target[3].value || !e.target[4].value  ){
                
                setErr('Please fill all  required fields.')
                setTimeout(()=>setErr(''),2000)

                return;

            }
    
        emailjs
          .sendForm( 'service_lbvt72k', 'template_i1bu4iz', form.current, {
            publicKey:  'YvcL1-VJjm_J4uKFv',
          })
          .then(
            () => {
              console.log('SUCCESS!');setErr('Form sumbitted successfully'); setTimeout(()=>setErr(''),2000);e.target.reset(); 

            },
            (error) => {
              console.log('FAILED...', );setErr('Form submission failed'); setTimeout(()=>setErr(''),2000); 

            },
          );
      };
      
  return (
    <div className={style.get_container}>
        <div className={style.container_header}>
            <h1>Get in touch</h1>
        </div>
        <div className={style.form_container}>
           
            <div className={style.form_wrap}>
            <p className={style.message}>Send a message</p>
            <form ref={form} onSubmit={sendEmail}>
            <div className={style.input_wrap}>
            <div className={style.input_box}>
            <TextField id="standard-basic" label="Name" variant="standard"  name="user_name"  />
            </div>
            <div className={style.input_box}>
            <TextField id="standard-basic" type='email' label="Email" variant="standard" name="email" />
            </div>
            <div className={style.input_box}>
            <TextField id="standard-basic" label="Company" variant="standard" name="company_name" />
            </div>
            <div className={style.input_box}>
            <TextField id="standard-basic"  label="Contact Number" variant="standard" name="contact_number" />
            </div>
            <FormControl fullWidth>
            <TextField
                id="standard-multiline-flexible"
                label="message"
                multiline
                maxRows={4}
                variant="standard"
                name="message"
            />
             </FormControl>
            </div>
            <input type="submit" className={style.inquery_btn} value="Send Inquery"></input>
            </form>
            <p className='text-danger mt-3 d-flex justify-content-center font-large'>{err}</p>
            </div>
            <div className={`${style.locationOverLay}`}>
                        <h4>United Kingdom</h4>
                        <ul>
                            <li>
                                <span><FontAwesomeIcon icon={faLocationDot} /></span>
                                <label>Flat 02 Towerfieds, Westerham Road Bromley, BR2 6HF, London, United Kingdom</label>
                            </li>
                            <li>
                                <span><FontAwesomeIcon icon={faEnvelope} /></span>
                                <Link href="mailto:Info@pearlepp.co.uk" target='_blank'><label className='ms-2' style={{cursor:'pointer'}}>Info@pearlepp.co.uk</label></Link>
                            </li>
                            <li>
                                <span><FontAwesomeIcon icon={faPhone} /></span>
                                {/* <label>+44 2035763199</label> */}
                                <Link href="tel:+442035763199" target='_blank'><label className='ms-2' style={{cursor:'pointer'}}>+44 2035763199</label></Link>
                                
                            </li>
                            <li>
                                <span><FontAwesomeIcon icon={faMobile} /></span>
                                {/* <label>+44 7460 140474</label> */}
                                <Link href="tel:+447460140474" target='_blank'><label className='ms-2' style={{cursor:'pointer'}}>+44 7460 140474</label></Link>
                            </li>
                            <li>
                                <span><FontAwesomeIcon icon={faWhatsapp} /></span>
                                <Link href="https://wa.me/+447460140474" target='_blank'><label className='ms-2' style={{cursor:'pointer'}}>+44 7460 140474</label></Link>
                            </li>
                        </ul>
                        <h5 className='mb-3'>Support</h5>
                        <label className='mb-3'>We&#44;re here to answer your technical questions whenever you need.</label>
                        <ul>
                            <li>
                                <span><FontAwesomeIcon icon={faPhone} /></span>
                                {/* <label>+44 7460 140474</label> */}
                                <Link href="tel:+447460140474" target='_blank'><label style={{cursor:'pointer'}}>+44 7460 140474</label></Link>
                            </li>
                        </ul>
                    </div>
        </div>
    </div>
  )
}

export default NewContactUs
