// // "use client"
// // import React, { useState, useRef } from "react";
// // import {
// //   Box,
// //   Typography,
// //   IconButton,
// //   useMediaQuery,
// //   Card,
// //   CardContent,
// //   CardHeader,
// //   Avatar,
// //   Button,
// //   Rating
// // } from "@mui/material";
// // import { ChevronLeft, ChevronRight } from "@mui/icons-material";

// // // Array of review objects
// // const reviews = [
// // //   { rating: 10, title: "Outside walls", text: "Mojo was a really nice man; brother had to get a structural engineer report to give to the home insurance — could not have been more helpful. Very happy with this company.", verified: true, date: "Posted 1 week ago", location: "DA15" },
// //   { rating: 10, title: "Loft Conversion Calculations", text: "Thank you, Muhammad. You’ve done an amazing job on my structural designs. I’m over the moon and you’ve also given an amazing price—honestly I can’t thank you enough. My job is now in progress. Thanks to you. I’ve had a really good experience. I will definitely be back and recommend you to all my friends and family.", verified: true, date: "Posted 16 May", location: "SS16" },
// // //   { rating: 8, title: "Extension", text: "Good experience.", verified: false, date: "Posted 15 May", location: "KT19" },
// // //   { rating: 10, title: "Croydon School Calculations", text: "They supplied multiple calculations required to allow structural works. Very quick and easy to respond. I’ve been in the building industry for 20 years and work in 50 schools in the Southeast and this is the first time I’ve found a structural engineer that is competent and can provide a speedy result. Will always use PEPP going forward.", verified: false, date: "Posted 13 May", location: "CR0" },
// //   { rating: 10, title: "Investment Property", text: "We took on the challenge of buying an auction property that was in a seriously bad state. Before going ahead, we got in touch with PEPP for a structural survey and a breakdown of what needed fixing. They came through with a super detailed report, covering literally everything, even the small stuff. From there, they helped us with lending options, building regs, and all the structural packs we needed. Honestly, they were there for us every step of the way, making what could’ve been a stressful process so much easier. Thanks a million.", verified: true, date: "Posted 23 April", location: "SW6" },
// // //   { rating: 10, title: "Side & Rear Extension (One)", text: "Mojo is very professional, helped me a lot to make the right decisions. Always in touch. Highly recommend!!!", verified: false, date: "Posted 23 April", location: "DA7" },
// // //   { rating: 10, title: "Side & Rear Extension (Two)", text: "Mojo knows what he’s doing. Very professional and sociable person. Gave a lot of useful advice and is always in touch. Highly recommend!!!", verified: true, date: "Posted 23 April", location: "DA7" },
// //   { rating: 9.33, title: "Side And Rear Extension", text: "Very clear and well-detailed structural drawings for the side and rear extension. The plans were easy to follow, accurate, and aligned perfectly with building regulations. Highly recommend for anyone needing reliable structural design work.", verified: true, date: "Posted 15 April", location: "CR5" },
// // //   { rating: 10, title: "Assessment of Wall Removal", text: "Mojo assessed how an internal wall could be safely removed. His communication was prompt and the final report was clear and comprehensive.", verified: true, date: "Posted 13 April", location: "SW11" },
// //   { rating: 10, title: "Rear Extension Survey", text: "I recently hired Pearl Engineers to carry out the structural survey and provide the necessary calculations for a rear extension to my home, and I’m so pleased with the service they provided. From my initial enquiry through to the final report, the team was consistently professional, efficient, and approachable. The structural engineer took the time to fully understand the scope of the project and was very thorough during the site visit. He was clear and reassuring in explaining what was required, which really helped me feel confident in moving forward with the build.", verified: true, date: "Posted 04 April", location: "KT22" },
// // //   { rating: 10, title: "Structural Survey", text: "Absolutely superb—quick, responsive and thorough. Will use again!", verified: false, date: "Posted 01 April", location: "SW2" },
// // //   { rating: 10, title: "Steel Beam Support", text: "Excellent service; Mojo is knowledgeable and experienced. His quick response and detailed explanation really helped out the process.", verified: true, date: "Posted 01 April", location: "BR6" },
// // //   { rating: 10, title: "Patio Door Lintel Survey", text: "Response to my request via Checkatrade was very prompt. An appointment was made and a report produced shortly after.", verified: true, date: "Posted 17 March", location: "SM2" },
// // //   { rating: 10, title: "Structural Survey Follow-up", text: "Mojo was so quick to respond to our enquiry, competitively priced, and came back with great availability and flexibility. Sadly our seller pulled out at the last minute; that’s the only reason we didn’t proceed. We will reach out to them in the future.", verified: false, date: "Posted 17 March", location: "BR7" },
// //   { rating: 10, title: "Kitchen Extension & Garage Refurbishment", text: "Mojo and his team provided excellent structural engineering services for my kitchen extension and garage refurbishment. They were responsive, addressing all my queries with clear, detailed answers. The drawings were thorough; adjustments like the skylight and lintel changes were made promptly. Communication was professional and timely throughout, and the final results were exactly what I needed. Highly recommend!", verified: true, date: "Posted 15 March", location: "DA10" },
// // //   { rating: 10, title: "Construction Project Drawings", text: "Great company and nice to work with. Highly recommend.", verified: true, date: "Posted 14 March", location: "DA5" },
// //   { rating: 10, title: "Damage Report", text: "Pearl Engineers and project managers: Highly recommended. Mojo was helpful, professional and informative from the first meeting. He provided very clear explanations of our building problems and excellent solutions. The report was extremely useful and prompt; he was supportive, always available by email or phone. Kind, friendly yet very professional. Our guardian angel! Very reliable and trustworthy. Would highly recommend.", verified: true, date: "Posted 11 March", location: "SW4" },
// //   { rating: 10, title: "Beams Calculation for Kitchen Remodeling", text: "The engineer understood our requirements and completed the work very swiftly. The building work has yet to start, but we are confident that if problems arise we can contact them for advice. The calculations appeared detailed and accurate.", verified: true, date: "Posted 23 February", location: "KT4" },
// //   { rating: 10, title: "Structural Plans", text: "Mojo was super communicative and speedy in booking the site survey and delivering the plans and report. All done within one week of contacting. He was also very responsive in answering any questions, queries, and changes I wanted to make to the plan. He even went above and beyond by recommending trusted builders.", verified: true, date: "Posted 23 February", location: "SE6" },
// //   { rating: 0.33, title: "Useless Survey Report", text: "We paid for a structural survey to aid a sale process, but the report was useless—basically saying ‘looks okay but ask building control to confirm.’ Why did we pay for that? I’d recommend it to my worst enemy to waste their money.", verified: true, date: "Posted 13 February", location: "BR5" }
// // ];

