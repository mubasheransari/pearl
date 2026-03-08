// 'use client'
// import React, { useRef, useState } from 'react'
// import style from './style.module.scss'
// import emailjs from '@emailjs/browser';
// import CircularProgress from '@mui/material/CircularProgress';
// //    <source src='/pepp-video.mp4' type="video/mp4" />

// const cards1 = [
//     { image: '/detached.svg', value: "detached", label: 'Detached' },
//     { image: '/semi-detach.png', value: "semidetached", label: 'Semi Detached' },
//     { image: '/terrace.png', value: "terrace", label: 'Terrace' },
//     { image: '/flat-icon.png', value: "flat", label: 'Flat' },
//     { image: '/banglow.png', value: "bungalow", label: 'Bungalow' },
// ]

// const cards2 = [
//     { image: '/ground-floor.png', value: "groundfloor", label: 'Ground Floor' },
//     { image: '/loft-icon.png', value: "loft", label: 'Loft' },
//     { image: '/first-floor-icon.png', value: "firstfloor", label: 'First Floor' },
//     { image: '/others.png', value: "other", label: 'Other' },
// ]

// const groundfloor = [
//     { image: 'https://img.icons8.com/ios/50/country-house.png', value: "rear", label: 'Rear' },
//     { image: 'https://img.icons8.com/ios/50/country-house.png', value: "sideinfill", label: 'Side Infill' },
//     { image: 'https://img.icons8.com/ios/50/country-house.png', value: "side", label: 'Side' },
//     { image: 'https://img.icons8.com/ios/50/country-house.png', value: "sideandrear", label: 'Side And Rear' },
//     { image: 'https://img.icons8.com/ios/50/country-house.png', value: "wraparound", label: 'Wraparound' },
//     { image: 'https://img.icons8.com/ios/50/country-house.png', value: "other", label: 'Other' },
// ]

// const loft = [
//     { image: 'https://img.icons8.com/ios/50/country-house.png', value: "maindormer", label: 'Main Dormer' },
//     { image: 'https://img.icons8.com/ios/50/country-house.png', value: "outriggerdormer", label: 'Outrigger Dormer' },
//     { image: 'https://img.icons8.com/ios/50/country-house.png', value: "hiptogablewithnodormer", label: 'Hip To Gable With No Dormer' },
//     { image: 'https://img.icons8.com/ios/50/country-house.png', value: "hiptogablewithmaindormer", label: 'Hip To Gable With Main Dormer' },
//     { image: 'https://img.icons8.com/ios/50/country-house.png', value: "Lshapeddormer", label: 'L Shaped Dormer' },
//     { image: 'https://img.icons8.com/ios/50/country-house.png', value: "other", label: 'Other' },
// ]

// const firstfloor = [
//     { image: 'https://img.icons8.com/ios/50/country-house.png', value: "ffside", label: 'Side' },
//     { image: 'https://img.icons8.com/ios/50/country-house.png', value: "ffsideandrear", label: 'Side And Rear' },
//     { image: 'https://img.icons8.com/ios/50/country-house.png', value: "ffrear", label: 'Rear' },
//     { image: 'https://img.icons8.com/ios/50/country-house.png', value: "rearoveroutrigger", label: 'Rear Over Outrigger' },
//     { image: 'https://img.icons8.com/ios/50/country-house.png', value: "rearovergroundfloor", label: 'Rear Over Ground Floor' },
//     { image: 'https://img.icons8.com/ios/50/country-house.png', value: "other", label: 'Other' },
// ]

// const other = [
//     { image: '/garden-icon.png', value: "gardenannex", label: 'Garden - Annex' },
//     { image: '/garage-conversation.png', value: "garageconversion", label: 'Garage - Conversion' },
//     { image: '/two-story.png', value: "twostoreyside", label: 'Two Storey - Side' },
//     { image: '/two-story-rear.png', value: "twostoreyrear", label: 'Two Storey - Rear' },
//     { image: '/others.png', value: "other", label: 'Other' },
// ]

// const cards3 = [
//     { value: "option1", label: '1' },
//     { value: "option2", label: '2' },
//     { value: "option3", label: '3' },
//     { value: "option4", label: '4' },
//     { value: "option5", label: '5+' },
// ]

// const cards4 = [
//     { value: "ASAP", label: 'ASAP' },
//     { value: "3months", label: '3 Months' },
//     { value: "6months", label: '6 Months' },
//     { value: "12months", label: '12 Months' },
//     { value: "18months", label: '18 Months +' },
//     { value: "imnotsure", label: 'Im not sure' },
// ]

// const cards5 = [
//     { value: "architectural_drawings", label: 'Architectural drawings' },
//     { value: "design_and_planning_advice", label: 'Design and planning advice' },
//     { value: "help_finding_a_builder", label: 'Help finding a builder' },
//     { value: "help_finding_other_professionals", label: 'Help finding other professionals' },
// ]

// const cards6 = [
//     { value: "structural_engineer", label: 'Structural engineer' },
//     { value: "partywall_surveyor", label: 'Party wall surveyor' },
//     { value: "approved_inspector", label: 'Approved inspector' },
//     { value: "other_professionals", label: 'Other professionals' },
// ]

// const cards7 = [
//     // { name='firstName', palceholder='', type='text', label='First name' },
//     // { name='lastName', palceholder='', type='text', label='Last name' },
//     // { name='address', palceholder='', type='text', label='Address' },
//     // { name='postcode', palceholder='', type='text', label='Project postcode' },
//     // { name='email', palceholder='', type='email', label='Email' },
//     // { name='phone', palceholder='', type='number', label='Phone' },
// ]
// type Props = {}

// const dataJson = {
//     firstName:'',
//     lastName:'',
//     email:'',
//     address:'',
//     phone:'',
//     postcode:'',
//     recommended_by:'',
//     property_type:'',
//     property_extension:{
//         is_selected:false,
//         groundfloor:{
//             selected:false,
//             rear:false,
//             side_infill:false,
//             side:false,
//             side_and_rear:false,
//             wrap_around:false,
//             other:{
//                 is_selected:false,
//                 value:''
//             }
//         },
//         loft:{
//             selected:false,
//             main_dormer:false,
//             outrigger_dormer:false,
//             hip_to_gable__with_no_dormer:false,
//             hip_to_gable__with_main_dormer:false,
//             l_shape_dormer:false,
//             other:{
//                 is_selected:false,
//                 value:''
//             }
//         },
//         firstfloor:{
//             selected:false,
//             side:false,
//             side_and_rear:false,
//             rear:false,
//             rear_over_outrigger:false,
//             rear_over_ground_floor:false,
//             other:{
//                 is_selected:false,
//                 value:''
//             }
//         },
//         other:{
//             selected:false,
//             garden_annex:false,
//             garage_conversion:false,
//             two_story_side:false,
//             two_story_rear:false,
//             other:{
//                 is_selected:false,
//                 value:''
//             }
//         },
        
       

//     },
//     property_bed_room:'',
//     property_start_time:'',
//     property_services:{
//         architectural_drawings:false,
//         design_and_planning_advice:false,
//         help_with_financing_my_build:false,
//         help_finding_builder:false,
//         help_finding_other_professionals:{
//             selected:false,
//             structural_engineer:false,
//             partywall_surveyor:false,
//             approved_inspector:false,
//             other_professionals:false
//         }

//     }
// }

// const Form = (props: Props) => {

//     const [selectedOption, setSelectedOption] = useState(null);
//     const [groundfloorselectedOption, setgroundfloorselectedOption] = useState(null);
//     const [projectDetails, setPRojectDetails] = useState<any>({})
//     const [err,setErr] = useState('')
//     const [isLoading,setIsloading]  = useState(false)
//     const [projectJson,setProjectJson] = useState(dataJson)
//     const form = useRef();

//     const sendEmail = (e: { preventDefault: () => void; }) => {
//         e.preventDefault();
//         setIsloading(true)
//         console.log('detail', projectJson)
      
//         emailjs
//           .sendForm( 'service_lbvt72k', 'template_i1bu4iz', form.current, {
//             publicKey:  'YvcL1-VJjm_J4uKFv',
//           })
//           .then(
//             () => {
//         setIsloading(false);
//         setProjectJson(dataJson)
//         console.log('SUCCESS!');setErr('Form Sumbitted Successfully'); setTimeout(()=>setErr(''),2000);e.target.reset(); 

//             },
//             (error) => {
//             setIsloading(false)
//               console.log('FAILED...', );setErr('Form submission failed'); setTimeout(()=>setErr(''),2000); 

//             },
//           );
//       };

//     const handleOptionChange = (event: { target: { value: any; name: any; }; }) => {
//         setSelectedOption(event.target.value);
//         const value = event.target.value
//         const name = event.target.name
//         projectJson[name] = value
//         // const data = {...projectDetails}
//         // setPRojectDetails(data)
//     };

//     const handleOptionChange2 = (event) => {
//         setgroundfloorselectedOption(event.target.value);
//     };

//     const updateData = (e: React.ChangeEvent<HTMLInputElement>)=>{
        
//         if(e.target.name === "property_type"){
//             const temp_data = {...projectJson}
//             temp_data.property_type = e.target.value
//             setProjectJson(temp_data)
//         }
//         if(e.target.name === "property_extension"){
//             const temp_data = {...projectJson}
//             temp_data.property_extension[e.target.value].selected = e.target.checked
//             setProjectJson(temp_data)
//             setSelectedOption(e.target.value);

//         }
//         if(e.target.name === "property_extension_type"){
//             if(e.target.value == 'other'){
//                 const temp_data = JSON.parse(JSON.stringify(projectJson))
//                 temp_data.property_extension[selectedOption][e.target.value].is_selected = e.target.checked
//                 setProjectJson(temp_data)

//             }else {
//                 const temp_data = {...projectJson}
//                 temp_data.property_extension[selectedOption][e.target.value] = e.target.checked
//                 setProjectJson(temp_data)
//             }
            

//         }
//         if(e.target.name === 'property_bed_room'){
//             const temp_data = {...projectJson}
//             temp_data.property_bed_room = e.target.value
//             setProjectJson(temp_data)

