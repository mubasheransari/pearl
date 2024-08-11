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
    { image: 'https://img.icons8.com/ios/50/country-house.png', value: "other", label: 'Other' },
]

const loft = [
    { image: 'https://img.icons8.com/ios/50/country-house.png', value: "maindormer", label: 'Main Dormer' },
    { image: 'https://img.icons8.com/ios/50/country-house.png', value: "outriggerdormer", label: 'Outrigger Dormer' },
    { image: 'https://img.icons8.com/ios/50/country-house.png', value: "hiptogablewithnodormer", label: 'Hip To Gable With No Dormer' },
    { image: 'https://img.icons8.com/ios/50/country-house.png', value: "hiptogablewithmaindormer", label: 'Hip To Gable With Main Dormer' },
    { image: 'https://img.icons8.com/ios/50/country-house.png', value: "Lshapeddormer", label: 'L Shaped Dormer' },
    { image: 'https://img.icons8.com/ios/50/country-house.png', value: "other", label: 'Other' },
]

const firstfloor = [
    { image: 'https://img.icons8.com/ios/50/country-house.png', value: "ffside", label: 'Side' },
    { image: 'https://img.icons8.com/ios/50/country-house.png', value: "ffsideandrear", label: 'Side And Rear' },
    { image: 'https://img.icons8.com/ios/50/country-house.png', value: "ffrear", label: 'Rear' },
    { image: 'https://img.icons8.com/ios/50/country-house.png', value: "rearoveroutrigger", label: 'Rear Over Outrigger' },
    { image: 'https://img.icons8.com/ios/50/country-house.png', value: "rearovergroundfloor", label: 'Rear Over Ground Floor' },
    { image: 'https://img.icons8.com/ios/50/country-house.png', value: "other", label: 'Other' },
]

const other = [
    { image: 'https://img.icons8.com/ios/50/country-house.png', value: "gardenannex", label: 'Garden - Annex' },
    { image: 'https://img.icons8.com/ios/50/country-house.png', value: "garageconversion", label: 'Garage - Conversion' },
    { image: 'https://img.icons8.com/ios/50/country-house.png', value: "twostoreyside", label: 'Two Storey - Side' },
    { image: 'https://img.icons8.com/ios/50/country-house.png', value: "twostoreyrear", label: 'Two Storey - Rear' },
    { image: 'https://img.icons8.com/ios/50/country-house.png', value: "other", label: 'Other' },
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
    { value: "architectural_drawings", label: 'Architectural drawings' },
    { value: "design_and_planning_advice", label: 'Design and planning advice' },
    { value: "help_with_financing_my_build", label: 'Help with financing my build' },
    { value: "help_finding_a_builder", label: 'Help finding a builder' },
    { value: "help_finding_other_professionals", label: 'Help finding other professionals' },
]