// // export default function CheckReview() {
// //   const [expandedIndex, setExpandedIndex] = useState(null);
// //   const toggleExpand = idx => setExpandedIndex(prev => (prev === idx ? null : idx));

// //   const show2 = useMediaQuery("(max-width:992px)");
// //   const show1 = useMediaQuery("(max-width:768px)");
// //   const slidesToShow = show1 ? 1 : show2 ? 2 : 3;

// //   const [index, setIndex] = useState(0);
// //   const maxIndex = reviews.length - slidesToShow;
// //   const maxLength = 200;

// //   const prev = () => setIndex(i => (i === 0 ? maxIndex : i - 1));
// //   const next = () => setIndex(i => (i >= maxIndex ? 0 : i + 1));

// //   return (
// //     <Box sx={{ maxWidth: 1400, mx: "auto", py: 4, px: 2 }}>
// //       <Typography variant="h4" align="center" gutterBottom>
// //         Checkatrade Reviews
// //       </Typography>
// //       <Box sx={{ position: "relative", overflow: "hidden" }}>
// //         <Box
// //           sx={{
// //             display: "flex",
// //             transition: "transform 0.5s ease",
// //             transform: `translateX(-${(100 / slidesToShow) * index}%)`
// //           }}
// //         >
// //           {reviews.map((review, idx) => {
// //             const isExpanded = expandedIndex === idx;
// //             const displayText = isExpanded || review.text.length <= maxLength
// //               ? review.text
// //               : `${review.text.slice(0, maxLength)}…`;

// //             return (
// //               <Box key={idx} sx={{ flex: `0 0 ${100 / slidesToShow}%`, p: 1 }}>
// //                 <Card elevation={3}>
// //                   <CardHeader
// //                     avatar={review.verified && <Avatar sx={{ bgcolor: "primary.main", width: 32, height: 32 }}>✔︎</Avatar>}
// //                     title={review.title}
// //                     subheader={review.location}
// //                   />
// //                   <CardContent>
// //                     <Rating value={review.rating / 2} precision={0.5} readOnly size="small" sx={{ mb: 1 }} />
// //                     <Typography variant="body2" sx={{ mb: 1, whiteSpace: "pre-line" }}>
// //                       {displayText}
// //                     </Typography>
// //                     {review.text.length > maxLength && (
// //                       <Button size="small" onClick={() => toggleExpand(idx)}>
// //                         {isExpanded ? "Hide" : "See more"}
// //                       </Button>
// //                     )}
// //                     {/* <Typography variant="caption" color="text.secondary" display="block" sx={{ mt: 1 }}>
// //                       {review.date}
// //                     </Typography> */}
// //                   </CardContent>
// //                 </Card>
// //               </Box>
// //             );
// //           })}
// //         </Box>
// //         <IconButton onClick={prev} sx={{ position: "absolute", top: "50%", left: -16, transform: "translateY(-50%)", bgcolor: "background.paper", boxShadow: 1, "&:hover": { bgcolor: "background.paper" } }}>
// //           <ChevronLeft />
// //         </IconButton>
// //         <IconButton onClick={next} sx={{ position: "absolute", top: "50%", right: -16, transform: "translateY(-50%)", bgcolor: "background.paper", boxShadow: 1, "&:hover": { bgcolor: "background.paper" } }}>
// //           <ChevronRight />
// //         </IconButton>
// //       </Box>
// //     </Box>
// //   );
// // }
// "use client";
// import React, { useMemo, useState } from "react";
// import {
//   Box,
//   Typography,
//   IconButton,
//   useMediaQuery,
//   Card,
//   CardContent,
//   Avatar,
//   Button,
//   Rating,
//   Chip,
// } from "@mui/material";
// import { ChevronLeft, ChevronRight } from "@mui/icons-material";