//         }
//         if(e.target.name === 'property_start_time'){
//             const temp_data = {...projectJson}
//             temp_data.property_start_time = e.target.value
//             setProjectJson(temp_data)
//         }
//         if(e.target.name === "property_services"){
//             const temp_data = {...projectJson}
//             if(e.target.value ==='help_finding_other_professionals'){
//                 temp_data.property_services.help_finding_other_professionals.selected = e.target.checked
//                 setSelectedOption('help_finding_other_professionals')
//                 setProjectJson(temp_data)


//             }else{
//                 temp_data.property_services[e.target.value] = e.target.checked
//                 setProjectJson(temp_data)
//             }
            
//         }

//         if(e.target.name === 'property_other_services'){
//             const temp_data = {...projectJson}
//             temp_data.property_services.help_finding_other_professionals[e.target.value] = e.target.checked
//             setProjectJson(temp_data)

//         }
//     }

//     const changePopertyExtensionVal =(e: React.ChangeEvent<HTMLInputElement>,type: string)=>{
//         const tempData  ={...projectJson}
       
//         tempData.property_extension[type].other.value = e.target.value
//         setProjectJson(tempData)
        
//     }


//     // console.log('details',projectDetails)
//     // console.log('json data', projectJson)

//   return (
//     <>
//     <div className={`${style.form_container}`}>
//         <h1>
//             PEARL ENGINEERS, PLANNERS & PROJECT MANAGERS
//         </h1>
//         <div className={`${style.form_div}`}>
//             <form ref={form} onSubmit={sendEmail}>
//                 <div className='mb-5'>
//                     <h3>What sort of property is this?</h3>
//                     <fieldset className={`${style.cards_grid_5}`} role="radiogroup" >
//                         {
//                             cards1.map(
//                                 (val, key) => {
//                                     return (
//                                         <>
//                                             <label key={val.value}>
//                                                 <input
//                                                     className={`${style.cards_input}`}
//                                                     type="radio"
//                                                     value={val.value}
//                                                     // checked={projectDetails.property_type === val.value}
//                                                     checked={projectJson.property_type == val.value}
//                                                     // onChange={handleOptionChange}
//                                                     onChange={(e)=>updateData(e)}
//                                                     name='property_type'
//                                                 />
//                                                 <div className={projectJson.property_type === val.value ? `${style.cards} ${style.card_selected}`: `${style.cards}`}>
//                                                     <div className={`${style.cards_details}`}>
//                                                         <img src={val.image} />
//                                                         <span>
//                                                             {val.label}
//                                                         </span>
//                                                     </div>
//                                                 </div>
//                                             </label>
//                                         </>
//                                     )
//                                 }
//                             )
//                         }

//                     </fieldset>
//                 </div>

//                 <div className='mb-5'>
//                     <h3>Where do you consider taking up construction activities ?</h3>
//                     <fieldset className={`${style.cards_grid_4}`} role="radiogroup" >
//                         {
//                             cards2.map(
//                                 (val, key) => {
//                                     return (
//                                         <>
//                                             <label key={val.value}>
//                                                 <input
//                                                     className={`${style.cards_input}`}
//                                                     type="checkbox"
//                                                     value={val.value}
//                                                     // checked={projectDetails.property_extension === val.value}
//                                                     checked={projectJson.property_extension[val.value].selected}
//                                                     // onChange={handleOptionChange}
//                                                     onChange={(e)=>updateData(e)}
//                                                     name='property_extension'
//                                                 />
//                                                 <div className={projectJson.property_extension[val.value].selected ? `${style.cards} ${style.card_selected}`: `${style.cards}`}>
//                                                     <div className={`${style.cards_details}`}>
//                                                         <img src={val.image} />
//                                                         <span>
//                                                             {val.label}
//                                                         </span>
//                                                     </div>
//                                                 </div>
//                                             </label>
//                                         </>
//                                     )
//                                 }
//                             )
//                         }

//                     </fieldset>
//                 </div>

//                 {
//                     selectedOption === 'groundfloor' && projectJson.property_extension.groundfloor.selected
//                         ?
//                         <div className='mb-5'>
//                             <h3>Ground Floor</h3>
//                             <fieldset className={`${style.cards_grid_5}`} role="radiogroup" >
//                                 {
//                                     groundfloor.map(
//                                         (val, key) => {
//                                             return (
//                                                 <>
//                                                     <label key={val.value}>
//                                                         <input
//                                                             className={`${style.cards_input}`}
//                                                             type="checkbox"
//                                                             value={val.value}
//                                                             // checked={projectDetails.property_extension_type === val.value}
//                                                             checked={val.value == 'other' ? projectJson.property_extension.groundfloor[val.value].is_selected :projectJson.property_extension.groundfloor[val.value]}
//                                                             // onChange={handleOptionChange2}
//                                                             onChange={(e)=>updateData(e)}
//                                                             name='property_extension_type'
//                                                         />
//                                                         <div className={
//                                                            val.value == 'other' ? projectJson.property_extension.groundfloor[val.value].is_selected ? `${style.cards} ${style.card_selected}`: `${style.cards}`:projectJson.property_extension.groundfloor[val.value] ? `${style.cards} ${style.card_selected}`: `${style.cards}`}>
//                                                             <div className={`${style.cards_details}`}>
//                                                                 <img src={val.image} />
//                                                                 <span>
//                                                                     {val.label}
//                                                                 </span>
//                                                             </div>
//                                                         </div>
//                                                     </label>
//                                                 </>
//                                             )
//                                         }
//                                     )
//                                 }

//                             </fieldset>
//                             {projectJson.property_extension.groundfloor.other.is_selected && <input className='mt-2 p-2' type='text' value={projectJson.property_extension.groundfloor.other.value} placeholder='type  here other option' onChange={(e)=>changePopertyExtensionVal(e,'groundfloor')} />}
//                         </div>
//                         : selectedOption === 'loft' && projectJson.property_extension.loft.selected
//                             ?
//                             <div className='mb-5'>
//                                 <h3>Loft</h3>
//                                 <fieldset className={`${style.cards_grid_5}`} role="radiogroup" >
//                                     {
//                                         loft.map(
//                                             (val, key) => {
//                                                 return (
//                                                     <>
//                                                         <label key={val.value}>
//                                                             <input
//                                                                 className={`${style.cards_input}`}
//                                                                 type="checkbox"
//                                                                 value={val.value}
//                                                                 checked={val.value == 'other' ? projectJson.property_extension.loft[val.value].is_selected :projectJson.property_extension.loft[val.value]}
//                                                                 onChange={(e)=>updateData(e)}
//                                                                 name='property_extension_type'
//                                                             />
//                                                             <div
//                                                              className={val.value == 'other' ? projectJson.property_extension.loft[val.value].is_selected ? `${style.cards} ${style.card_selected}`: `${style.cards}`:projectJson.property_extension.loft[val.value] ? `${style.cards} ${style.card_selected}`: `${style.cards}`} 
//                                                             >
//                                                                 <div className={`${style.cards_details}`}>
//                                                                     <img src={val.image} />
//                                                                     <span>
//                                                                         {val.label}
//                                                                     </span>
//                                                                 </div>
//                                                             </div>
//                                                         </label>
//                                                     </>
//                                                 )
//                                             }
//                                         )
//                                     }

//                                 </fieldset>
//                                 {projectJson.property_extension.loft.other.is_selected && <input value={projectJson.property_extension.loft.other.value} className='mt-2 p-2' type='text' placeholder='type  here other option' onChange={(e)=>changePopertyExtensionVal(e,'loft')} />}
                               
//                             </div>

//                             : selectedOption === 'firstfloor' && projectJson.property_extension.firstfloor.selected
//                                 ?
//                                 <div className='mb-5'>
//                                     <h3>First Floor</h3>
//                                     <fieldset className={`${style.cards_grid_5}`} role="radiogroup" >
//                                         {
//                                             firstfloor.map(
//                                                 (val, key) => {
//                                                     return (
//                                                         <>
//                                                             <label key={val.value}>
//                                                                 <input
//                                                                     className={`${style.cards_input}`}
//                                                                     type="checkbox"
//                                                                     value={val.value}
//                                                                     checked={val.value == 'other' ? projectJson.property_extension.firstfloor[val.value].is_selected :projectJson.property_extension.firstfloor[val.value]}
//                                                                     onChange={(e)=>updateData(e)}
//                                                                     name='property_extension_type'
//                                                                 />
//                                                                 <div 
//                                                                      className={val.value == 'other' ? projectJson.property_extension.firstfloor[val.value].is_selected ? `${style.cards} ${style.card_selected}`: `${style.cards}`:projectJson.property_extension.firstfloor[val.value] ? `${style.cards} ${style.card_selected}`: `${style.cards}`}>
//                                                                     <div className={`${style.cards_details}`}>
//                                                                         <img src={val.image} />
//                                                                         <span>
//                                                                             {val.label}
//                                                                         </span>
//                                                                     </div>
//                                                                 </div>
//                                                             </label>
//                                                         </>
//                                                     )
//                                                 }
//                                             )
//                                         }
//                                     </fieldset>
//                                     {projectJson.property_extension.firstfloor.other.is_selected && 
//                                     <input className='mt-2 p-2' value={projectJson.property_extension.firstfloor.other.value} type='text' placeholder='type  here other option' onChange={(e)=>changePopertyExtensionVal(e,'firstfloor')} />}
//                                 </div>
//                                 : selectedOption === 'other'
//                                     ?
//                                     <div className='mb-5'>
//                                         <h3>Other</h3>
//                                         <fieldset className={`${style.cards_grid_4}`} role="radiogroup" >
//                                             {
//                                                 other.map(
//                                                     (val, key) => {
//                                                         return (
//                                                             <>
//                                                                 <label key={val.value}>
//                                                                     <input
//                                                                         className={`${style.cards_input}`}
//                                                                         type="radio"
//                                                                         value={val.value}
//                                                                         checked={val.value == 'other' ? projectJson.property_extension.other[val.value].is_selected :projectJson.property_extension.other[val.value]}
//                                                                         // onChange={handleOptionChange}
//                                                                         onChange={(e)=>updateData(e)}
//                                                                         name='property_extension_type'
//                                                                     />
//                                                                     <div 
//                                                                         className={val.value == 'other' ? projectJson.property_extension.other[val.value].is_selected ? `${style.cards} ${style.card_selected}`: `${style.cards}`:projectJson.property_extension.other[val.value] ? `${style.cards} ${style.card_selected}`: `${style.cards}`}>
//                                                                         <div className={`${style.cards_details}`}>
//                                                                             <img src={val.image} />
//                                                                             <span>
//                                                                                 {val.label}
//                                                                             </span>
//                                                                         </div>
//                                                                     </div>
//                                                                 </label>
//                                                             </>
//                                                         )
//                                                     }
//                                                 )
//                                             }
//                                         </fieldset>
//                                          {projectJson.property_extension.other.other.is_selected && 
//                                          <input className='mt-2 p-2' value={projectJson.property_extension.other.other.value} type='text' placeholder='type  here other option' onChange={(e)=>changePopertyExtensionVal(e,'other')} />}
//                                     </div>
//                                     : null
//                 }