const cards6 = [
    { value: "structural_engineer", label: 'Structural engineer' },
    { value: "partywall_surveyor", label: 'Party wall surveyor' },
    { value: "approved_inspector", label: 'Approved inspector' },
    { value: "other_professionals", label: 'Other professionals' },
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

const DataJson = {
    firstName:'',
    lastName:'',
    email:'',
    address:'',
    phone:'',
    postcode:'',
    recommended_by:'',
    property_type:'',
    property_extension:{
        is_selected:false,
        groundfloor:{
            selected:false,
            rear:false,
            side_infill:false,
            side:false,
            side_and_rear:false,
            wrap_around:false,
            other:''
        },
        loft:{
            selected:false,
            main_dormer:false,
            outrigger_dormer:false,
            hip_to_gable__with_no_dormer:false,
            hip_to_gable__with_main_dormer:false,
            l_shape_dormer:false,
            other:''
        },
        firstfloor:{
            selected:false,
            side:false,
            side_and_rear:false,
            rear:false,
            rear_over_outrigger:false,
            rear_over_ground_floor:false,
            other:''
        },
        other:{
            selected:false,
            garden_annex:false,
            garage_conversion:false,
            two_story_side:false,
            two_story_rear:false,
            other:''
        },
        
       

    },
    property_bed_room:'',
    property_start_time:'',
    property_services:{
        architectural_drawings:false,
        design_and_planning_advice:false,
        help_with_financing_my_build:false,
        help_finding_builder:false,
        help_finding_other_professionals:{
            selected:false,
            structural_engineer:false,
            partywall_surveyor:false,
            approved_inspector:false,
            other_professionals:false
        }

    }
}

const Form = (props: Props) => {

    const [selectedOption, setSelectedOption] = useState(null);
    const [groundfloorselectedOption, setgroundfloorselectedOption] = useState(null);
    const [projectDetails, setPRojectDetails] = useState<any>({})
    const [err,setErr] = useState('')
    const [isLoading,setIsloading]  = useState(false)
    const [projectJson,setProjectJson] = useState(DataJson)
    const form = useRef();

    const sendEmail = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        setIsloading(true)
        console.log('detail',projectDetails)
      
        // emailjs
        //   .sendForm( 'service_lbvt72k', 'template_i1bu4iz', form.current, {
        //     publicKey:  'YvcL1-VJjm_J4uKFv',
        //   })
        //   .then(
        //     () => {
        // setIsloading(false);
        // console.log('SUCCESS!');setErr('Form sumbitted successfully'); setTimeout(()=>setErr(''),2000);e.target.reset(); 

        //     },
        //     (error) => {
        //     setIsloading(false)
        //       console.log('FAILED...', );setErr('Form submission failed'); setTimeout(()=>setErr(''),2000); 

        //     },
        //   );
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

    const updateData = (e:any)=>{
        console.log('vall',e.target)
        if(e.target.name === "property_type"){
            const temp_data = {...projectJson}
            temp_data.property_type = e.target.value
            setProjectJson(temp_data)
        }
        if(e.target.name === "property_extension"){
            const temp_data = {...projectJson}
            temp_data.property_extension[e.target.value].selected = e.target.checked
            setProjectJson(temp_data)
            setSelectedOption(e.target.value);

        }
        if(e.target.name === "property_extension_type"){
            const temp_data = {...projectJson}
            temp_data.property_extension[selectedOption][e.target.value] = e.target.checked
            setProjectJson(temp_data)

        }
        if(e.target.name === 'property_bed_room'){
            const temp_data = {...projectJson}
            temp_data.property_bed_room = e.target.value
            setProjectJson(temp_data)

        }
        if(e.target.name === 'property_start_time'){
            const temp_data = {...projectJson}
            temp_data.property_start_time = e.target.value
            setProjectJson(temp_data)
        }
        if(e.target.name === "property_services"){
            const temp_data = {...projectJson}
            if(e.target.value ==='help_finding_other_professionals'){
                temp_data.property_services.help_finding_other_professionals.selected = e.target.checked
                setSelectedOption('help_finding_other_professionals')
                setProjectJson(temp_data)


            }else{
                temp_data.property_services[e.target.value] = e.target.checked
                setProjectJson(temp_data)
            }
            
        }

        if(e.target.name === 'property_other_services'){
            const temp_data = {...projectJson}
            temp_data.property_services.help_finding_other_professionals[e.target.value] = e.target.checked
            setProjectJson(temp_data)

        }
    }


    // console.log('details',projectDetails)
    console.log('json data', projectJson)

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
                                                    // checked={projectDetails.property_type === val.value}
                                                    checked={projectJson.property_type == val.value}
                                                    // onChange={handleOptionChange}
                                                    onChange={(e)=>updateData(e)}
                                                    name='property_type'
                                                />
                                                <div className={projectJson.property_type === val.value ? `${style.cards} ${style.card_selected}`: `${style.cards}`}>
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
                    <h3>Where do you consider taking up construction activities ?</h3>
                    <fieldset className={`${style.cards_grid_4}`} role="radiogroup" >
                        {
                            cards2.map(
                                (val, key) => {
                                    return (
                                        <>
                                            <label key={val.value}>
                                                <input
                                                    className={`${style.cards_input}`}
                                                    type="checkbox"
                                                    value={val.value}
                                                    // checked={projectDetails.property_extension === val.value}
                                                    checked={projectJson.property_extension[val.value].selected}
                                                    // onChange={handleOptionChange}
                                                    onChange={(e)=>updateData(e)}
                                                    name='property_extension'
                                                />
                                                <div className={projectJson.property_extension[val.value].selected ? `${style.cards} ${style.card_selected}`: `${style.cards}`}>
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
                    selectedOption === 'groundfloor' && projectJson.property_extension.groundfloor.selected
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
                                                            type="checkbox"
                                                            value={val.value}
                                                            // checked={projectDetails.property_extension_type === val.value}
                                                            checked={projectJson.property_extension.groundfloor[val.value]}
                                                            // onChange={handleOptionChange2}
                                                            onChange={(e)=>updateData(e)}
                                                            name='property_extension_type'
                                                        />
                                                        <div className={projectJson.property_extension.groundfloor[val.value] ? `${style.cards} ${style.card_selected}`: `${style.cards}`}>
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
                        : selectedOption === 'loft' && projectJson.property_extension.loft.selected
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
                                                                type="checkbox"
                                                                value={val.value}
                                                                // checked={projectDetails.property_extension_type === val.value}
                                                                checked={projectJson.property_extension.loft[val.value]}
                                                                onChange={(e)=>updateData(e)}
                                                                name='property_extension_type'
                                                            />
                                                            <div className={projectJson.property_extension.loft[val.value] ? `${style.cards} ${style.card_selected}`: `${style.cards}`}>
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
                            : selectedOption === 'firstfloor' && projectJson.property_extension.firstfloor.selected
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
                                                                    type="checkbox"
                                                                    value={val.value}
                                                                    checked={projectJson.property_extension.firstfloor[val.value]}
                                                                    onChange={(e)=>updateData(e)}
                                                                    // checked={projectDetails.property_extension_type === val.value}
                                                                    // onChange={handleOptionChange}
                                                                    name='property_extension_type'
                                                                />
                                                                <div className={projectJson.property_extension.firstfloor[val.value] ? `${style.cards} ${style.card_selected}`: `${style.cards}`}>
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
                                                    checked={projectJson.property_bed_room === val.value}
                                                    // onChange={handleOptionChange}
                                                    onChange={(e)=>updateData(e)}
                                                    name='property_bed_room'
                                                />
                                                <div className={projectJson.property_bed_room === val.value ? `${style.cards} ${style.card_selected} ${style.height}`: `${style.cards} ${style.height}`}>
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
                                                    // checked={projectDetails.property_start_time === val.value}
                                                    // onChange={handleOptionChange}
                                                    checked={projectJson.property_start_time === val.value}
                                                    onChange={(e)=>{updateData(e)}}
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
                                                    type="checkbox"
                                                    value={val.value}
                                                    // checked={projectDetails.property_services === val.value}
                                                    // onChange={handleOptionChange}
                                                    checked={val.value == 'help_finding_other_professionals' ? projectJson.property_services[val.value].selected:projectJson.property_services[val.value]}
                                                    onChange={(e)=>updateData(e)}
                                                    name='property_services'
                                                />
                                                <div className={
                                                    val.value == 'help_finding_other_professionals' ? projectJson.property_services[val.value].selected?`${style.cards} ${style.card_selected} ${style.height}`:`${style.cards} ${style.height}` :projectJson.property_services[val.value] ? `${style.cards} ${style.card_selected} ${style.height}`: `${style.cards} ${style.height}`}>
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
                    selectedOption === 'help_finding_other_professionals' && projectJson.property_services.help_finding_other_professionals.selected
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
                                                            type="checkbox"
                                                            value={val.value}
                                                            checked={projectJson.property_services.help_finding_other_professionals[val.value]}
                                                            onChange={(e)=>updateData(e)}
                                                            name='property_other_services'
                                                        />
                                                        <div className={projectJson.property_services.help_finding_other_professionals[val.value] ? `${style.cards} ${style.card_selected} ${style.height}`: `${style.cards} ${style.height}`}>
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
                    {/* <div className="mb-2">
                        <input type="checkbox" className='mr-2' name="" value="" />
                        <label className='ms-1'>I accept the terms and conditions</label>
                    </div>
                    <div className="mb-2">
                        <input type="checkbox" className='mr-2' name="" value="" />
                        <label className='ml-2 ms-2'>Keep me updated on PEPP news, events and offers.</label>
                    </div> */}
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