// // Array of review objects
// const reviews = [
//   {
//     rating: 10,
//     title: "Loft Conversion Calculations",
//     text: "Thank you, Muhammad. You’ve done an amazing job on my structural designs. I’m over the moon and you’ve also given an amazing price—honestly I can’t thank you enough. My job is now in progress. Thanks to you. I’ve had a really good experience. I will definitely be back and recommend you to all my friends and family.",
//     verified: true,
//     date: "Posted 16 May",
//     location: "SS16",
//   },
//   {
//     rating: 10,
//     title: "Investment Property",
//     text: "We took on the challenge of buying an auction property that was in a seriously bad state. Before going ahead, we got in touch with PEPP for a structural survey and a breakdown of what needed fixing. They came through with a super detailed report, covering literally everything, even the small stuff. From there, they helped us with lending options, building regs, and all the structural packs we needed. Honestly, they were there for us every step of the way, making what could’ve been a stressful process so much easier. Thanks a million.",
//     verified: true,
//     date: "Posted 23 April",
//     location: "SW6",
//   },
//   {
//     rating: 9.33,
//     title: "Side And Rear Extension",
//     text: "Very clear and well-detailed structural drawings for the side and rear extension. The plans were easy to follow, accurate, and aligned perfectly with building regulations. Highly recommend for anyone needing reliable structural design work.",
//     verified: true,
//     date: "Posted 15 April",
//     location: "CR5",
//   },
//   {
//     rating: 10,
//     title: "Rear Extension Survey",
//     text: "I recently hired Pearl Engineers to carry out the structural survey and provide the necessary calculations for a rear extension to my home, and I’m so pleased with the service they provided. From my initial enquiry through to the final report, the team was consistently professional, efficient, and approachable. The structural engineer took the time to fully understand the scope of the project and was very thorough during the site visit. He was clear and reassuring in explaining what was required, which really helped me feel confident in moving forward with the build.",
//     verified: true,
//     date: "Posted 04 April",
//     location: "KT22",
//   },
//   {
//     rating: 10,
//     title: "Kitchen Extension & Garage Refurbishment",
//     text: "Mojo and his team provided excellent structural engineering services for my kitchen extension and garage refurbishment. They were responsive, addressing all my queries with clear, detailed answers. The drawings were thorough; adjustments like the skylight and lintel changes were made promptly. Communication was professional and timely throughout, and the final results were exactly what I needed. Highly recommend!",
//     verified: true,
//     date: "Posted 15 March",
//     location: "DA10",
//   },
//   {
//     rating: 10,
//     title: "Damage Report",
//     text: "Pearl Engineers and project managers: Highly recommended. Mojo was helpful, professional and informative from the first meeting. He provided very clear explanations of our building problems and excellent solutions. The report was extremely useful and prompt; he was supportive, always available by email or phone. Kind, friendly yet very professional. Our guardian angel! Very reliable and trustworthy. Would highly recommend.",
//     verified: true,
//     date: "Posted 11 March",
//     location: "SW4",
//   },
//   {
//     rating: 10,
//     title: "Beams Calculation for Kitchen Remodeling",
//     text: "The engineer understood our requirements and completed the work very swiftly. The building work has yet to start, but we are confident that if problems arise we can contact them for advice. The calculations appeared detailed and accurate.",
//     verified: true,
//     date: "Posted 23 February",
//     location: "KT4",
//   },
//   {
//     rating: 10,
//     title: "Structural Plans",
//     text: "Mojo was super communicative and speedy in booking the site survey and delivering the plans and report. All done within one week of contacting. He was also very responsive in answering any questions, queries, and changes I wanted to make to the plan. He even went above and beyond by recommending trusted builders.",
//     verified: true,
//     date: "Posted 23 February",
//     location: "SE6",
//   },
//   {
//     rating: 0.33,
//     title: "Useless Survey Report",
//     text: "We paid for a structural survey to aid a sale process, but the report was useless—basically saying ‘looks okay but ask building control to confirm.’ Why did we pay for that? I’d recommend it to my worst enemy to waste their money.",
//     verified: true,
//     date: "Posted 13 February",
//     location: "BR5",
//   },
// ];

// export default function CheckReview() {
//   const [expandedIndex, setExpandedIndex] = useState(null);
//   const toggleExpand = (idx) =>
//     setExpandedIndex((prev) => (prev === idx ? null : idx));

//   const show2 = useMediaQuery("(max-width:992px)");
//   const show1 = useMediaQuery("(max-width:768px)");
//   const slidesToShow = show1 ? 1 : show2 ? 2 : 3;

//   const [index, setIndex] = useState(0);
//   const maxIndex = Math.max(0, reviews.length - slidesToShow);
//   const maxLength = 220;

//   const prev = () => setIndex((i) => (i <= 0 ? maxIndex : i - 1));
//   const next = () => setIndex((i) => (i >= maxIndex ? 0 : i + 1));

//   const summary = useMemo(() => {
//     const avg10 =
//       reviews.reduce((s, r) => s + (Number(r.rating) || 0), 0) /
//       Math.max(1, reviews.length);
//     const avg5 = avg10 / 2;
//     return {
//       avg10: Math.round(avg10 * 10) / 10,
//       avg5: Math.round(avg5 * 10) / 10,
//       total: reviews.length,
//     };
//   }, []);