//                 <div className='mb-5'>
//                     <h3>How many bedrooms does this property have?</h3>
//                     <p>This will give us an idea of the property's size</p>
//                     <fieldset className={`${style.cards_grid_5}`} role="radiogroup" >
//                         {
//                             cards3.map(
//                                 (val, key) => {
//                                     return (
//                                         <>
//                                             <label key={val.value}>
//                                                 <input
//                                                     className={`${style.cards_input}`}
//                                                     type="radio"
//                                                     value={val.value}
//                                                     checked={projectJson.property_bed_room === val.value}
//                                                     // onChange={handleOptionChange}
//                                                     onChange={(e)=>updateData(e)}
//                                                     name='property_bed_room'
//                                                 />
//                                                 <div className={projectJson.property_bed_room === val.value ? `${style.cards} ${style.card_selected} ${style.height}`: `${style.cards} ${style.height}`}>
//                                                     <div className={`${style.cards_details}`}>
//                                                         <span>
//                                                             {val.label}
//                                                         </span>
//                                                     </div>
//                                                 </div>
//                                             </label>
//                                         </>
//                                     )
//                                 }
//                             )
//                         }

//                     </fieldset>
//                 </div>

//                 <div className='mb-5'>
//                     <h3>When are you hoping to start the design process?</h3>
//                     <fieldset className={`${style.cards_grid_6}`} role="radiogroup" >
//                         {
//                             cards4.map(
//                                 (val, key) => {
//                                     return (
//                                         <>
//                                             <label key={val.value}>
//                                                 <input
//                                                     className={`${style.cards_input}`}
//                                                     type="radio"
//                                                     value={val.value}
//                                                     // checked={projectDetails.property_start_time === val.value}
//                                                     // onChange={handleOptionChange}
//                                                     checked={projectJson.property_start_time === val.value}
//                                                     onChange={(e)=>{updateData(e)}}
//                                                     name='property_start_time'
//                                                 />
//                                                 <div className={projectDetails.property_start_time === val.value ? `${style.cards} ${style.card_selected} ${style.height}`: `${style.cards} ${style.height}`}>
//                                                     <div className={`${style.cards_details}`}>
//                                                         <span>
//                                                             {val.label}
//                                                         </span>
//                                                     </div>
//                                                 </div>
//                                             </label>
//                                         </>
//                                     )
//                                 }
//                             )
//                         }

//                     </fieldset>
//                 </div>

//                 <div className='mb-5'>
//                     <h3>Are you interested in any of these services?</h3>
//                     <fieldset className={`${style.cards_grid}`} role="radiogroup" >
//                         {
//                             cards5.map(
//                                 (val, key) => {
//                                     return (
//                                         <>
//                                             <label key={val.value}>
//                                                 <input
//                                                     className={`${style.cards_input}`}
//                                                     type="checkbox"
//                                                     value={val.value}
//                                                     // checked={projectDetails.property_services === val.value}
//                                                     // onChange={handleOptionChange}
//                                                     checked={val.value == 'help_finding_other_professionals' ? projectJson.property_services[val.value].selected:projectJson.property_services[val.value]}
//                                                     onChange={(e)=>updateData(e)}
//                                                     name='property_services'
//                                                 />
//                                                 <div className={
//                                                     val.value == 'help_finding_other_professionals' ? projectJson.property_services[val.value].selected?`${style.cards} ${style.card_selected} ${style.height}`:`${style.cards} ${style.height}` :projectJson.property_services[val.value] ? `${style.cards} ${style.card_selected} ${style.height}`: `${style.cards} ${style.height}`}>
//                                                     <div className={`${style.cards_details}`}>
//                                                         <span>
//                                                             {val.label}
//                                                         </span>
//                                                     </div>
//                                                 </div>
//                                             </label>
//                                         </>
//                                     )
//                                 }
//                             )
//                         }

//                     </fieldset>
//                 </div>

//                 {
//                     selectedOption === 'help_finding_other_professionals' && projectJson.property_services.help_finding_other_professionals.selected
//                         ?
//                         <div className='mb-5'>
//                             <p>What professionals are you looking for?</p>
//                             <fieldset className={`${style.cards_grid}`} role="radiogroup" >
//                                 {
//                                     cards6.map(
//                                         (val, key) => {
//                                             return (
//                                                 <>
//                                                     <label key={val.value}>
//                                                         <input
//                                                             className={`${style.cards_input}`}
//                                                             type="checkbox"
//                                                             value={val.value}
//                                                             checked={projectJson.property_services.help_finding_other_professionals[val.value]}
//                                                             onChange={(e)=>updateData(e)}
//                                                             name='property_other_services'
//                                                         />
//                                                         <div className={projectJson.property_services.help_finding_other_professionals[val.value] ? `${style.cards} ${style.card_selected} ${style.height}`: `${style.cards} ${style.height}`}>
//                                                             <div className={`${style.cards_details}`}>
//                                                                 <span>
//                                                                     {val.label}
//                                                                 </span>
//                                                             </div>
//                                                         </div>
//                                                     </label>
//                                                 </>
//                                             )
//                                         }
//                                     )
//                                 }

//                             </fieldset>
//                         </div>
//                         :
//                         null
//                 }



//                 <hr />

//                 <div className='my-5'>
//                     <h3>A few details from you, please...</h3>
//                     <fieldset className={`${style.cards_grid} mb-3`} role="radiogroup" >
//                         <div className="mb-2">
//                             <label className="mb-2">First Name<sup>*</sup></label>
//                             <input
//                                 className={`${style.cards_input} form-control `}
//                                 type='text'
//                                 placeholder="John"
//                                 name="firstName"
//                                 required
//                                 onChange={handleOptionChange}
//                             />
//                         </div>
//                         <div className="mb-2">
//                             <label className="mb-2">Last Name<sup>*</sup></label>
//                             <input
//                                 className={`${style.cards_input} form-control `}
//                                 type='text'
//                                 placeholder="Clarck"
//                                 name="lastName"
//                                 required
//                                 onChange={handleOptionChange}
//                             />
//                         </div>
//                         <div className="mb-2">
//                             <label className="mb-2">Address<sup>*</sup></label>
//                             <input
//                                 className={`${style.cards_input} form-control `}
//                                 type='text'
//                                 placeholder="Holding Back Extension Ave."
//                                 name="address"
//                                 required
//                                 onChange={handleOptionChange}
//                             />
//                         </div>
//                         <div className="mb-2">
//                             <label className="mb-2">Postcode<sup>*</sup></label>
//                             <input
//                                 className={`${style.cards_input} form-control `}
//                                 type='text'
//                                 placeholder="SW1A 2AB"
//                                 name="postcode"
//                                 required
//                                 onChange={handleOptionChange}
//                             />
//                         </div>
//                         <div className="mb-2">
//                             <label className="mb-2">Email<sup>*</sup></label>
//                             <input
//                                 className={`${style.cards_input} form-control `}
//                                 type='email'
//                                 placeholder="johnclarck@gmail.com"
//                                 name="email"
//                                 required
//                                 onChange={handleOptionChange}
//                             />
//                         </div>
//                         <div className="mb-2">
//                             <label className="mb-2">Phone<sup>*</sup></label>
//                             <input
//                                 className={`${style.cards_input} form-control `}
//                                 type='number'
//                                 placeholder="0781234567"
//                                 name="phone"
//                                 required
//                                 onChange={handleOptionChange}
//                             />
//                         </div>

//                         <div className="mb-2">
//                             <label className="mb-2">Where did you hear about us?<sup>*</sup></label>
//                             <select className='form-control' name='recommanded_by'  onChange={handleOptionChange}>
//                                 <option value="">None selected</option>
//                                 <option value="houzz">Houzz</option>
//                                 <option value="google">Google</option>
//                                 <option value="facebookinstagram">Facebook / Instagram</option>
//                                 <option value="recommended">Recommended by a friend / colleague</option>
//                                 <option value="press">Press</option>
//                                 <option value="radio">Radio</option>
//                                 <option value="magazine">Magazine</option>
//                                 <option value="ITV">ITV - Television Ad</option>
//                                 <option value="blog">Blog</option>
//                                 <option value="pinterest">Pinterest</option>
//                                 <option value="linkedIn">LinkedIn</option>
//                                 <option value="tradeshow">Trade show</option>
//                                 <option value="newsletter">Newsletter - Muddy Trowel</option>
//                                 <option value="advertising">Advertising Board</option>
//                             </select>
//                         </div>
//                     </fieldset>
//                     {/* <div className="mb-2">
//                         <input type="checkbox" className='mr-2' name="" value="" />
//                         <label className='ms-1'>I accept the terms and conditions</label>
//                     </div>
//                     <div className="mb-2">
//                         <input type="checkbox" className='mr-2' name="" value="" />
//                         <label className='ml-2 ms-2'>Keep me updated on PEPP news, events and offers.</label>
//                     </div> */}
//                 </div>

//                 <div className={`${style.form_button_div}`}>
//                     <button className={`${style.form_button} btn`} disabled={isLoading}>
//                         {isLoading?<span><CircularProgress size={20} color='inherit' /></span>:<span>Submit</span>}
//                     </button>
//                 </div>
//                 <p className='text-center mt-2 h4'>{err}</p>
//             </form>
//         </div>
//     </div>
// </>
//   )
// }

// export default Form


// 'use client'
// import React, { useRef, useState } from 'react'
// import style from './style.module.scss'
// import emailjs from '@emailjs/browser';
// import CircularProgress from '@mui/material/CircularProgress';

