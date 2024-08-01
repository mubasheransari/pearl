'use client'
import React, { useRef, useState } from 'react'
import style from './style.module.scss'
import emailjs from '@emailjs/browser';
import CircularProgress from '@mui/material/CircularProgress';


const cards1 = [
    { image: 'https://img.icons8.com/ios/50/country-house.png', value: "detached", label: 'Detached' },
    { image: 'https://img.icons8.com/external-outline-black-m-oki-orlando/32/external-semi-detached-house-types-of-houses-outline-outline-black-m-oki-orlando.png', value: "semidetached", label: 'Semi Detached' },
    { image: 'https://img.icons8.com/windows/32/bungalow.png', value: "terrace", label: 'Terrace' },
    { image: 'https://img.icons8.com/ios/50/000000/apartment.png', value: "flat", label: 'Flat' },
    { image: 'https://img.icons8.com/ios-filled/50/bungalow.png', value: "bungalow", label: 'Bungalow' },
]

const cards2 = [
    { image: 'https://img.icons8.com/ios/50/country-house.png', value: "groundfloor", label: 'Ground Floor' },
    { image: 'https://img.icons8.com/ios/50/country-house.png', value: "loft", label: 'Loft' },
    { image: 'https://img.icons8.com/ios/50/country-house.png', value: "firstfloor", label: 'First Floor' },
    { image: 'https://img.icons8.com/ios/50/country-house.png', value: "other", label: 'Other' },
]

const groundfloor = [
    { image: 'https://img.icons8.com/ios/50/country-house.png', value: "rear", label: 'Rear' },
    { image: 'https://img.icons8.com/ios/50/country-house.png', value: "sideinfill", label: 'Side Infill' },
    { image: 'https://img.icons8.com/ios/50/country-house.png', value: "side", label: 'Side' },
    { image: 'https://img.icons8.com/ios/50/country-house.png', value: "sideandrear", label: 'Side And Rear' },
    { image: 'https://img.icons8.com/ios/50/country-house.png', value: "wraparound", label: 'Wraparound' },
]

const loft = [
    { image: 'https://img.icons8.com/ios/50/country-house.png', value: "maindormer", label: 'Main Dormer' },
    { image: 'https://img.icons8.com/ios/50/country-house.png', value: "outriggerdormer", label: 'Outrigger Dormer' },
    { image: 'https://img.icons8.com/ios/50/country-house.png', value: "hiptogablewithnodormer", label: 'Hip To Gable With No Dormer' },
    { image: 'https://img.icons8.com/ios/50/country-house.png', value: "hiptogablewithmaindormer", label: 'Hip To Gable With Main Dormer' },
    { image: 'https://img.icons8.com/ios/50/country-house.png', value: "Lshapeddormer", label: 'L Shaped Dormer' },
]

const firstfloor = [
    { image: 'https://img.icons8.com/ios/50/country-house.png', value: "ffside", label: 'Side' },
    { image: 'https://img.icons8.com/ios/50/country-house.png', value: "ffsideandrear", label: 'Side And Rear' },
    { image: 'https://img.icons8.com/ios/50/country-house.png', value: "ffrear", label: 'Rear' },
    { image: 'https://img.icons8.com/ios/50/country-house.png', value: "rearoveroutrigger", label: 'Rear Over Outrigger' },
    { image: 'https://img.icons8.com/ios/50/country-house.png', value: "rearovergroundfloor", label: 'Rear Over Ground Floor' },
]

const other = [
    { image: 'https://img.icons8.com/ios/50/country-house.png', value: "gardenannex", label: 'Garden - Annex' },
    { image: 'https://img.icons8.com/ios/50/country-house.png', value: "garageconversion", label: 'Garage - Conversion' },
    { image: 'https://img.icons8.com/ios/50/country-house.png', value: "twostoreyside", label: 'Two Storey - Side' },
    { image: 'https://img.icons8.com/ios/50/country-house.png', value: "twostoreyrear", label: 'Two Storey - Rear' },
]

const cards3 = [
    { value: "option1", label: '1' },
    { value: "option2", label: '2' },
    { value: "option3", label: '3' },
    { value: "option4", label: '4' },
    { value: "option5", label: '5+' },
]