//   return (
//     <Box
//       sx={{
//         position: "relative",
//         py: { xs: 7, md: 9 },
//         px: 2,
//         overflow: "hidden",
//       }}
//     >
//       {/* soft theme background */}
//       <Box
//         aria-hidden
//         sx={{
//           position: "absolute",
//           inset: 0,
//           pointerEvents: "none",
//           background:
//             "radial-gradient(900px 520px at 18% 10%, rgba(124,58,237,.12), transparent 60%), radial-gradient(900px 520px at 82% 45%, rgba(59,130,246,.10), transparent 62%), radial-gradient(900px 520px at 50% 92%, rgba(16,185,129,.08), transparent 60%)",
//         }}
//       />

//       <Box sx={{ position: "relative", maxWidth: 1200, mx: "auto" }}>
//         {/* Header */}
//         <Box
//           sx={{
//             display: "flex",
//             alignItems: { xs: "flex-start", md: "center" },
//             justifyContent: "space-between",
//             gap: 2,
//             mb: 3,
//             flexDirection: { xs: "column", md: "row" },
//           }}
//         >
//           <Box>
//             <Chip
//               label="Checkatrade"
//               size="small"
//               sx={{
//                 mb: 1,
//                 borderRadius: 99,
//                 fontWeight: 900,
//                 bgcolor: "rgba(17,24,39,.06)",
//               }}
//             />
//             <Typography
//               variant="h4"
//               sx={{
//                 fontWeight: 950,
//                 letterSpacing: "-0.02em",
//                 lineHeight: 1.1,
//               }}
//             >
//               Checkatrade Reviews
//             </Typography>
//             <Typography sx={{ color: "text.secondary", mt: 1, maxWidth: 720 }}>
//               Honest feedback from real clients — surveys, calculations and drawings delivered with
//               speed and clarity.
//             </Typography>
//           </Box>

//           {/* Summary box */}
//           <Box
//             sx={{
//               display: "flex",
//               alignItems: "center",
//               gap: 1.5,
//               p: 1.5,
//               borderRadius: 3,
//               bgcolor: "rgba(255,255,255,.75)",
//               border: "1px solid rgba(17,24,39,.08)",
//               backdropFilter: "blur(10px)",
//             }}
//           >
//             <Box>
//               <Typography sx={{ fontWeight: 950, fontSize: 22, lineHeight: 1 }}>
//                 {summary.avg10}/10
//               </Typography>
//               <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
//                 <Rating value={summary.avg5} precision={0.1} readOnly size="small" />
//                 <Typography variant="caption" sx={{ color: "text.secondary" }}>
//                   ({summary.total} reviews)
//                 </Typography>
//               </Box>
//             </Box>

//             <Box sx={{ width: 1, alignSelf: "stretch", bgcolor: "rgba(17,24,39,.10)", mx: 0.5 }} />

      
//           </Box>
//         </Box>

    
//         <Box sx={{ position: "relative" }}>
//           <Box sx={{ overflow: "hidden", borderRadius: 4 }}>
//             <Box
//               sx={{
//                 display: "flex",
//                 transition: "transform .55s cubic-bezier(.2,.8,.2,1)",
//                 transform: `translateX(-${(100 / slidesToShow) * index}%)`,
//               }}
//             >
//               {reviews.map((review, idx) => {
//                 const isExpanded = expandedIndex === idx;
//                 const text = review.text || "";
//                 const displayText =
//                   isExpanded || text.length <= maxLength
//                     ? text
//                     : text.slice(0, maxLength).trim() + "…";

//                 const isLow = Number(review.rating) <= 4; // subtle styling for the very low score

//                 return (
//                   <Box
//                     key={idx}
//                     sx={{
//                       flex: `0 0 ${100 / slidesToShow}%`,
//                       p: 1.25,
//                       boxSizing: "border-box",
//                     }}
//                   >
//                     <Card
//                       elevation={0}
//                       sx={{
//                         height: "100%",
//                         borderRadius: 4,
//                         border: "1px solid rgba(17,24,39,.10)",
//                         bgcolor: isLow ? "rgba(255, 247, 237, .88)" : "rgba(255,255,255,.86)",
//                         backdropFilter: "blur(10px)",
//                         overflow: "hidden",
//                         transition: "transform .25s ease, box-shadow .25s ease",
//                         "&:hover": {
//                           transform: "translateY(-4px)",
//                           boxShadow: "0 20px 45px rgba(0,0,0,.10)",
//                         },
//                       }}
//                     >
//                       <CardContent sx={{ p: 2.25 }}>
//                         {/* Top */}
//                         <Box
//                           sx={{
//                             display: "flex",
//                             alignItems: "flex-start",
//                             justifyContent: "space-between",
//                             gap: 1.5,
//                             mb: 1.2,
//                           }}
//                         >
//                           <Box sx={{ display: "flex", alignItems: "center", gap: 1.2 }}>
//                             {review.verified ? (
//                               <Avatar
//                                 sx={{
//                                   width: 44,
//                                   height: 44,
//                                   bgcolor: "rgba(16,185,129,.12)",
//                                   color: "rgba(17,24,39,.85)",
//                                   border: "2px solid rgba(16,185,129,.22)",
//                                   fontWeight: 950,
//                                 }}
//                               >
//                                 ✓
//                               </Avatar>
//                             ) : (
//                               <Avatar
//                                 sx={{
//                                   width: 44,
//                                   height: 44,
//                                   bgcolor: "rgba(124,58,237,.10)",
//                                   color: "rgba(17,24,39,.85)",
//                                   border: "2px solid rgba(124,58,237,.22)",
//                                   fontWeight: 950,
//                                 }}
//                               >
//                                 {String(review.location || "UK").slice(0, 2).toUpperCase()}
//                               </Avatar>
//                             )}