// const cards1 = [
//     { image: '/detached.svg', value: "detached", label: 'Detached' },
//     { image: '/semi-detach.png', value: "semidetached", label: 'Semi Detached' },
//     { image: '/terrace.png', value: "terrace", label: 'Terrace' },
//     { image: '/flat-icon.png', value: "flat", label: 'Flat' },
//     { image: '/banglow.png', value: "bungalow", label: 'Bungalow' },
// ]

// const cards2 = [
//     { image: '/ground-floor.png', value: "groundfloor", label: 'Ground Floor' },
//     { image: '/loft-icon.png', value: "loft", label: 'Loft' },
//     { image: '/first-floor-icon.png', value: "firstfloor", label: 'First Floor' },
//     { image: '/others.png', value: "other", label: 'Other' },
// ]

// const groundfloor = [
//     { image: 'https://img.icons8.com/ios/50/country-house.png', value: "rear", label: 'Rear' },
//     { image: 'https://img.icons8.com/ios/50/country-house.png', value: "sideinfill", label: 'Side Infill' },
//     { image: 'https://img.icons8.com/ios/50/country-house.png', value: "side", label: 'Side' },
//     { image: 'https://img.icons8.com/ios/50/country-house.png', value: "sideandrear", label: 'Side And Rear' },
//     { image: 'https://img.icons8.com/ios/50/country-house.png', value: "wraparound", label: 'Wraparound' },
//     { image: 'https://img.icons8.com/ios/50/country-house.png', value: "other", label: 'Other' },
// ]

// const loft = [
//     { image: 'https://img.icons8.com/ios/50/country-house.png', value: "maindormer", label: 'Main Dormer' },
//     { image: 'https://img.icons8.com/ios/50/country-house.png', value: "outriggerdormer", label: 'Outrigger Dormer' },
//     { image: 'https://img.icons8.com/ios/50/country-house.png', value: "hiptogablewithnodormer", label: 'Hip To Gable With No Dormer' },
//     { image: 'https://img.icons8.com/ios/50/country-house.png', value: "hiptogablewithmaindormer", label: 'Hip To Gable With Main Dormer' },
//     { image: 'https://img.icons8.com/ios/50/country-house.png', value: "Lshapeddormer", label: 'L Shaped Dormer' },
//     { image: 'https://img.icons8.com/ios/50/country-house.png', value: "other", label: 'Other' },
// ]

// const firstfloor = [
//     { image: 'https://img.icons8.com/ios/50/country-house.png', value: "ffside", label: 'Side' },
//     { image: 'https://img.icons8.com/ios/50/country-house.png', value: "ffsideandrear", label: 'Side And Rear' },
//     { image: 'https://img.icons8.com/ios/50/country-house.png', value: "ffrear", label: 'Rear' },
//     { image: 'https://img.icons8.com/ios/50/country-house.png', value: "rearoveroutrigger", label: 'Rear Over Outrigger' },
//     { image: 'https://img.icons8.com/ios/50/country-house.png', value: "rearovergroundfloor", label: 'Rear Over Ground Floor' },
//     { image: 'https://img.icons8.com/ios/50/country-house.png', value: "other", label: 'Other' },
// ]

// const other = [
//     { image: '/garden-icon.png', value: "gardenannex", label: 'Garden - Annex' },
//     { image: '/garage-conversation.png', value: "garageconversion", label: 'Garage - Conversion' },
//     { image: '/two-story.png', value: "twostoreyside", label: 'Two Storey - Side' },
//     { image: '/two-story-rear.png', value: "twostoreyrear", label: 'Two Storey - Rear' },
//     { image: '/others.png', value: "other", label: 'Other' },
// ]

// const cards3 = [
//     { value: "option1", label: '1' },
//     { value: "option2", label: '2' },
//     { value: "option3", label: '3' },
//     { value: "option4", label: '4' },
//     { value: "option5", label: '5+' },
// ]

// const cards4 = [
//     { value: "ASAP", label: 'ASAP' },
//     { value: "3months", label: '3 Months' },
//     { value: "6months", label: '6 Months' },
//     { value: "12months", label: '12 Months' },
//     { value: "18months", label: '18 Months +' },
//     { value: "imnotsure", label: 'Im not sure' },
// ]

// const cards5 = [
//     { value: "architectural_drawings", label: 'Architectural drawings' },
//     { value: "design_and_planning_advice", label: 'Design and planning advice' },
//     { value: "help_finding_a_builder", label: 'Help finding a builder' },
//     { value: "help_finding_other_professionals", label: 'Help finding other professionals' },
// ]

// const cards6 = [
//     { value: "structural_engineer", label: 'Structural engineer' },
//     { value: "partywall_surveyor", label: 'Party wall surveyor' },
//     { value: "approved_inspector", label: 'Approved inspector' },
//     { value: "other_professionals", label: 'Other professionals' },
// ]

// type Props = {}

// const dataJson = {
//     firstName: '',
//     lastName: '',
//     email: '',
//     address: '',
//     phone: '',
//     postcode: '',
//     recommended_by: '',
//     property_type: '',
//     property_extension: {
//         is_selected: false,
//         groundfloor: {
//             selected: false,
//             rear: false,
//             side_infill: false,
//             side: false,
//             side_and_rear: false,
//             wrap_around: false,
//             other: {
//                 is_selected: false,
//                 value: ''
//             }
//         },
//         loft: {
//             selected: false,
//             main_dormer: false,
//             outrigger_dormer: false,
//             hip_to_gable__with_no_dormer: false,
//             hip_to_gable__with_main_dormer: false,
//             l_shape_dormer: false,
//             other: {
//                 is_selected: false,
//                 value: ''
//             }
//         },
//         firstfloor: {
//             selected: false,
//             side: false,
//             side_and_rear: false,
//             rear: false,
//             rear_over_outrigger: false,
//             rear_over_ground_floor: false,
//             other: {
//                 is_selected: false,
//                 value: ''
//             }
//         },
//         other: {
//             selected: false,
//             garden_annex: false,
//             garage_conversion: false,
//             two_story_side: false,
//             two_story_rear: false,
//             other: {
//                 is_selected: false,
//                 value: ''
//             }
//         },
//     },
//     property_bed_room: '',
//     property_start_time: '',
//     property_services: {
//         architectural_drawings: false,
//         design_and_planning_advice: false,
//         help_with_financing_my_build: false,
//         help_finding_builder: false,
//         help_finding_other_professionals: {
//             selected: false,
//             structural_engineer: false,
//             partywall_surveyor: false,
//             approved_inspector: false,
//             other_professionals: false
//         }
//     }
// }

// const Form = (props: Props) => {
//     const [selectedOption, setSelectedOption] = useState(null);
//     const [projectDetails, setPRojectDetails] = useState<any>({})
//     const [err, setErr] = useState('')
//     const [isLoading, setIsloading] = useState(false)
//     const [projectJson, setProjectJson] = useState(dataJson)
//     const form = useRef();

//     const sendEmail = (e: { preventDefault: () => void; }) => {
//         e.preventDefault();
//         setIsloading(true)
//         console.log('detail', projectJson)

//         emailjs
//             .sendForm('service_lbvt72k', 'template_i1bu4iz', form.current, {
//                 publicKey: 'YvcL1-VJjm_J4uKFv',
//             })
//             .then(
//                 () => {
//                     setIsloading(false);
//                     setProjectJson(dataJson)
//                     console.log('SUCCESS!');
//                     setErr('Form Submitted Successfully');
//                     setTimeout(() => setErr(''), 2000);
//                     e.target.reset();
//                 },
//                 (error) => {
//                     setIsloading(false)
//                     console.log('FAILED...');
//                     setErr('Form submission failed');
//                     setTimeout(() => setErr(''), 2000);
//                 },
//             );
//     };

//     const handleOptionChange = (event: { target: { value: any; name: any; }; }) => {
//         const value = event.target.value;
//         const name = event.target.name;

//         if (name === 'property_type' || name === 'property_bed_room' || name === 'property_start_time') {
//             setProjectJson(prev => ({
//                 ...prev,
//                 [name]: value
//             }));
//         } else {
//             setProjectJson(prev => ({
//                 ...prev,
//                 [name]: value
//             }));
//         }
//     };

//     const updateData = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const { name, value, type, checked } = e.target;

//         if (name === "property_type") {
//             setProjectJson(prev => ({
//                 ...prev,
//                 property_type: value
//             }));
//         }
//         else if (name === "property_extension") {
//             const resetExtensions = {
//                 groundfloor: { ...dataJson.property_extension.groundfloor, selected: false },
//                 loft: { ...dataJson.property_extension.loft, selected: false },
//                 firstfloor: { ...dataJson.property_extension.firstfloor, selected: false },
//                 other: { ...dataJson.property_extension.other, selected: false }
//             };

//             setProjectJson(prev => ({
//                 ...prev,
//                 property_extension: {
//                     ...resetExtensions,
//                     [value]: {
//                         ...prev.property_extension[value],
//                         selected: checked
//                     }
//                 }
//             }));
//             setSelectedOption(checked ? value : null);
//         }
//         else if (name === "property_extension_type") {
//             if (value === 'other') {
//                 setProjectJson(prev => ({
//                     ...prev,
//                     property_extension: {
//                         ...prev.property_extension,
//                         [selectedOption]: {
//                             ...prev.property_extension[selectedOption],
//                             other: {
//                                 is_selected: checked,
//                                 value: prev.property_extension[selectedOption].other.value
//                             }
//                         }
//                     }
//                 }));
//             } else {
//                 if (selectedOption === 'groundfloor') {
//                     const resetOptions = {
//                         rear: false,
//                         side_infill: false,
//                         side: false,
//                         side_and_rear: false,
//                         wrap_around: false,
//                         other: {
//                             is_selected: false,
//                             value: ''
//                         }
//                     };