const cards4 = [
    { value: "ASAP", label: 'ASAP' },
    { value: "3months", label: '3 Months' },
    { value: "6months", label: '6 Months' },
    { value: "12months", label: '12 Months' },
    { value: "18months", label: '18 Months +' },
    { value: "imnotsure", label: 'Im not sure' },
]

const cards5 = [
    { value: "architecturaldrawings", label: 'Architectural drawings' },
    { value: "designandplanningadvice", label: 'Design and planning advice' },
    { value: "helpwithfinancingmybuild", label: 'Help with financing my build' },
    { value: "helpfindingabuilder", label: 'Help finding a builder' },
    { value: "helpfindingotherprofessionals", label: 'Help finding other professionals' },
]

const cards6 = [
    { value: "structuralengineer", label: 'Structural engineer' },
    { value: "partywallsurveyor", label: 'Party wall surveyor' },
    { value: "approvedinspector", label: 'Approved inspector' },
    { value: "otherprofessionals", label: 'Other professionals' },
]

const cards7 = [
    // { name='firstName', palceholder='', type='text', label='First name' },
    // { name='lastName', palceholder='', type='text', label='Last name' },
    // { name='address', palceholder='', type='text', label='Address' },
    // { name='postcode', palceholder='', type='text', label='Project postcode' },
    // { name='email', palceholder='', type='email', label='Email' },
    // { name='phone', palceholder='', type='number', label='Phone' },
]
type Props = {}