//                             <Box>
//                               <Typography sx={{ fontWeight: 950, lineHeight: 1.2 }}>
//                                 {review.title}
//                               </Typography>

//                               <Box
//                                 sx={{
//                                   display: "flex",
//                                   flexWrap: "wrap",
//                                   alignItems: "center",
//                                   gap: 0.8,
//                                   mt: 0.4,
//                                 }}
//                               >
//                                 <Chip
//                                   size="small"
//                                   label={review.location}
//                                   sx={{
//                                     height: 22,
//                                     fontSize: 11,
//                                     fontWeight: 900,
//                                     borderRadius: 99,
//                                     bgcolor: "rgba(17,24,39,.06)",
//                                   }}
//                                 />
//                                 {review.date ? (
//                                   <Typography variant="caption" sx={{ color: "text.secondary" }}>
//                                     {review.date}
//                                   </Typography>
//                                 ) : null}
//                               </Box>
//                             </Box>
//                           </Box>

//                           {/* Score pill */}
//                           <Chip
//                             label={`${Number(review.rating).toFixed(2).replace(/\.00$/, "")}/10`}
//                             size="small"
//                             sx={{
//                               height: 26,
//                               borderRadius: 99,
//                               fontWeight: 950,
//                               bgcolor: isLow ? "rgba(245, 158, 11, .12)" : "rgba(124,58,237,.12)",
//                               color: "rgba(17,24,39,.85)",
//                             }}
//                           />
//                         </Box>

//                         {/* Rating */}
//                         <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1.1 }}>
//                           <Rating
//                             value={Number(review.rating) / 2}
//                             precision={0.5}
//                             readOnly
//                             size="small"
//                           />
//                           {review.verified ? (
//                             <Chip
//                               label="Verified"
//                               size="small"
//                               sx={{
//                                 height: 22,
//                                 fontSize: 11,
//                                 fontWeight: 950,
//                                 borderRadius: 99,
//                                 bgcolor: "rgba(16,185,129,.12)",
//                                 color: "rgba(17,24,39,.85)",
//                               }}
//                             />
//                           ) : null}
//                         </Box>

//                         {/* Text */}
//                         <Typography
//                           variant="body2"
//                           sx={{
//                             color: "rgba(17,24,39,.85)",
//                             lineHeight: 1.7,
//                             whiteSpace: "pre-line",
//                             display: "-webkit-box",
//                             WebkitLineClamp: isExpanded ? "unset" : 6,
//                             WebkitBoxOrient: "vertical",
//                             overflow: "hidden",
//                           }}
//                         >
//                           {displayText}
//                         </Typography>

//                         {/* Actions */}
//                         <Box
//                           sx={{
//                             display: "flex",
//                             alignItems: "center",
//                             justifyContent: "space-between",
//                             mt: 1.6,
//                           }}
//                         >
//                           {text.length > maxLength ? (
//                             <Button
//                               size="small"
//                               onClick={() => toggleExpand(idx)}
//                               sx={{
//                                 textTransform: "none",
//                                 fontWeight: 900,
//                                 borderRadius: 999,
//                                 px: 1.6,
//                               }}
//                             >
//                               {isExpanded ? "Hide" : "See more"}
//                             </Button>
//                           ) : (
//                             <span />
//                           )}

//                           <Typography variant="caption" sx={{ color: "text.secondary" }}>
//                             {/* optional */}
//                           </Typography>
//                         </Box>
//                       </CardContent>
//                     </Card>
//                   </Box>
//                 );
//               })}
//             </Box>
//           </Box>

//           {/* Arrows */}
//           {maxIndex > 0 && (
//             <>
//               <IconButton
//                 onClick={prev}
//                 aria-label="Previous reviews"
//                 sx={{
//                   position: "absolute",
//                   top: "50%",
//                   left: { xs: 6, md: -10 },
//                   transform: "translateY(-50%)",
//                   bgcolor: "rgba(255,255,255,.92)",
//                   border: "1px solid rgba(17,24,39,.10)",
//                   boxShadow: "0 10px 25px rgba(0,0,0,.10)",
//                   backdropFilter: "blur(10px)",
//                   "&:hover": { bgcolor: "rgba(255,255,255,1)" },
//                 }}
//               >
//                 <ChevronLeft />
//               </IconButton>

//               <IconButton
//                 onClick={next}
//                 aria-label="Next reviews"
//                 sx={{
//                   position: "absolute",
//                   top: "50%",
//                   right: { xs: 6, md: -10 },
//                   transform: "translateY(-50%)",
//                   bgcolor: "rgba(255,255,255,.92)",
//                   border: "1px solid rgba(17,24,39,.10)",
//                   boxShadow: "0 10px 25px rgba(0,0,0,.10)",
//                   backdropFilter: "blur(10px)",
//                   "&:hover": { bgcolor: "rgba(255,255,255,1)" },
//                 }}
//               >
//                 <ChevronRight />
//               </IconButton>
//             </>
//           )}
//         </Box>