//                     setProjectJson(prev => ({
//                         ...prev,
//                         property_extension: {
//                             ...prev.property_extension,
//                             [selectedOption]: {
//                                 ...resetOptions,
//                                 [value]: checked,
//                                 selected: true
//                             }
//                         }
//                     }));
//                 } else {
//                     setProjectJson(prev => ({
//                         ...prev,
//                         property_extension: {
//                             ...prev.property_extension,
//                             [selectedOption]: {
//                                 ...prev.property_extension[selectedOption],
//                                 [value]: checked
//                             }
//                         }
//                     }));
//                 }
//             }
//         }
//         else if (name === 'property_bed_room') {
//             setProjectJson(prev => ({
//                 ...prev,
//                 property_bed_room: value
//             }));
//         }
//         else if (name === 'property_start_time') {
//             setProjectJson(prev => ({
//                 ...prev,
//                 property_start_time: value
//             }));
//         }
//         else if (name === "property_services") {
//             if (value === 'help_finding_other_professionals') {
//                 setProjectJson(prev => ({
//                     ...prev,
//                     property_services: {
//                         ...prev.property_services,
//                         help_finding_other_professionals: {
//                             ...prev.property_services.help_finding_other_professionals,
//                             selected: checked
//                         }
//                     }
//                 }));
//                 setSelectedOption(checked ? 'help_finding_other_professionals' : null);
//             } else {
//                 setProjectJson(prev => ({
//                     ...prev,
//                     property_services: {
//                         ...prev.property_services,
//                         [value]: checked
//                     }
//                 }));
//             }
//         }
//         else if (name === 'property_other_services') {
//             setProjectJson(prev => ({
//                 ...prev,
//                 property_services: {
//                     ...prev.property_services,
//                     help_finding_other_professionals: {
//                         ...prev.property_services.help_finding_other_professionals,
//                         [value]: checked
//                     }
//                 }
//             }));
//         }
//     };

//     const changePopertyExtensionVal = (e: React.ChangeEvent<HTMLInputElement>, type: string) => {
//         setProjectJson(prev => ({
//             ...prev,
//             property_extension: {
//                 ...prev.property_extension,
//                 [type]: {
//                     ...prev.property_extension[type],
//                     other: {
//                         is_selected: true,
//                         value: e.target.value
//                     }
//                 }
//             }
//         }));
//     };

//     // Helper function to determine if a card is selected
//     const isCardSelected = (section: string, value: string) => {
//         if (section === 'property_extension') {
//             return projectJson.property_extension[value].selected;
//         } else if (section === 'property_extension_type') {
//             if (value === 'other') {
//                 return projectJson.property_extension[selectedOption].other.is_selected;
//             }
//             return projectJson.property_extension[selectedOption][value];
//         } else if (section === 'property_services') {
//             if (value === 'help_finding_other_professionals') {
//                 return projectJson.property_services.help_finding_other_professionals.selected;
//             }
//             return projectJson.property_services[value];
//         } else if (section === 'property_other_services') {
//             return projectJson.property_services.help_finding_other_professionals[value];
//         }
//         return false;
//     };

//     return (
//         <>
//             <div className={`${style.form_container}`}>
//                 <h1>
//                     PEARL ENGINEERS, PLANNERS & PROJECT MANAGERS
//                 </h1>
//                 <div className={`${style.form_div}`}>
//                     <form ref={form} onSubmit={sendEmail}>
//                         {/* Property Type Section */}
//                         <div className='mb-5'>
//                             <h3>What sort of property is this?</h3>
//                             <fieldset className={`${style.cards_grid_5}`} role="radiogroup" >
//                                 {cards1.map((val) => (
//                                     <label key={val.value}>
//                                         <input
//                                             className={`${style.cards_input}`}
//                                             type="radio"
//                                             value={val.value}
//                                             checked={projectJson.property_type === val.value}
//                                             onChange={(e) => updateData(e)}
//                                             name='property_type'
//                                         />
//                                         <div className={projectJson.property_type === val.value ? `${style.cards} ${style.card_selected}` : `${style.cards}`}>
//                                             <div className={`${style.cards_details}`}>
//                                                 <img src={val.image} alt={val.label} />
//                                                 <span>{val.label}</span>
//                                             </div>
//                                         </div>
//                                     </label>
//                                 ))}
//                             </fieldset>
//                         </div>

//                         {/* Construction Activities Section */}
//                         <div className='mb-5'>
//                             <h3>Where do you consider taking up construction activities?</h3>
//                             <fieldset className={`${style.cards_grid_4}`} role="radiogroup" >
//                                 {cards2.map((val) => (
//                                     <label key={val.value}>
//                                         <input
//                                             className={`${style.cards_input}`}
//                                             type="radio"
//                                             value={val.value}
//                                             checked={projectJson.property_extension[val.value].selected}
//                                             onChange={(e) => updateData(e)}
//                                             name='property_extension'
//                                         />
//                                         <div className={projectJson.property_extension[val.value].selected ? `${style.cards} ${style.card_selected}` : `${style.cards}`}>
//                                             <div className={`${style.cards_details}`}>
//                                                 <img src={val.image} alt={val.label} />
//                                                 <span>{val.label}</span>
//                                             </div>
//                                         </div>
//                                     </label>
//                                 ))}
//                             </fieldset>
//                         </div>

//                         {/* Ground Floor Section */}
//                         {selectedOption === 'groundfloor' && projectJson.property_extension.groundfloor.selected && (
//                             <div className='mb-5'>
//                                 <h3>Ground Floor</h3>
//                                 <fieldset className={`${style.cards_grid_5}`} role="radiogroup" >
//                                     {groundfloor.map((val) => (
//                                         <label key={val.value}>
//                                             <input
//                                                 className={`${style.cards_input}`}
//                                                 type="radio"
//                                                 value={val.value}
//                                                 checked={val.value === 'other' ?
//                                                     projectJson.property_extension.groundfloor.other.is_selected :
//                                                     projectJson.property_extension.groundfloor[val.value]}
//                                                 onChange={(e) => updateData(e)}
//                                                 name='property_extension_type'
//                                             />
//                                             <div className={
//                                                 val.value === 'other' ?
//                                                     projectJson.property_extension.groundfloor.other.is_selected ?
//                                                         `${style.cards} ${style.card_selected}` : `${style.cards}` :
//                                                     projectJson.property_extension.groundfloor[val.value] ?
//                                                         `${style.cards} ${style.card_selected}` : `${style.cards}`
//                                             }>
//                                                 <div className={`${style.cards_details}`}>
//                                                     <img src={val.image} alt={val.label} />
//                                                     <span>{val.label}</span>
//                                                 </div>
//                                             </div>
//                                         </label>
//                                     ))}
//                                 </fieldset>
//                                 {projectJson.property_extension.groundfloor.other.is_selected && (
//                                     <input
//                                         className='mt-2 p-2'
//                                         type='text'
//                                         value={projectJson.property_extension.groundfloor.other.value}
//                                         placeholder='type here other option'
//                                         onChange={(e) => changePopertyExtensionVal(e, 'groundfloor')}
//                                     />
//                                 )}
//                             </div>
//                         )}

//                         {/* Loft Section */}
//                         {selectedOption === 'loft' && projectJson.property_extension.loft.selected && (
//                             <div className='mb-5'>
//                                 <h3>Loft</h3>
//                                 <fieldset className={`${style.cards_grid_5}`} role="radiogroup" >
//                                     {loft.map((val) => (
//                                         <label key={val.value}>
//                                             <input
//                                                 className={`${style.cards_input}`}
//                                                 type="radio"
//                                                 value={val.value}
//                                                 checked={val.value === 'other' ?
//                                                     projectJson.property_extension.loft.other.is_selected :
//                                                     projectJson.property_extension.loft[val.value]}
//                                                 onChange={(e) => updateData(e)}
//                                                 name='property_extension_type'
//                                             />
//                                             <div className={
//                                                 val.value === 'other' ?
//                                                     projectJson.property_extension.loft.other.is_selected ?
//                                                         `${style.cards} ${style.card_selected}` : `${style.cards}` :
//                                                     projectJson.property_extension.loft[val.value] ?
//                                                         `${style.cards} ${style.card_selected}` : `${style.cards}`
//                                             }>
//                                                 <div className={`${style.cards_details}`}>
//                                                     <img src={val.image} alt={val.label} />
//                                                     <span>{val.label}</span>
//                                                 </div>
//                                             </div>
//                                         </label>
//                                     ))}
//                                 </fieldset>
//                                 {projectJson.property_extension.loft.other.is_selected && (
//                                     <input
//                                         className='mt-2 p-2'
//                                         type='text'
//                                         value={projectJson.property_extension.loft.other.value}
//                                         placeholder='type here other option'
//                                         onChange={(e) => changePopertyExtensionVal(e, 'loft')}
//                                     />
//                                 )}
//                             </div>
//                         )}

//                         {/* First Floor Section */}
//                         {selectedOption === 'firstfloor' && projectJson.property_extension.firstfloor.selected && (
//                             <div className='mb-5'>
//                                 <h3>First Floor</h3>
//                                 <fieldset className={`${style.cards_grid_5}`} role="radiogroup" >
//                                     {firstfloor.map((val) => (
//                                         <label key={val.value}>
//                                             <input
//                                                 className={`${style.cards_input}`}
//                                                 type="radio"
//                                                 value={val.value}
//                                                 checked={val.value === 'other' ?
//                                                     projectJson.property_extension.firstfloor.other.is_selected :
//                                                     projectJson.property_extension.firstfloor[val.value]}
//                                                 onChange={(e) => updateData(e)}
//                                                 name='property_extension_type'
//                                             />
//                                             <div className={
//                                                 val.value === 'other' ?
//                                                     projectJson.property_extension.firstfloor.other.is_selected ?
//                                                         `${style.cards} ${style.card_selected}` : `${style.cards}` :
//                                                     projectJson.property_extension.firstfloor[val.value] ?
//                                                         `${style.cards} ${style.card_selected}` : `${style.cards}`
//                                             }>
//                                                 <div className={`${style.cards_details}`}>
//                                                     <img src={val.image} alt={val.label} />
//                                                     <span>{val.label}</span>
//                                                 </div>
//                                             </div>
//                                         </label>
//                                     ))}
//                                 </fieldset>
//                                 {projectJson.property_extension.firstfloor.other.is_selected && (
//                                     <input
//                                         className='mt-2 p-2'
//                                         type='text'
//                                         value={projectJson.property_extension.firstfloor.other.value}
//                                         placeholder='type here other option'
//                                         onChange={(e) => changePopertyExtensionVal(e, 'firstfloor')}
//                                     />
//                                 )}
//                             </div>
//                         )}