const Form = (props: Props) => {

    const [selectedOption, setSelectedOption] = useState(null);
    const [groundfloorselectedOption, setgroundfloorselectedOption] = useState(null);
    const [projectDetails, setPRojectDetails] = useState<any>({})
    const [err,setErr] = useState('')
    const [isLoading,setIsloading]  = useState(false)
    const form = useRef();

    const sendEmail = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        setIsloading(true)
      
            // if(!e.target[0].value || !e.target[1].value || !e.target[2].value || !e.target[3].value || !e.target[4].value  ){
                
            //     setErr('Please fill all  required fields.')
            //     setTimeout(()=>setErr(''),2000)

            //     return;

            // }
    
        emailjs
          .sendForm( 'service_lbvt72k', 'template_i1bu4iz', form.current, {
            publicKey:  'YvcL1-VJjm_J4uKFv',
          })
          .then(
            () => {
        setIsloading(false);
        console.log('SUCCESS!');setErr('Form sumbitted successfully'); setTimeout(()=>setErr(''),2000);e.target.reset(); 

            },
            (error) => {
            setIsloading(false)
              console.log('FAILED...', );setErr('Form submission failed'); setTimeout(()=>setErr(''),2000); 

            },
          );
      };

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
        const value = event.target.value
        const name = event.target.name
        projectDetails[name] = value
        const data = {...projectDetails}
        setPRojectDetails(data)
    };

    const handleOptionChange2 = (event) => {
        setgroundfloorselectedOption(event.target.value);
    };


    // console.log('details',projectDetails)

  return (
    <>
    <div className={`${style.form_container}`}>
        <h1>
            PEARL ENGINEERS, PLANNERS & PROJECT MANAGERS
        </h1>
        <div className={`${style.form_div}`}>
            <form ref={form} onSubmit={sendEmail}>
                <div className='mb-5'>
                    <h3>What sort of property is this?</h3>
                    <fieldset className={`${style.cards_grid_5}`} role="radiogroup" >
                        {
                            cards1.map(
                                (val, key) => {
                                    return (
                                        <>
                                            <label key={val.value}>
                                                <input
                                                    className={`${style.cards_input}`}
                                                    type="radio"
                                                    value={val.value}
                                                    checked={projectDetails.property_type === val.value}
                                                    onChange={handleOptionChange}
                                                    name='property_type'
                                                />
                                                <div className={projectDetails.property_type === val.value ? `${style.cards} ${style.card_selected}`: `${style.cards}`}>
                                                    <div className={`${style.cards_details}`}>
                                                        <img src={val.image} />
                                                        <span>
                                                            {val.label}
                                                        </span>
                                                    </div>
                                                </div>
                                            </label>
                                        </>
                                    )
                                }
                            )
                        }

                    </fieldset>
                </div>

                <div className='mb-5'>
                    <h3>And which bit do you want to extend?</h3>
                    <fieldset className={`${style.cards_grid_4}`} role="radiogroup" >
                        {
                            cards2.map(
                                (val, key) => {
                                    return (
                                        <>
                                            <label key={val.value}>
                                                <input
                                                    className={`${style.cards_input}`}
                                                    type="radio"
                                                    value={val.value}
                                                    checked={projectDetails.property_extension === val.value}
                                                    onChange={handleOptionChange}
                                                    name='property_extension'
                                                />
                                                <div className={projectDetails.property_extension === val.value ? `${style.cards} ${style.card_selected}`: `${style.cards}`}>
                                                    <div className={`${style.cards_details}`}>
                                                        <img src={val.image} />
                                                        <span>
                                                            {val.label}
                                                        </span>
                                                    </div>
                                                </div>
                                            </label>
                                        </>
                                    )
                                }
                            )
                        }

                    </fieldset>
                </div>

                {
                    selectedOption === 'groundfloor'
                        ?
                        <div className='mb-5'>
                            <h3>Ground Floor</h3>
                            <fieldset className={`${style.cards_grid_5}`} role="radiogroup" >
                                {
                                    groundfloor.map(
                                        (val, key) => {
                                            return (
                                                <>
                                                    <label key={val.value}>
                                                        <input
                                                            className={`${style.cards_input}`}
                                                            type="radio"
                                                            value={val.value}
                                                            checked={projectDetails.property_extension_type === val.value}
                                                            onChange={handleOptionChange2}
                                                            name='property_extension_type'
                                                        />
                                                        <div className={projectDetails.property_extension_type === val.value ? `${style.cards} ${style.card_selected}`: `${style.cards}`}>
                                                            <div className={`${style.cards_details}`}>
                                                                <img src={val.image} />
                                                                <span>
                                                                    {val.label}
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </label>
                                                </>
                                            )
                                        }
                                    )
                                }

                            </fieldset>
                        </div>
                        : selectedOption === 'loft'
                            ?
                            <div className='mb-5'>
                                <h3>Loft</h3>
                                <fieldset className={`${style.cards_grid_5}`} role="radiogroup" >
                                    {
                                        loft.map(
                                            (val, key) => {
                                                return (
                                                    <>
                                                        <label key={val.value}>
                                                            <input
                                                                className={`${style.cards_input}`}
                                                                type="radio"
                                                                value={val.value}
                                                                checked={projectDetails.property_extension_type === val.value}
                                                                onChange={handleOptionChange}
                                                                name='property_extension_type'
                                                            />
                                                            <div className={projectDetails.property_extension_type === val.value ? `${style.cards} ${style.card_selected}`: `${style.cards}`}>
                                                                <div className={`${style.cards_details}`}>
                                                                    <img src={val.image} />
                                                                    <span>
                                                                        {val.label}
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </label>
                                                    </>
                                                )
                                            }
                                        )
                                    }

                                </fieldset>
                            </div>
                            : selectedOption === 'firstfloor'
                                ?
                                <div className='mb-5'>
                                    <h3>First Floor</h3>
                                    <fieldset className={`${style.cards_grid_5}`} role="radiogroup" >
                                        {
                                            firstfloor.map(
                                                (val, key) => {
                                                    return (
                                                        <>
                                                            <label key={val.value}>
                                                                <input
                                                                    className={`${style.cards_input}`}
                                                                    type="radio"
                                                                    value={val.value}
                                                                    checked={projectDetails.property_extension_type === val.value}
                                                                    onChange={handleOptionChange}
                                                                    name='property_extension_type'
                                                                />
                                                                <div className={projectDetails.property_extension_type === val.value ? `${style.cards} ${style.card_selected}`: `${style.cards}`}>
                                                                    <div className={`${style.cards_details}`}>
                                                                        <img src={val.image} />
                                                                        <span>
                                                                            {val.label}
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </label>
                                                        </>
                                                    )
                                                }
                                            )
                                        }

                                    </fieldset>
                                </div>
                                : selectedOption === 'other'
                                    ?
                                    <div className='mb-5'>
                                        <h3>Other</h3>
                                        <fieldset className={`${style.cards_grid_4}`} role="radiogroup" >
                                            {
                                                other.map(
                                                    (val, key) => {
                                                        return (
                                                            <>
                                                                <label key={val.value}>
                                                                    <input
                                                                        className={`${style.cards_input}`}
                                                                        type="radio"
                                                                        value={val.value}
                                                                        checked={projectDetails.property_extension_type === val.value}
                                                                        onChange={handleOptionChange}
                                                                        name='property_extension_type'
                                                                    />
                                                                    <div className={projectDetails.property_extension_type === val.value ? `${style.cards} ${style.card_selected}`: `${style.cards}`}>
                                                                        <div className={`${style.cards_details}`}>
                                                                            <img src={val.image} />
                                                                            <span>
                                                                                {val.label}
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </label>
                                                            </>
                                                        )
                                                    }
                                                )
                                            }

                                        </fieldset>
                                    </div>
                                    : null
                }

                <div className='mb-5'>
                    <h3>How many bedrooms does this property have?</h3>
                    <p>This will give us an idea of the property's size</p>
                    <fieldset className={`${style.cards_grid_5}`} role="radiogroup" >
                        {
                            cards3.map(
                                (val, key) => {
                                    return (
                                        <>
                                            <label key={val.value}>
                                                <input
                                                    className={`${style.cards_input}`}
                                                    type="radio"
                                                    value={val.value}
                                                    checked={projectDetails.property_bed_room === val.value}
                                                    onChange={handleOptionChange}
                                                    name='property_bed_room'
                                                />
                                                <div className={projectDetails.property_bed_room === val.value ? `${style.cards} ${style.card_selected} ${style.height}`: `${style.cards} ${style.height}`}>
                                                    <div className={`${style.cards_details}`}>
                                                        <span>
                                                            {val.label}
                                                        </span>
                                                    </div>
                                                </div>
                                            </label>
                                        </>
                                    )
                                }
                            )
                        }

                    </fieldset>
                </div>

                <div className='mb-5'>
                    <h3>When are you hoping to start the design process?</h3>
                    <fieldset className={`${style.cards_grid_6}`} role="radiogroup" >
                        {
                            cards4.map(
                                (val, key) => {
                                    return (
                                        <>
                                            <label key={val.value}>
                                                <input
                                                    className={`${style.cards_input}`}
                                                    type="radio"
                                                    value={val.value}
                                                    checked={projectDetails.property_start_time === val.value}
                                                    onChange={handleOptionChange}
                                                    name='property_start_time'
                                                />
                                                <div className={projectDetails.property_start_time === val.value ? `${style.cards} ${style.card_selected} ${style.height}`: `${style.cards} ${style.height}`}>
                                                    <div className={`${style.cards_details}`}>
                                                        <span>
                                                            {val.label}
                                                        </span>
                                                    </div>
                                                </div>
                                            </label>
                                        </>
                                    )
                                }
                            )
                        }

                    </fieldset>
                </div>

                <div className='mb-5'>
                    <h3>Are you interested in any of these services?</h3>
                    <fieldset className={`${style.cards_grid}`} role="radiogroup" >
                        {
                            cards5.map(
                                (val, key) => {
                                    return (
                                        <>
                                            <label key={val.value}>
                                                <input
                                                    className={`${style.cards_input}`}
                                                    type="radio"
                                                    value={val.value}
                                                    checked={projectDetails.property_services === val.value}
                                                    onChange={handleOptionChange}
                                                    name='property_services'
                                                />
                                                <div className={projectDetails.property_services === val.value ? `${style.cards} ${style.card_selected} ${style.height}`: `${style.cards} ${style.height}`}>
                                                    <div className={`${style.cards_details}`}>
                                                        <span>
                                                            {val.label}
                                                        </span>
                                                    </div>
                                                </div>
                                            </label>
                                        </>
                                    )
                                }
                            )
                        }

                    </fieldset>
                </div>

                {
                    selectedOption === 'helpfindingotherprofessionals'
                        ?
                        <div className='mb-5'>
                            <p>What professionals are you looking for?</p>
                            <fieldset className={`${style.cards_grid}`} role="radiogroup" >
                                {
                                    cards6.map(
                                        (val, key) => {
                                            return (
                                                <>
                                                    <label key={val.value}>
                                                        <input
                                                            className={`${style.cards_input}`}
                                                            type="radio"
                                                            value={val.value}
                                                            checked={projectDetails.property_other_services === val.value}
                                                            onChange={handleOptionChange}
                                                            name='property_other_services'
                                                        />
                                                        <div className={projectDetails.property_other_services === val.value ? `${style.cards} ${style.card_selected} ${style.height}`: `${style.cards} ${style.height}`}>
                                                            <div className={`${style.cards_details}`}>
                                                                <span>
                                                                    {val.label}
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </label>
                                                </>
                                            )
                                        }
                                    )
                                }

                            </fieldset>
                        </div>
                        :
                        null
                }



                <hr />

                <div className='my-5'>
                    <h3>A few details from you, please...</h3>
                    <fieldset className={`${style.cards_grid} mb-3`} role="radiogroup" >
                        <div className="mb-2">
                            <label className="mb-2">First Name<sup>*</sup></label>
                            <input
                                className={`${style.cards_input} form-control `}
                                type='text'
                                placeholder="John"
                                name="firstName"
                                required
                                onChange={handleOptionChange}
                            />
                        </div>
                        <div className="mb-2">
                            <label className="mb-2">Last Name<sup>*</sup></label>
                            <input
                                className={`${style.cards_input} form-control `}
                                type='text'
                                placeholder="Clarck"
                                name="lastName"
                                required
                                onChange={handleOptionChange}
                            />
                        </div>
                        <div className="mb-2">
                            <label className="mb-2">Address<sup>*</sup></label>
                            <input
                                className={`${style.cards_input} form-control `}
                                type='text'
                                placeholder="Holding Back Extension Ave."
                                name="address"
                                required
                                onChange={handleOptionChange}
                            />
                        </div>
                        <div className="mb-2">
                            <label className="mb-2">Postcode<sup>*</sup></label>
                            <input
                                className={`${style.cards_input} form-control `}
                                type='text'
                                placeholder="SW1A 2AB"
                                name="postcode"
                                required
                                onChange={handleOptionChange}
                            />
                        </div>
                        <div className="mb-2">
                            <label className="mb-2">Email<sup>*</sup></label>
                            <input
                                className={`${style.cards_input} form-control `}
                                type='email'
                                placeholder="johnclarck@gmail.com"
                                name="email"
                                required
                                onChange={handleOptionChange}
                            />
                        </div>
                        <div className="mb-2">
                            <label className="mb-2">Phone<sup>*</sup></label>
                            <input
                                className={`${style.cards_input} form-control `}
                                type='number'
                                placeholder="0781234567"
                                name="phone"
                                required
                                onChange={handleOptionChange}
                            />
                        </div>

                        <div className="mb-2">
                            <label className="mb-2">Where did you hear about us?<sup>*</sup></label>
                            <select className='form-control' name='recommanded_by'  onChange={handleOptionChange}>
                                <option value="">None selected</option>
                                <option value="houzz">Houzz</option>
                                <option value="google">Google</option>
                                <option value="facebookinstagram">Facebook / Instagram</option>
                                <option value="recommended">Recommended by a friend / colleague</option>
                                <option value="press">Press</option>
                                <option value="radio">Radio</option>
                                <option value="magazine">Magazine</option>
                                <option value="ITV">ITV - Television Ad</option>
                                <option value="blog">Blog</option>
                                <option value="pinterest">Pinterest</option>
                                <option value="linkedIn">LinkedIn</option>
                                <option value="tradeshow">Trade show</option>
                                <option value="newsletter">Newsletter - Muddy Trowel</option>
                                <option value="advertising">Advertising Board</option>
                            </select>
                        </div>
                    </fieldset>
                    <div className="mb-2">
                        <input type="checkbox" className='mr-2' name="" value="" />
                        <label className='ms-1'>I accept the terms and conditions</label>
                    </div>
                    <div className="mb-2">
                        <input type="checkbox" className='mr-2' name="" value="" />
                        <label className='ml-2 ms-2'>Keep me updated on PEPP news, events and offers.</label>
                    </div>
                </div>

                <div className={`${style.form_button_div}`}>
                    <button className={`${style.form_button} btn`} disabled={isLoading}>
                        {isLoading?<span><CircularProgress size={20} color='inherit' /></span>:<span>Submit</span>}
                    </button>
                </div>
                <p className='text-center mt-2 h4'>{err}</p>
            </form>
        </div>
    </div>
</>
  )
}

export default Form