//         {/* Dots */}
//         {maxIndex > 0 && (
//           <Box sx={{ display: "flex", justifyContent: "center", gap: 1, mt: 2.5 }}>
//             {Array.from({ length: maxIndex + 1 }).map((_, i) => (
//               <Box
//                 key={i}
//                 onClick={() => setIndex(i)}
//                 role="button"
//                 aria-label={`Go to reviews page ${i + 1}`}
//                 tabIndex={0}
//                 sx={{
//                   width: i === index ? 22 : 8,
//                   height: 8,
//                   borderRadius: 999,
//                   bgcolor: i === index ? "rgba(124,58,237,.65)" : "rgba(17,24,39,.18)",
//                   transition: "all .2s ease",
//                   cursor: "pointer",
//                 }}
//               />
//             ))}
//           </Box>
//         )}
//       </Box>
//     </Box>
//   );
// }
"use client";
import React, { useMemo, useState } from "react";
import {
  Box,
  Typography,
  IconButton,
  useMediaQuery,
  Card,
  CardContent,
  Avatar,
  Button,
  Rating,
  Chip,
} from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

// Array of review objects
const reviews = [
  {
    rating: 10,
    title: "Loft Conversion Calculations",
    text: "Thank you, Muhammad. You’ve done an amazing job on my structural designs. I’m over the moon and you’ve also given an amazing price—honestly I can’t thank you enough. My job is now in progress. Thanks to you. I’ve had a really good experience. I will definitely be back and recommend you to all my friends and family.",
    verified: true,
    date: "Posted 16 May",
    location: "SS16",
  },
  {
    rating: 10,
    title: "Investment Property",
    text: "We took on the challenge of buying an auction property that was in a seriously bad state. Before going ahead, we got in touch with PEPP for a structural survey and a breakdown of what needed fixing. They came through with a super detailed report, covering literally everything, even the small stuff. From there, they helped us with lending options, building regs, and all the structural packs we needed. Honestly, they were there for us every step of the way, making what could’ve been a stressful process so much easier. Thanks a million.",
    verified: true,
    date: "Posted 23 April",
    location: "SW6",
  },
  {
    rating: 9.33,
    title: "Side And Rear Extension",
    text: "Very clear and well-detailed structural drawings for the side and rear extension. The plans were easy to follow, accurate, and aligned perfectly with building regulations. Highly recommend for anyone needing reliable structural design work.",
    verified: true,
    date: "Posted 15 April",
    location: "CR5",
  },
  {
    rating: 10,
    title: "Rear Extension Survey",
    text: "I recently hired Pearl Engineers to carry out the structural survey and provide the necessary calculations for a rear extension to my home, and I’m so pleased with the service they provided. From my initial enquiry through to the final report, the team was consistently professional, efficient, and approachable. The structural engineer took the time to fully understand the scope of the project and was very thorough during the site visit. He was clear and reassuring in explaining what was required, which really helped me feel confident in moving forward with the build.",
    verified: true,
    date: "Posted 04 April",
    location: "KT22",
  },
  {
    rating: 10,
    title: "Kitchen Extension & Garage Refurbishment",
    text: "Mojo and his team provided excellent structural engineering services for my kitchen extension and garage refurbishment. They were responsive, addressing all my queries with clear, detailed answers. The drawings were thorough; adjustments like the skylight and lintel changes were made promptly. Communication was professional and timely throughout, and the final results were exactly what I needed. Highly recommend!",
    verified: true,
    date: "Posted 15 March",
    location: "DA10",
  },
  {
    rating: 10,
    title: "Damage Report",
    text: "Pearl Engineers and project managers: Highly recommended. Mojo was helpful, professional and informative from the first meeting. He provided very clear explanations of our building problems and excellent solutions. The report was extremely useful and prompt; he was supportive, always available by email or phone. Kind, friendly yet very professional. Our guardian angel! Very reliable and trustworthy. Would highly recommend.",
    verified: true,
    date: "Posted 11 March",
    location: "SW4",
  },
  {
    rating: 10,
    title: "Beams Calculation for Kitchen Remodeling",
    text: "The engineer understood our requirements and completed the work very swiftly. The building work has yet to start, but we are confident that if problems arise we can contact them for advice. The calculations appeared detailed and accurate.",
    verified: true,
    date: "Posted 23 February",
    location: "KT4",
  },
  {
    rating: 10,
    title: "Structural Plans",
    text: "Mojo was super communicative and speedy in booking the site survey and delivering the plans and report. All done within one week of contacting. He was also very responsive in answering any questions, queries, and changes I wanted to make to the plan. He even went above and beyond by recommending trusted builders.",
    verified: true,
    date: "Posted 23 February",
    location: "SE6",
  },
  {
    rating: 0.33,
    title: "Useless Survey Report",
    text: "We paid for a structural survey to aid a sale process, but the report was useless—basically saying ‘looks okay but ask building control to confirm.’ Why did we pay for that? I’d recommend it to my worst enemy to waste their money.",
    verified: true,
    date: "Posted 13 February",
    location: "BR5",
  },
];