//                         {/* Other Section */}
//                         {selectedOption === 'other' && projectJson.property_extension.other.selected && (
//                             <div className='mb-5'>
//                                 <h3>Other</h3>
//                                 <fieldset className={`${style.cards_grid_4}`} role="radiogroup" >
//                                     {other.map((val) => (
//                                         <label key={val.value}>
//                                             <input
//                                                 className={`${style.cards_input}`}
//                                                 type="radio"
//                                                 value={val.value}
//                                                 checked={val.value === 'other' ?
//                                                     projectJson.property_extension.other.other.is_selected :
//                                                     projectJson.property_extension.other[val.value]}
//                                                 onChange={(e) => updateData(e)}
//                                                 name='property_extension_type'
//                                             />
//                                             <div className={
//                                                 val.value === 'other' ?
//                                                     projectJson.property_extension.other.other.is_selected ?
//                                                         `${style.cards} ${style.card_selected}` : `${style.cards}` :
//                                                     projectJson.property_extension.other[val.value] ?
//                                                         `${style.cards} ${style.card_selected}` : `${style.cards}`
//                                             }>
//                                                 <div className={`${style.cards_details}`}>
//                                                     <img src={val.image} alt={val.label} />
//                                                     <span>{val.label}</span>
//                                                 </div>
//                                             </div>
//                                         </label>
//                                     ))}
//                                 </fieldset>
//                                 {projectJson.property_extension.other.other.is_selected && (
//                                     <input
//                                         className='mt-2 p-2'
//                                         type='text'
//                                         value={projectJson.property_extension.other.other.value}
//                                         placeholder='type here other option'
//                                         onChange={(e) => changePopertyExtensionVal(e, 'other')}
//                                     />
//                                 )}
//                             </div>
//                         )}

//                         {/* Bedrooms Section */}
//                         <div className='mb-5'>
//                             <h3>How many bedrooms does this property have?</h3>
//                             <p>This will give us an idea of the property's size</p>
//                             <fieldset className={`${style.cards_grid_5}`} role="radiogroup" >
//                                 {cards3.map((val) => (
//                                     <label key={val.value}>
//                                         <input
//                                             className={`${style.cards_input}`}
//                                             type="radio"
//                                             value={val.value}
//                                             checked={projectJson.property_bed_room === val.value}
//                                             onChange={(e) => updateData(e)}
//                                             name='property_bed_room'
//                                         />
//                                         <div className={projectJson.property_bed_room === val.value ? `${style.cards} ${style.card_selected} ${style.height}` : `${style.cards} ${style.height}`}>
//                                             <div className={`${style.cards_details}`}>
//                                                 <span>{val.label}</span>
//                                             </div>
//                                         </div>
//                                     </label>
//                                 ))}
//                             </fieldset>
//                         </div>

//                         {/* Start Time Section */}
//                         <div className='mb-5'>
//                             <h3>When are you hoping to start the design process?</h3>
//                             <fieldset className={`${style.cards_grid_6}`} role="radiogroup" >
//                                 {cards4.map((val) => (
//                                     <label key={val.value}>
//                                         <input
//                                             className={`${style.cards_input}`}
//                                             type="radio"
//                                             value={val.value}
//                                             checked={projectJson.property_start_time === val.value}
//                                             onChange={(e) => updateData(e)}
//                                             name='property_start_time'
//                                         />
//                                         <div className={projectJson.property_start_time === val.value ? `${style.cards} ${style.card_selected} ${style.height}` : `${style.cards} ${style.height}`}>
//                                             <div className={`${style.cards_details}`}>
//                                                 <span>{val.label}</span>
//                                             </div>
//                                         </div>
//                                     </label>
//                                 ))}
//                             </fieldset>
//                         </div>

//                         {/* Services Section */}
//                         <div className='mb-5'>
//                             <h3>Are you interested in any of these services?</h3>
//                             <fieldset className={`${style.cards_grid}`} role="radiogroup" >
//                                 {cards5.map((val) => (
//                                     <label key={val.value}>
//                                         <input
//                                             className={`${style.cards_input}`}
//                                             type="checkbox"
//                                             value={val.value}
//                                             checked={val.value === 'help_finding_other_professionals' ?
//                                                 projectJson.property_services.help_finding_other_professionals.selected :
//                                                 projectJson.property_services[val.value]}
//                                             onChange={(e) => updateData(e)}
//                                             name='property_services'
//                                         />
//                                         <div className={
//                                             val.value === 'help_finding_other_professionals' ?
//                                                 projectJson.property_services.help_finding_other_professionals.selected ?
//                                                     `${style.cards} ${style.card_selected} ${style.height}` : `${style.cards} ${style.height}` :
//                                                 projectJson.property_services[val.value] ?
//                                                     `${style.cards} ${style.card_selected} ${style.height}` : `${style.cards} ${style.height}`
//                                         }>
//                                             <div className={`${style.cards_details}`}>
//                                                 <span>{val.label}</span>
//                                             </div>
//                                         </div>
//                                     </label>
//                                 ))}
//                             </fieldset>
//                         </div>

//                         {/* Other Professionals Section */}
//                         {selectedOption === 'help_finding_other_professionals' && projectJson.property_services.help_finding_other_professionals.selected && (
//                             <div className='mb-5'>
//                                 <p>What professionals are you looking for?</p>
//                                 <fieldset className={`${style.cards_grid}`} role="radiogroup" >
//                                     {cards6.map((val) => (
//                                         <label key={val.value}>
//                                             <input
//                                                 className={`${style.cards_input}`}
//                                                 type="checkbox"
//                                                 value={val.value}
//                                                 checked={projectJson.property_services.help_finding_other_professionals[val.value]}
//                                                 onChange={(e) => updateData(e)}
//                                                 name='property_other_services'
//                                             />
//                                             <div className={projectJson.property_services.help_finding_other_professionals[val.value] ? `${style.cards} ${style.card_selected} ${style.height}` : `${style.cards} ${style.height}`}>
//                                                 <div className={`${style.cards_details}`}>
//                                                     <span>{val.label}</span>
//                                                 </div>
//                                             </div>
//                                         </label>
//                                     ))}
//                                 </fieldset>
//                             </div>
//                         )}

//                         <hr />

//                         {/* Personal Details Section */}
//                         <div className='my-5'>
//                             <h3>A few details from you, please...</h3>
//                             <fieldset className={`${style.cards_grid} mb-3`} role="radiogroup" >
//                                 <div className="mb-2">
//                                     <label className="mb-2">First Name<sup>*</sup></label>
//                                     <input
//                                         className={`${style.cards_input} form-control `}
//                                         type='text'
//                                         placeholder="John"
//                                         name="firstName"
//                                         required
//                                         onChange={handleOptionChange}
//                                     />
//                                 </div>
//                                 <div className="mb-2">
//                                     <label className="mb-2">Last Name<sup>*</sup></label>
//                                     <input
//                                         className={`${style.cards_input} form-control `}
//                                         type='text'
//                                         placeholder="Clarck"
//                                         name="lastName"
//                                         required
//                                         onChange={handleOptionChange}
//                                     />
//                                 </div>
//                                 <div className="mb-2">
//                                     <label className="mb-2">Address<sup>*</sup></label>
//                                     <input
//                                         className={`${style.cards_input} form-control `}
//                                         type='text'
//                                         placeholder="Holding Back Extension Ave."
//                                         name="address"
//                                         required
//                                         onChange={handleOptionChange}
//                                     />
//                                 </div>
//                                 <div className="mb-2">
//                                     <label className="mb-2">Postcode<sup>*</sup></label>
//                                     <input
//                                         className={`${style.cards_input} form-control `}
//                                         type='text'
//                                         placeholder="SW1A 2AB"
//                                         name="postcode"
//                                         required
//                                         onChange={handleOptionChange}
//                                     />
//                                 </div>
//                                 <div className="mb-2">
//                                     <label className="mb-2">Email<sup>*</sup></label>
//                                     <input
//                                         className={`${style.cards_input} form-control `}
//                                         type='email'
//                                         placeholder="johnclarck@gmail.com"
//                                         name="email"
//                                         required
//                                         onChange={handleOptionChange}
//                                     />
//                                 </div>
//                                 <div className="mb-2">
//                                     <label className="mb-2">Phone<sup>*</sup></label>
//                                     <input
//                                         className={`${style.cards_input} form-control `}
//                                         type='number'
//                                         placeholder="0781234567"
//                                         name="phone"
//                                         required
//                                         onChange={handleOptionChange}
//                                     />
//                                 </div>

//                                 <div className="mb-2">
//                                     <label className="mb-2">Where did you hear about us?<sup>*</sup></label>
//                                     <select className='form-control' name='recommended_by' onChange={handleOptionChange}>
//                                         <option value="">None selected</option>
//                                         <option value="houzz">Houzz</option>
//                                         <option value="google">Google</option>
//                                         <option value="facebookinstagram">Facebook / Instagram</option>
//                                         <option value="recommended">Recommended by a friend / colleague</option>
//                                         <option value="press">Press</option>
//                                         <option value="radio">Radio</option>
//                                         <option value="magazine">Magazine</option>
//                                         <option value="ITV">ITV - Television Ad</option>
//                                         <option value="blog">Blog</option>
//                                         <option value="pinterest">Pinterest</option>
//                                         <option value="linkedIn">LinkedIn</option>
//                                         <option value="tradeshow">Trade show</option>
//                                         <option value="newsletter">Newsletter - Muddy Trowel</option>
//                                         <option value="advertising">Advertising Board</option>
//                                     </select>
//                                 </div>
//                             </fieldset>
//                         </div>

//                         {/* Submit Button */}
//                         <div className={`${style.form_button_div}`}>
//                             <button className={`${style.form_button} btn`} disabled={isLoading}>
//                                 {isLoading ? <span><CircularProgress size={20} color='inherit' /></span> : <span>Submit</span>}
//                             </button>
//                         </div>
//                         <p className='text-center mt-2 h4'>{err}</p>
//                     </form>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Form

'use client';

import React, { useRef, useState } from 'react';
import style from './style.module.scss';
import emailjs from '@emailjs/browser';
import CircularProgress from '@mui/material/CircularProgress';

// ---------- DATA (same as yours) ----------
const cards1 = [
  { image: '/detached.svg', value: 'detached', label: 'Detached' },
  { image: '/semi-detach.png', value: 'semidetached', label: 'Semi Detached' },
  { image: '/terrace.png', value: 'terrace', label: 'Terrace' },
  { image: '/flat-icon.png', value: 'flat', label: 'Flat' },
  { image: '/banglow.png', value: 'bungalow', label: 'Bungalow' },
];

const cards2 = [
  { image: '/ground-floor.png', value: 'groundfloor', label: 'Ground Floor' },
  { image: '/loft-icon.png', value: 'loft', label: 'Loft' },
  { image: '/first-floor-icon.png', value: 'firstfloor', label: 'First Floor' },
  { image: '/others.png', value: 'other', label: 'Other' },
];

const groundfloor = [
  { image: 'https://img.icons8.com/ios/50/country-house.png', value: 'rear', label: 'Rear' },
  { image: 'https://img.icons8.com/ios/50/country-house.png', value: 'sideinfill', label: 'Side Infill' },
  { image: 'https://img.icons8.com/ios/50/country-house.png', value: 'side', label: 'Side' },
  { image: 'https://img.icons8.com/ios/50/country-house.png', value: 'sideandrear', label: 'Side And Rear' },
  { image: 'https://img.icons8.com/ios/50/country-house.png', value: 'wraparound', label: 'Wraparound' },
  { image: 'https://img.icons8.com/ios/50/country-house.png', value: 'other', label: 'Other' },
];

const loft = [
  { image: 'https://img.icons8.com/ios/50/country-house.png', value: 'maindormer', label: 'Main Dormer' },
  { image: 'https://img.icons8.com/ios/50/country-house.png', value: 'outriggerdormer', label: 'Outrigger Dormer' },
  { image: 'https://img.icons8.com/ios/50/country-house.png', value: 'hiptogablewithnodormer', label: 'Hip To Gable With No Dormer' },
  { image: 'https://img.icons8.com/ios/50/country-house.png', value: 'hiptogablewithmaindormer', label: 'Hip To Gable With Main Dormer' },
  { image: 'https://img.icons8.com/ios/50/country-house.png', value: 'Lshapeddormer', label: 'L Shaped Dormer' },
  { image: 'https://img.icons8.com/ios/50/country-house.png', value: 'other', label: 'Other' },
];

const firstfloor = [
  { image: 'https://img.icons8.com/ios/50/country-house.png', value: 'ffside', label: 'Side' },
  { image: 'https://img.icons8.com/ios/50/country-house.png', value: 'ffsideandrear', label: 'Side And Rear' },
  { image: 'https://img.icons8.com/ios/50/country-house.png', value: 'ffrear', label: 'Rear' },
  { image: 'https://img.icons8.com/ios/50/country-house.png', value: 'rearoveroutrigger', label: 'Rear Over Outrigger' },
  { image: 'https://img.icons8.com/ios/50/country-house.png', value: 'rearovergroundfloor', label: 'Rear Over Ground Floor' },
  { image: 'https://img.icons8.com/ios/50/country-house.png', value: 'other', label: 'Other' },
];

const other = [
  { image: '/garden-icon.png', value: 'gardenannex', label: 'Garden - Annex' },
  { image: '/garage-conversation.png', value: 'garageconversion', label: 'Garage - Conversion' },
  { image: '/two-story.png', value: 'twostoreyside', label: 'Two Storey - Side' },
  { image: '/two-story-rear.png', value: 'twostoreyrear', label: 'Two Storey - Rear' },
  { image: '/others.png', value: 'other', label: 'Other' },
];

const cards3 = [
  { value: 'option1', label: '1' },
  { value: 'option2', label: '2' },
  { value: 'option3', label: '3' },
  { value: 'option4', label: '4' },
  { value: 'option5', label: '5+' },
];

const cards4 = [
  { value: 'ASAP', label: 'ASAP' },
  { value: '3months', label: '3 Months' },
  { value: '6months', label: '6 Months' },
  { value: '12months', label: '12 Months' },
  { value: '18months', label: '18 Months +' },
  { value: 'imnotsure', label: 'Im not sure' },
];

const cards5 = [
  { value: 'architectural_drawings', label: 'Architectural drawings' },
  { value: 'design_and_planning_advice', label: 'Design and planning advice' },
  { value: 'help_finding_a_builder', label: 'Help finding a builder' },
  { value: 'help_finding_other_professionals', label: 'Help finding other professionals' },
];

const cards6 = [
  { value: 'structural_engineer', label: 'Structural engineer' },
  { value: 'partywall_surveyor', label: 'Party wall surveyor' },
  { value: 'approved_inspector', label: 'Approved inspector' },
  { value: 'other_professionals', label: 'Other professionals' },
];

type Props = {};

const dataJson = {
  firstName: '',
  lastName: '',
  email: '',
  address: '',
  phone: '',
  postcode: '',
  recommended_by: '',
  property_type: '',
  property_extension: {
    is_selected: false,
    groundfloor: {
      selected: false,
      rear: false,
      side_infill: false,
      side: false,
      side_and_rear: false,
      wrap_around: false,
      other: { is_selected: false, value: '' },
    },
    loft: {
      selected: false,
      main_dormer: false,
      outrigger_dormer: false,
      hip_to_gable__with_no_dormer: false,
      hip_to_gable__with_main_dormer: false,
      l_shape_dormer: false,
      other: { is_selected: false, value: '' },
    },
    firstfloor: {
      selected: false,
      side: false,
      side_and_rear: false,
      rear: false,
      rear_over_outrigger: false,
      rear_over_ground_floor: false,
      other: { is_selected: false, value: '' },
    },
    other: {
      selected: false,
      garden_annex: false,
      garage_conversion: false,
      two_story_side: false,
      two_story_rear: false,
      other: { is_selected: false, value: '' },
    },
  },
  property_bed_room: '',
  property_start_time: '',
  property_services: {
    architectural_drawings: false,
    design_and_planning_advice: false,
    help_with_financing_my_build: false,
    help_finding_builder: false,
    help_finding_other_professionals: {
      selected: false,
      structural_engineer: false,
      partywall_surveyor: false,
      approved_inspector: false,
      other_professionals: false,
    },
  },
};