export default function CheckReview() {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const toggleExpand = (idx) =>
    setExpandedIndex((prev) => (prev === idx ? null : idx));

  const show2 = useMediaQuery("(max-width:992px)");
  const show1 = useMediaQuery("(max-width:768px)");
  const slidesToShow = show1 ? 1 : show2 ? 2 : 3;

  const [index, setIndex] = useState(0);
  const maxIndex = Math.max(0, reviews.length - slidesToShow);
  const maxLength = 220;

  const prev = () => setIndex((i) => (i <= 0 ? maxIndex : i - 1));
  const next = () => setIndex((i) => (i >= maxIndex ? 0 : i + 1));

  const summary = useMemo(() => {
    const avg10 =
      reviews.reduce((s, r) => s + (Number(r.rating) || 0), 0) /
      Math.max(1, reviews.length);
    const avg5 = avg10 / 2;
    return {
      avg10: Math.round(avg10 * 10) / 10,
      avg5: Math.round(avg5 * 10) / 10,
      total: reviews.length,
    };
  }, []);

  return (
    <Box
      sx={{
        position: "relative",
        py: { xs: 7, md: 9 },
        px: 2,
        overflow: "hidden",
      }}
    >
      {/* soft theme background */}
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background:
            "radial-gradient(900px 520px at 18% 10%, rgba(124,58,237,.12), transparent 60%), radial-gradient(900px 520px at 82% 45%, rgba(59,130,246,.10), transparent 62%), radial-gradient(900px 520px at 50% 92%, rgba(16,185,129,.08), transparent 60%)",
        }}
      />

      <Box sx={{ position: "relative", maxWidth: 1200, mx: "auto" }}>
        {/* Header */}
        <Box
          sx={{
            display: "flex",
            alignItems: { xs: "flex-start", md: "center" },
            justifyContent: "space-between",
            gap: 2,
            mb: 3,
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <Box>
            <Chip
              label="Checkatrade"
              size="small"
              sx={{
                mb: 1,
                borderRadius: 99,
                fontWeight: 900,
                bgcolor: "rgba(17,24,39,.06)",
              }}
            />
            <Typography
              variant="h4"
              sx={{
                fontWeight: 950,
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
              }}
            >
              Checkatrade Reviews
            </Typography>
            <Typography sx={{ color: "text.secondary", mt: 1, maxWidth: 720 }}>
              Honest feedback from real clients — surveys, calculations and drawings delivered with
              speed and clarity.
            </Typography>
          </Box>

          {/* ✅ UPDATED SUMMARY (no divider, no empty right side) */}
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 1.4,
              px: 2.2,
              py: 1.4,
              borderRadius: 999,
              bgcolor: "rgba(255,255,255,.78)",
              border: "1px solid rgba(17,24,39,.08)",
              backdropFilter: "blur(10px)",
              boxShadow: "0 14px 35px rgba(0,0,0,.08)",
            }}
          >
            <Typography sx={{ fontWeight: 950, fontSize: 26, lineHeight: 1 }}>
              {summary.avg10}/10
            </Typography>

            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Rating value={summary.avg5} precision={0.1} readOnly size="small" />
              <Typography variant="caption" sx={{ color: "text.secondary", fontWeight: 700 }}>
                ({summary.total} reviews)
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Slider */}
        <Box sx={{ position: "relative" }}>
          <Box sx={{ overflow: "hidden", borderRadius: 4 }}>
            <Box
              sx={{
                display: "flex",
                transition: "transform .55s cubic-bezier(.2,.8,.2,1)",
                transform: `translateX(-${(100 / slidesToShow) * index}%)`,
              }}
            >
              {reviews.map((review, idx) => {
                const isExpanded = expandedIndex === idx;
                const text = review.text || "";
                const displayText =
                  isExpanded || text.length <= maxLength
                    ? text
                    : text.slice(0, maxLength).trim() + "…";

                const isLow = Number(review.rating) <= 4;

                return (
                  <Box
                    key={idx}
                    sx={{
                      flex: `0 0 ${100 / slidesToShow}%`,
                      p: 1.25,
                      boxSizing: "border-box",
                    }}
                  >
                    <Card
                      elevation={0}
                      sx={{
                        height: "100%",
                        borderRadius: 4,
                        border: "1px solid rgba(17,24,39,.10)",
                        bgcolor: isLow ? "rgba(255, 247, 237, .88)" : "rgba(255,255,255,.86)",
                        backdropFilter: "blur(10px)",
                        overflow: "hidden",
                        transition: "transform .25s ease, box-shadow .25s ease",
                        "&:hover": {
                          transform: "translateY(-4px)",
                          boxShadow: "0 20px 45px rgba(0,0,0,.10)",
                        },
                      }}
                    >
                      <CardContent sx={{ p: 2.25 }}>
                        {/* Top */}
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "flex-start",
                            justifyContent: "space-between",
                            gap: 1.5,
                            mb: 1.2,
                          }}
                        >
                          <Box sx={{ display: "flex", alignItems: "center", gap: 1.2 }}>
                            {review.verified ? (
                              <Avatar
                                sx={{
                                  width: 44,
                                  height: 44,
                                  bgcolor: "rgba(16,185,129,.12)",
                                  color: "rgba(17,24,39,.85)",
                                  border: "2px solid rgba(16,185,129,.22)",
                                  fontWeight: 950,
                                }}
                              >
                                ✓
                              </Avatar>
                            ) : (
                              <Avatar
                                sx={{
                                  width: 44,
                                  height: 44,
                                  bgcolor: "rgba(124,58,237,.10)",
                                  color: "rgba(17,24,39,.85)",
                                  border: "2px solid rgba(124,58,237,.22)",
                                  fontWeight: 950,
                                }}
                              >
                                {String(review.location || "UK").slice(0, 2).toUpperCase()}
                              </Avatar>
                            )}

                            <Box>
                              <Typography sx={{ fontWeight: 950, lineHeight: 1.2 }}>
                                {review.title}
                              </Typography>

                              <Box
                                sx={{
                                  display: "flex",
                                  flexWrap: "wrap",
                                  alignItems: "center",
                                  gap: 0.8,
                                  mt: 0.4,
                                }}
                              >
                                <Chip
                                  size="small"
                                  label={review.location}
                                  sx={{
                                    height: 22,
                                    fontSize: 11,
                                    fontWeight: 900,
                                    borderRadius: 99,
                                    bgcolor: "rgba(17,24,39,.06)",
                                  }}
                                />
                                {review.date ? (
                                  <Typography variant="caption" sx={{ color: "text.secondary" }}>
                                    {review.date}
                                  </Typography>
                                ) : null}
                              </Box>
                            </Box>
                          </Box>

                          {/* Score pill */}
                          <Chip
                            label={`${Number(review.rating).toFixed(2).replace(/\.00$/, "")}/10`}
                            size="small"
                            sx={{
                              height: 26,
                              borderRadius: 99,
                              fontWeight: 950,
                              bgcolor: isLow ? "rgba(245, 158, 11, .12)" : "rgba(124,58,237,.12)",
                              color: "rgba(17,24,39,.85)",
                            }}
                          />
                        </Box>

                        {/* Rating */}
                        <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1.1 }}>
                          <Rating
                            value={Number(review.rating) / 2}
                            precision={0.5}
                            readOnly
                            size="small"
                          />
                          {review.verified ? (
                            <Chip
                              label="Verified"
                              size="small"
                              sx={{
                                height: 22,
                                fontSize: 11,
                                fontWeight: 950,
                                borderRadius: 99,
                                bgcolor: "rgba(16,185,129,.12)",
                                color: "rgba(17,24,39,.85)",
                              }}
                            />
                          ) : null}
                        </Box>

                        {/* Text */}
                        <Typography
                          variant="body2"
                          sx={{
                            color: "rgba(17,24,39,.85)",
                            lineHeight: 1.7,
                            whiteSpace: "pre-line",
                            display: "-webkit-box",
                            WebkitLineClamp: isExpanded ? "unset" : 6,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                          }}
                        >
                          {displayText}
                        </Typography>

                        {/* Actions */}
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            mt: 1.6,
                          }}
                        >
                          {text.length > maxLength ? (
                            <Button
                              size="small"
                              onClick={() => toggleExpand(idx)}
                              sx={{
                                textTransform: "none",
                                fontWeight: 900,
                                borderRadius: 999,
                                px: 1.6,
                              }}
                            >
                              {isExpanded ? "Hide" : "See more"}
                            </Button>
                          ) : (
                            <span />
                          )}

                          <Typography variant="caption" sx={{ color: "text.secondary" }}>
                            {/* optional */}
                          </Typography>
                        </Box>
                      </CardContent>
                    </Card>
                  </Box>
                );
              })}
            </Box>
          </Box>

          {/* Arrows */}
          {maxIndex > 0 && (
            <>
              <IconButton
                onClick={prev}
                aria-label="Previous reviews"
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: { xs: 6, md: -10 },
                  transform: "translateY(-50%)",
                  bgcolor: "rgba(255,255,255,.92)",
                  border: "1px solid rgba(17,24,39,.10)",
                  boxShadow: "0 10px 25px rgba(0,0,0,.10)",
                  backdropFilter: "blur(10px)",
                  "&:hover": { bgcolor: "rgba(255,255,255,1)" },
                }}
              >
                <ChevronLeft />
              </IconButton>

              <IconButton
                onClick={next}
                aria-label="Next reviews"
                sx={{
                  position: "absolute",
                  top: "50%",
                  right: { xs: 6, md: -10 },
                  transform: "translateY(-50%)",
                  bgcolor: "rgba(255,255,255,.92)",
                  border: "1px solid rgba(17,24,39,.10)",
                  boxShadow: "0 10px 25px rgba(0,0,0,.10)",
                  backdropFilter: "blur(10px)",
                  "&:hover": { bgcolor: "rgba(255,255,255,1)" },
                }}
              >
                <ChevronRight />
              </IconButton>
            </>
          )}
        </Box>

        {/* Dots */}
        {maxIndex > 0 && (
          <Box sx={{ display: "flex", justifyContent: "center", gap: 1, mt: 2.5 }}>
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <Box
                key={i}
                onClick={() => setIndex(i)}
                role="button"
                aria-label={`Go to reviews page ${i + 1}`}
                tabIndex={0}
                sx={{
                  width: i === index ? 22 : 8,
                  height: 8,
                  borderRadius: 999,
                  bgcolor: i === index ? "rgba(124,58,237,.65)" : "rgba(17,24,39,.18)",
                  transition: "all .2s ease",
                  cursor: "pointer",
                }}
              />
            ))}
          </Box>
        )}
      </Box>
    </Box>
  );
}