const Form = (props: Props) => {
  const [selectedOption, setSelectedOption] = useState<any>(null);
  const [err, setErr] = useState('');
  const [isLoading, setIsloading] = useState(false);
  const [projectJson, setProjectJson] = useState<any>(dataJson);
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: any) => {
    e.preventDefault();
    setIsloading(true);

    emailjs
      .sendForm('service_lbvt72k', 'template_i1bu4iz', form.current as any, {
        publicKey: 'YvcL1-VJjm_J4uKFv',
      })
      .then(
        () => {
          setIsloading(false);
          setProjectJson(dataJson);
          setErr('Form Submitted Successfully');
          setTimeout(() => setErr(''), 2000);
          e.target.reset();
        },
        () => {
          setIsloading(false);
          setErr('Form submission failed');
          setTimeout(() => setErr(''), 2000);
        }
      );
  };

  const handleOptionChange = (event: any) => {
    const value = event.target.value;
    const name = event.target.name;

    setProjectJson((prev: any) => ({
      ...prev,
      [name]: value,
    }));
  };

  const updateData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target;

    if (name === 'property_type') {
      setProjectJson((prev: any) => ({ ...prev, property_type: value }));
    } else if (name === 'property_extension') {
      const resetExtensions = {
        groundfloor: { ...dataJson.property_extension.groundfloor, selected: false },
        loft: { ...dataJson.property_extension.loft, selected: false },
        firstfloor: { ...dataJson.property_extension.firstfloor, selected: false },
        other: { ...dataJson.property_extension.other, selected: false },
      };

      setProjectJson((prev: any) => ({
        ...prev,
        property_extension: {
          ...resetExtensions,
          [value]: {
            ...prev.property_extension[value],
            selected: checked,
          },
        },
      }));
      setSelectedOption(checked ? value : null);
    } else if (name === 'property_extension_type') {
      if (value === 'other') {
        setProjectJson((prev: any) => ({
          ...prev,
          property_extension: {
            ...prev.property_extension,
            [selectedOption]: {
              ...prev.property_extension[selectedOption],
              other: {
                is_selected: checked,
                value: prev.property_extension[selectedOption].other.value,
              },
            },
          },
        }));
      } else {
        if (selectedOption === 'groundfloor') {
          const resetOptions = {
            rear: false,
            side_infill: false,
            side: false,
            side_and_rear: false,
            wrap_around: false,
            other: { is_selected: false, value: '' },
          };

          setProjectJson((prev: any) => ({
            ...prev,
            property_extension: {
              ...prev.property_extension,
              [selectedOption]: {
                ...resetOptions,
                [value]: checked,
                selected: true,
              },
            },
          }));
        } else {
          setProjectJson((prev: any) => ({
            ...prev,
            property_extension: {
              ...prev.property_extension,
              [selectedOption]: {
                ...prev.property_extension[selectedOption],
                [value]: checked,
              },
            },
          }));
        }
      }
    } else if (name === 'property_bed_room') {
      setProjectJson((prev: any) => ({ ...prev, property_bed_room: value }));
    } else if (name === 'property_start_time') {
      setProjectJson((prev: any) => ({ ...prev, property_start_time: value }));
    } else if (name === 'property_services') {
      if (value === 'help_finding_other_professionals') {
        setProjectJson((prev: any) => ({
          ...prev,
          property_services: {
            ...prev.property_services,
            help_finding_other_professionals: {
              ...prev.property_services.help_finding_other_professionals,
              selected: checked,
            },
          },
        }));
        setSelectedOption(checked ? 'help_finding_other_professionals' : null);
      } else {
        setProjectJson((prev: any) => ({
          ...prev,
          property_services: {
            ...prev.property_services,
            [value]: checked,
          },
        }));
      }
    } else if (name === 'property_other_services') {
      setProjectJson((prev: any) => ({
        ...prev,
        property_services: {
          ...prev.property_services,
          help_finding_other_professionals: {
            ...prev.property_services.help_finding_other_professionals,
            [value]: checked,
          },
        },
      }));
    }
  };

  const changePopertyExtensionVal = (e: React.ChangeEvent<HTMLInputElement>, type: string) => {
    setProjectJson((prev: any) => ({
      ...prev,
      property_extension: {
        ...prev.property_extension,
        [type]: {
          ...prev.property_extension[type],
          other: { is_selected: true, value: e.target.value },
        },
      },
    }));
  };

  // ---------- UI helpers (no functionality change) ----------
  const CardOption = ({
    inputType,
    name,
    value,
    label,
    image,
    checked,
    onChange,
  }: any) => {
    return (
      <label className={style.option}>
        <input
          className={style.cards_input}
          type={inputType}
          value={value}
          checked={checked}
          onChange={onChange}
          name={name}
        />

        <div className={`${style.card} ${checked ? style.card_selected : ''}`}>
          {image ? (
            <div className={style.cardIconWrap} aria-hidden>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={image} alt="" className={style.cardIcon} />
            </div>
          ) : null}

          <div className={style.cardText}>
            <span className={style.cardLabel}>{label}</span>
          </div>

          <div className={style.cardTick} aria-hidden>
            ✓
          </div>
        </div>
      </label>
    );
  };

  const Section = ({ step, title, desc, children }: any) => {
    return (
      <section className={style.section}>
        <div className={style.sectionHead}>
          <div className={style.stepPill}>Step {step}</div>
          <div>
            <h3 className={style.sectionTitle}>{title}</h3>
            {desc ? <p className={style.sectionDesc}>{desc}</p> : null}
          </div>
        </div>
        <div className={style.sectionBody}>{children}</div>
      </section>
    );
  };

  // ---------- conditional lists ----------
  const currentExtList =
    selectedOption === 'groundfloor'
      ? groundfloor
      : selectedOption === 'loft'
      ? loft
      : selectedOption === 'firstfloor'
      ? firstfloor
      : selectedOption === 'other'
      ? other
      : [];

  const isExtSelected =
    selectedOption &&
    projectJson?.property_extension?.[selectedOption] &&
    projectJson.property_extension[selectedOption].selected;

  return (
    <div className={style.page}>
      <div className={style.hero}>
        <div className={style.heroInner}>
          <div className={style.brandPill}>Instant Quote</div>
          <h1 className={style.heroTitle}>Pearl Engineers, Planners & Project Managers</h1>
          <p className={style.heroSub}>
            Answer a few quick questions — we’ll understand your project and get back with the best
            next step.
          </p>
        </div>
      </div>

      <div className={style.shell}>
        <div className={style.formCard}>
          <form ref={form as any} onSubmit={sendEmail}>
            {/* Step 1 */}
            <Section step={1} title="What sort of property is this?" desc="Choose the closest match.">
              <fieldset className={style.grid5} role="radiogroup">
                {cards1.map((val) => (
                  <CardOption
                    key={val.value}
                    inputType="radio"
                    name="property_type"
                    value={val.value}
                    label={val.label}
                    image={val.image}
                    checked={projectJson.property_type === val.value}
                    onChange={(e: any) => updateData(e)}
                  />
                ))}
              </fieldset>
            </Section>

            {/* Step 2 */}
            <Section
              step={2}
              title="Where do you consider taking up construction activities?"
              desc="Select the area where the work will happen."
            >
              <fieldset className={style.grid4} role="radiogroup">
                {cards2.map((val) => (
                  <CardOption
                    key={val.value}
                    inputType="radio"
                    name="property_extension"
                    value={val.value}
                    label={val.label}
                    image={val.image}
                    checked={projectJson.property_extension[val.value].selected}
                    onChange={(e: any) => updateData(e)}
                  />
                ))}
              </fieldset>

              {/* Step 2.1 dynamic */}
              {isExtSelected && (
                <div className={style.subSection}>
                  <div className={style.subHead}>
                    <h4 className={style.subTitle}>
                      {selectedOption === 'groundfloor'
                        ? 'Ground Floor'
                        : selectedOption === 'loft'
                        ? 'Loft'
                        : selectedOption === 'firstfloor'
                        ? 'First Floor'
                        : 'Other'}
                    </h4>
                    <p className={style.subDesc}>Choose one option.</p>
                  </div>

                  <fieldset className={style.grid5} role="radiogroup">
                    {currentExtList.map((val: any) => {
                      const checked =
                        val.value === 'other'
                          ? projectJson.property_extension[selectedOption].other.is_selected
                          : projectJson.property_extension[selectedOption][val.value];

                      return (
                        <CardOption
                          key={val.value}
                          inputType="radio"
                          name="property_extension_type"
                          value={val.value}
                          label={val.label}
                          image={val.image}
                          checked={checked}
                          onChange={(e: any) => updateData(e)}
                        />
                      );
                    })}
                  </fieldset>

                  {/* other text input */}
                  {projectJson.property_extension[selectedOption]?.other?.is_selected && (
                    <div className={style.otherInputWrap}>
                      <label className={style.inputLabel}>Other (please specify)</label>
                      <input
                        className={style.textInput}
                        type="text"
                        value={projectJson.property_extension[selectedOption].other.value}
                        placeholder="Type here..."
                        onChange={(e) => changePopertyExtensionVal(e, selectedOption)}
                      />
                    </div>
                  )}
                </div>
              )}
            </Section>

            {/* Step 3 */}
            <Section
              step={3}
              title="How many bedrooms does this property have?"
              desc="This helps us understand the overall size."
            >
              <fieldset className={style.grid5} role="radiogroup">
                {cards3.map((val) => (
                  <CardOption
                    key={val.value}
                    inputType="radio"
                    name="property_bed_room"
                    value={val.value}
                    label={val.label}
                    checked={projectJson.property_bed_room === val.value}
                    onChange={(e: any) => updateData(e)}
                  />
                ))}
              </fieldset>
            </Section>

            {/* Step 4 */}
            <Section step={4} title="When are you hoping to start the design process?">
              <fieldset className={style.grid6} role="radiogroup">
                {cards4.map((val) => (
                  <CardOption
                    key={val.value}
                    inputType="radio"
                    name="property_start_time"
                    value={val.value}
                    label={val.label}
                    checked={projectJson.property_start_time === val.value}
                    onChange={(e: any) => updateData(e)}
                  />
                ))}
              </fieldset>
            </Section>

            {/* Step 5 */}
            <Section step={5} title="Are you interested in any of these services?">
              <fieldset className={style.grid2} role="group">
                {cards5.map((val) => {
                  const checked =
                    val.value === 'help_finding_other_professionals'
                      ? projectJson.property_services.help_finding_other_professionals.selected
                      : projectJson.property_services[val.value];

                  return (
                    <CardOption
                      key={val.value}
                      inputType="checkbox"
                      name="property_services"
                      value={val.value}
                      label={val.label}
                      checked={checked}
                      onChange={(e: any) => updateData(e)}
                    />
                  );
                })}
              </fieldset>

              {selectedOption === 'help_finding_other_professionals' &&
                projectJson.property_services.help_finding_other_professionals.selected && (
                  <div className={style.subSection}>
                    <div className={style.subHead}>
                      <h4 className={style.subTitle}>What professionals are you looking for?</h4>
                      <p className={style.subDesc}>Select all that apply.</p>
                    </div>

                    <fieldset className={style.grid2} role="group">
                      {cards6.map((val) => (
                        <CardOption
                          key={val.value}
                          inputType="checkbox"
                          name="property_other_services"
                          value={val.value}
                          label={val.label}
                          checked={projectJson.property_services.help_finding_other_professionals[val.value]}
                          onChange={(e: any) => updateData(e)}
                        />
                      ))}
                    </fieldset>
                  </div>
                )}
            </Section>

            <div className={style.divider} />

            {/* Step 6 */}
            <Section step={6} title="A few details from you, please...">
              <div className={style.inputGrid}>
                <div className={style.field}>
                  <label className={style.inputLabel}>
                    First Name <sup>*</sup>
                  </label>
                  <input
                    className={style.textInput}
                    type="text"
                    placeholder="John"
                    name="firstName"
                    required
                    onChange={handleOptionChange}
                  />
                </div>

                <div className={style.field}>
                  <label className={style.inputLabel}>
                    Last Name <sup>*</sup>
                  </label>
                  <input
                    className={style.textInput}
                    type="text"
                    placeholder="Clark"
                    name="lastName"
                    required
                    onChange={handleOptionChange}
                  />
                </div>

                <div className={style.fieldWide}>
                  <label className={style.inputLabel}>
                    Address <sup>*</sup>
                  </label>
                  <input
                    className={style.textInput}
                    type="text"
                    placeholder="Holding Back Extension Ave."
                    name="address"
                    required
                    onChange={handleOptionChange}
                  />
                </div>

                <div className={style.field}>
                  <label className={style.inputLabel}>
                    Postcode <sup>*</sup>
                  </label>
                  <input
                    className={style.textInput}
                    type="text"
                    placeholder="SW1A 2AB"
                    name="postcode"
                    required
                    onChange={handleOptionChange}
                  />
                </div>

                <div className={style.field}>
                  <label className={style.inputLabel}>
                    Email <sup>*</sup>
                  </label>
                  <input
                    className={style.textInput}
                    type="email"
                    placeholder="johnclark@gmail.com"
                    name="email"
                    required
                    onChange={handleOptionChange}
                  />
                </div>

                <div className={style.field}>
                  <label className={style.inputLabel}>
                    Phone <sup>*</sup>
                  </label>
                  <input
                    className={style.textInput}
                    type="number"
                    placeholder="0781234567"
                    name="phone"
                    required
                    onChange={handleOptionChange}
                  />
                </div>

                <div className={style.fieldWide}>
                  <label className={style.inputLabel}>
                    Where did you hear about us? <sup>*</sup>
                  </label>
                  <select className={style.selectInput} name="recommended_by" onChange={handleOptionChange} required>
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
              </div>
            </Section>

            {/* Submit */}
            <div className={style.actions}>
              <button className={style.submitBtn} disabled={isLoading}>
                {isLoading ? (
                  <span className={style.loadingRow}>
                    <CircularProgress size={18} color="inherit" />
                    Submitting…
                  </span>
                ) : (
                  <span>Submit</span>
                )}
              </button>

              {err ? <p className={style.formMessage}>{err}</p> : null}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
