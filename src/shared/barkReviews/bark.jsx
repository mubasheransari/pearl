// // "use client";
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
// //   Button
// // } from "@mui/material";
// // import { ChevronLeft, ChevronRight } from "@mui/icons-material";

// // // Reviews data
// // const reviews = [
// //   {
// //     name: "H. Karim",
// //     // date: "23 April 2025",
// //     text: `We took on the challenge of buying an auction property that was in a seriously bad state. Before going ahead, we got in touch with PEPP for a structural survey and a breakdown of what needed fixing. They came through with a super detailed report, covering literally everything, even the small stuff.

// // From there, they helped us with lending options, building regs, and all the structural packs we needed. Honestly, they were there for us every step of the way, making what could’ve been a stressful process so much easier.

// // Massive shoutout to Mojo for always being on point with his responses, proper lifesaver! Couldn’t have done it without you lot. Top-tier services soon we will be cracking on more projects.`,
// //   },
// // //   {
// // //     name: "Igor",
// // //     date: "23 April 2025",
// // //     text: "Very professional and sociable person. Gave a lot of useful advice and is always in touch.",
// // //   },
// //   {
// //     name: "Adil",
// //     // date: "12 December 2024",
// //     text: `Mojo was absolutely brilliant! He provided structural drawings with incredible speed and went above and beyond to offer advice and support throughout the project. His expertise and professionalism were outstanding. Offering great value for the exceptional service he delivered. Highly recommend!`,
// //   },
// //   {
// //     name: "Kamal",
// //     // date: "12 December 2024",
// //     text: `I hired Pepp for a house conversion project and have been very impressed from their work. It's been absolute pleasure working with Mojo. He has deep understanding of concepts related to structural integrity, planning process, and how everything then integrate into building works. Mojo has given many valuable suggestions which make overall project cost efficient. Would highly recommend them and would look forward to working with them again in future.`,
// //   },
// // //   {
// // //     name: "Tom Gallagher",
// // //     verified: true,
// // //     date: "11 November 2024",
// // //     subtitle: "Residential Building & Structural Surveyor",
// // //     text: `Muhammad and the team at Pearl completed the planning and building regs submission for my large rear extension in Cheam. Muhammad’s exemplary attention to detail meant we received unconditional approval from Sutton Council. His advice throughout proved to be very helpful, ensuring everything went smoothly.`,
// // //   },
// //   {
// //     name: "Bea Buan",
// //     // date: "12 October 2024",
// //     text: `I’ve recently hired Pearl engineers to be the structural engineers for my extension and renovation project. Right from the start, Mojo was very prompt in his responses to arrange a visit on the site and very clear on his explanations of what needs to be done. I feel like he’s really listened to all my queries and considerations.

// // Moreover, Mojo helped in finding the right contractors for the project. I have found that he was also always willing to help and quick with his responses for any queries that came about once the project had started.

// // Overall, I would recommend Pearl engineers and would use them again if the opportunity arises.`,
// //   },
// // //   {
// // //     name: "Thilan Madawalage",
// // //     date: "10 October 2024",
// // //     text: "Mojo provided an amazing service at a fair price. Stayed involved throughout the process and offered very helpful advice.",
// // //   },
// // //   {
// // //     name: "Aleksandra",
// // //     date: "25 September 2024",
// // //     text: "Very good service. We needed structural drawings done ASAP and Mojo did it quick and up to the standard. Highly recommended!",
// // //   },
// //   {
// //     name: "Ruth",
// //     // verified: true,
// //     // date: "5 September 2024",
// //     text: `I have used this company for a kitchen wall to be removed. Mohammed came and he has done a great job providing all the details needed, drawings and instructions for the builder to understand, but most of all he had completed all the drawings within two days to accommodate the urgency of the work. Thank you Mohammed.`,
// //   },
// //   {
// //     name: "Chhavi",
// //     // date: "29 May 2024",
// //     text: `I had Muhammad visit and provide structural designs and calculations for my work. I found him very professional and helpful. He explained things that I was not sure on and has been very helpful throughout the process and this far. We are waiting on the council approvals to complete the works. Thank you!! I highly recommend!!`,
// //   },
// //   {
// //     name: "Marisa Erftemeijer",
// //     // date: "27 May 2024",
// //     text: `Found weekend before builders arrived when we realised previous calculations had mistakes in them—agreed to job on Friday night and by Saturday had visited and advised with final plans in by Monday! Really appreciated their quick and last-minute support! Good value for money and felt in safe hands—would use again and recommend.`,
// //   },
// // ];

// // export default function BarkReview() {
// //   const [expandedIndex, setExpandedIndex] = useState(null);
// //   const toggleExpand = idx => {
// //     setExpandedIndex(prev => (prev === idx ? null : idx));
// //   };

// //   const show2 = useMediaQuery("(max-width:992px)");
// //   const show1 = useMediaQuery("(max-width:768px)");
// //   const slidesToShow = show1 ? 1 : show2 ? 2 : 3;

// //   const [index, setIndex] = useState(0);
// //   const maxIndex = reviews.length - slidesToShow;
// //   const timer = useRef();
// //   const maxLength = 200;

// //   const prev = () => {
// //     clearInterval(timer.current);
// //     setIndex(i => (i === 0 ? maxIndex : i - 1));
// //   };
// //   const next = () => {
// //     clearInterval(timer.current);
// //     setIndex(i => (i >= maxIndex ? 0 : i + 1));
// //   };

// //   return (
// //     <Box sx={{ maxWidth: 1400, mx: "auto", py: 4, px: 2 }}>
// //       <Typography variant="h4" align="center" gutterBottom>
// //         Bark Reviews
// //       </Typography>

// //       <Box sx={{ position: "relative", overflow: "hidden" }}>
// //         <Box
// //           sx={{
// //             display: "flex",
// //             transition: "transform 0.5s ease",
// //             transform: `translateX(-${(100 / slidesToShow) * index}%)`,
// //           }}
// //         >
// //           {reviews.map((review, idx) => {
// //             const isExpanded = expandedIndex === idx;
// //             const displayText =
// //               isExpanded || review.text.length <= maxLength
// //                 ? review.text
// //                 : review.text.slice(0, maxLength) + "…";

// //             return (
// //               <Box
// //                 key={idx}
// //                 sx={{
// //                   flex: `0 0 ${100 / slidesToShow}%`,
// //                   boxSizing: "border-box",
// //                   p: 1,
// //                 }}
// //               >
// //                 <Card elevation={3}>
// //                   <CardHeader
// //                     avatar={
// //                       review.verified && (
// //                         <Avatar sx={{ bgcolor: "primary.main", width: 32, height: 32 }}>
// //                           ✔︎
// //                         </Avatar>
// //                       )
// //                     }
// //                     title={review.name}
// //                     subheader={review.subtitle || review.date}
// //                     // subheader={review.subtitle || review.date}
// //                   />
// //                   <CardContent>
// //                     <Typography variant="body2" sx={{ mb: 1, whiteSpace: "pre-line" }}>
// //                       {displayText}
// //                     </Typography>
// //                     {review.text.length > maxLength && (
// //                       <Button size="small" onClick={() => toggleExpand(idx)}>
// //                         {isExpanded ? "Hide" : "See more"}
// //                       </Button>
// //                     )}
// //                     {!review.subtitle && (
// //                       <Typography
// //                         variant="caption"
// //                         color="text.secondary"
// //                         display="block"
// //                         sx={{ mt: 1 }}
// //                       >
// //                         {review.date}
// //                       </Typography>
// //                     )}
// //                   </CardContent>
// //                 </Card>
// //               </Box>
// //             );
// //           })}
// //         </Box>

// //         <IconButton
// //           onClick={prev}
// //           sx={{
// //             position: "absolute",
// //             top: "50%",
// //             left: -16,
// //             transform: "translateY(-50%)",
// //             bgcolor: "background.paper",
// //             boxShadow: 1,
// //             "&:hover": { bgcolor: "background.paper" },
// //           }}
// //         >
// //           <ChevronLeft />
// //         </IconButton>
// //         <IconButton
// //           onClick={next}
// //           sx={{
// //             position: "absolute",
// //             top: "50%",
// //             right: -16,
// //             transform: "translateY(-50%)",
// //             bgcolor: "background.paper",
// //             boxShadow: 1,
// //             "&:hover": { bgcolor: "background.paper" },
// //           }}
// //         >
// //           <ChevronRight />
// //         </IconButton>
// //       </Box>
// //     </Box>
// //   );
// // }
// "use client";
// import React, { useState, useRef, useMemo } from "react";
// import {
//   Box,
//   Typography,
//   IconButton,
//   useMediaQuery,
//   Card,
//   CardContent,
//   Avatar,
//   Button,
//   Chip,
//   Rating,
// } from "@mui/material";
// import { ChevronLeft, ChevronRight } from "@mui/icons-material";

// // Reviews data
// const reviews = [
//   {
//     name: "H. Karim",
//     text: `We took on the challenge of buying an auction property that was in a seriously bad state. Before going ahead, we got in touch with PEPP for a structural survey and a breakdown of what needed fixing. They came through with a super detailed report, covering literally everything, even the small stuff.

// From there, they helped us with lending options, building regs, and all the structural packs we needed. Honestly, they were there for us every step of the way, making what could’ve been a stressful process so much easier.

// Massive shoutout to Mojo for always being on point with his responses, proper lifesaver! Couldn’t have done it without you lot. Top-tier services soon we will be cracking on more projects.`,
//   },
//   {
//     name: "Adil",
//     text: `Mojo was absolutely brilliant! He provided structural drawings with incredible speed and went above and beyond to offer advice and support throughout the project. His expertise and professionalism were outstanding. Offering great value for the exceptional service he delivered. Highly recommend!`,
//   },
//   {
//     name: "Kamal",
//     text: `I hired Pepp for a house conversion project and have been very impressed from their work. It's been absolute pleasure working with Mojo. He has deep understanding of concepts related to structural integrity, planning process, and how everything then integrate into building works. Mojo has given many valuable suggestions which make overall project cost efficient. Would highly recommend them and would look forward to working with them again in future.`,
//   },
//   {
//     name: "Bea Buan",
//     text: `I’ve recently hired Pearl engineers to be the structural engineers for my extension and renovation project. Right from the start, Mojo was very prompt in his responses to arrange a visit on the site and very clear on his explanations of what needs to be done. I feel like he’s really listened to all my queries and considerations.

// Moreover, Mojo helped in finding the right contractors for the project. I have found that he was also always willing to help and quick with his responses for any queries that came about once the project had started.

// Overall, I would recommend Pearl engineers and would use them again if the opportunity arises.`,
//   },
//   {
//     name: "Ruth",
//     text: `I have used this company for a kitchen wall to be removed. Mohammed came and he has done a great job providing all the details needed, drawings and instructions for the builder to understand, but most of all he had completed all the drawings within two days to accommodate the urgency of the work. Thank you Mohammed.`,
//   },
//   {
//     name: "Chhavi",
//     text: `I had Muhammad visit and provide structural designs and calculations for my work. I found him very professional and helpful. He explained things that I was not sure on and has been very helpful throughout the process and this far. We are waiting on the council approvals to complete the works. Thank you!! I highly recommend!!`,
//   },
//   {
//     name: "Marisa Erftemeijer",
//     text: `Found weekend before builders arrived when we realised previous calculations had mistakes in them—agreed to job on Friday night and by Saturday had visited and advised with final plans in by Monday! Really appreciated their quick and last-minute support! Good value for money and felt in safe hands—would use again and recommend.`,
//   },
// ];

// // small helper: initials
// const initials = (name = "") =>
//   name
//     .split(" ")
//     .filter(Boolean)
//     .slice(0, 2)
//     .map((w) => w[0]?.toUpperCase())
//     .join("");

// export default function BarkReview() {
//   const [expandedIndex, setExpandedIndex] = useState(null);
//   const toggleExpand = (idx) => setExpandedIndex((prev) => (prev === idx ? null : idx));

//   const show2 = useMediaQuery("(max-width:992px)");
//   const show1 = useMediaQuery("(max-width:768px)");
//   const slidesToShow = show1 ? 1 : show2 ? 2 : 3;

//   const [index, setIndex] = useState(0);
//   const maxIndex = Math.max(0, reviews.length - slidesToShow);

//   const timer = useRef();
//   const maxLength = 220;

//   const prev = () => {
//     clearInterval(timer.current);
//     setIndex((i) => (i <= 0 ? maxIndex : i - 1));
//   };
//   const next = () => {
//     clearInterval(timer.current);
//     setIndex((i) => (i >= maxIndex ? 0 : i + 1));
//   };

//   // optional: summary header (keeps design consistent)
//   const summary = useMemo(() => {
//     // if you later add rating fields, this becomes real. for now, just show a nice static.
//     return { avg: 4.9, total: reviews.length };
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
//             "radial-gradient(900px 520px at 15% 5%, rgba(124,58,237,.14), transparent 60%), radial-gradient(900px 520px at 85% 45%, rgba(59,130,246,.10), transparent 62%), radial-gradient(900px 520px at 50% 95%, rgba(16,185,129,.08), transparent 60%)",
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
//               label="Verified client feedback"
//               size="small"
//               sx={{
//                 mb: 1,
//                 borderRadius: 99,
//                 fontWeight: 800,
//                 bgcolor: "rgba(17,24,39,.06)",
//               }}
//             />
//             <Typography
//               variant="h4"
//               sx={{ fontWeight: 950, letterSpacing: "-0.02em", lineHeight: 1.1 }}
//             >
//               Bark Reviews
//             </Typography>
//             <Typography sx={{ color: "text.secondary", mt: 1, maxWidth: 720 }}>
//               Real experiences from customers — clarity, speed and professional guidance throughout
//               the build journey.
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
//                 {summary.avg}/5
//               </Typography>
//               <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
//                 <Rating value={summary.avg} precision={0.1} readOnly size="small" />
//                 <Typography variant="caption" sx={{ color: "text.secondary" }}>
//                   ({summary.total} reviews)
//                 </Typography>
//               </Box>
//             </Box>

//             <Box sx={{ width: 1, alignSelf: "stretch", bgcolor: "rgba(17,24,39,.10)", mx: 0.5 }} />

//             <Button
//               href="/contact"
//               variant="contained"
//               sx={{
//                 textTransform: "none",
//                 borderRadius: 999,
//                 px: 2.2,
//                 fontWeight: 900,
//               }}
//             >
//               Contact us
//             </Button>
//           </Box>
//         </Box>

//         {/* Slider */}
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

//                 return (
//                   <Box
//                     key={idx}
//                     sx={{
//                       flex: `0 0 ${100 / slidesToShow}%`,
//                       boxSizing: "border-box",
//                       p: 1.25,
//                     }}
//                   >
//                     <Card
//                       elevation={0}
//                       sx={{
//                         height: "100%",
//                         borderRadius: 4,
//                         border: "1px solid rgba(17,24,39,.10)",
//                         bgcolor: "rgba(255,255,255,.86)",
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
//                         {/* Top row */}
//                         <Box
//                           sx={{
//                             display: "flex",
//                             alignItems: "center",
//                             justifyContent: "space-between",
//                             mb: 1.4,
//                             gap: 1.5,
//                           }}
//                         >
//                           <Box sx={{ display: "flex", alignItems: "center", gap: 1.2 }}>
//                             <Avatar
//                               sx={{
//                                 width: 44,
//                                 height: 44,
//                                 fontWeight: 950,
//                                 bgcolor: "rgba(124,58,237,.10)",
//                                 color: "rgba(17,24,39,.85)",
//                                 border: "2px solid rgba(124,58,237,.22)",
//                                 boxShadow: "0 12px 25px rgba(124,58,237,.12)",
//                               }}
//                             >
//                               {initials(review.name)}
//                             </Avatar>

//                             <Box>
//                               <Typography sx={{ fontWeight: 950, lineHeight: 1.1 }}>
//                                 {review.name}
//                               </Typography>

//                               <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
//                                 {/* If you add per-review rating later, replace value */}
//                                 <Rating value={5} readOnly size="small" />
//                                 {review.verified && (
//                                   <Chip
//                                     size="small"
//                                     label="Verified"
//                                     sx={{
//                                       height: 22,
//                                       fontSize: 11,
//                                       fontWeight: 900,
//                                       borderRadius: 99,
//                                       bgcolor: "rgba(16,185,129,.12)",
//                                       color: "rgba(17,24,39,.85)",
//                                     }}
//                                   />
//                                 )}
//                               </Box>
//                             </Box>
//                           </Box>

//                           <Box
//                             aria-hidden
//                             sx={{
//                               fontSize: 36,
//                               fontWeight: 950,
//                               lineHeight: 1,
//                               color: "rgba(17,24,39,.10)",
//                               userSelect: "none",
//                             }}
//                           >
//                             “
//                           </Box>
//                         </Box>

//                         {/* Review text */}
//                         <Typography
//                           sx={{
//                             color: "rgba(17,24,39,.85)",
//                             lineHeight: 1.7,
//                             fontSize: 14.5,
//                             whiteSpace: "pre-line",
//                             display: "-webkit-box",
//                             WebkitLineClamp: isExpanded ? "unset" : 6,
//                             WebkitBoxOrient: "vertical",
//                             overflow: "hidden",
//                           }}
//                         >
//                           {displayText}
//                         </Typography>

//                         {/* Bottom row */}
//                         <Box
//                           sx={{
//                             display: "flex",
//                             alignItems: "center",
//                             justifyContent: "space-between",
//                             mt: 1.75,
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
//                               {isExpanded ? "Show less" : "Read more"}
//                             </Button>
//                           ) : (
//                             <span />
//                           )}

//                           <Typography variant="caption" sx={{ color: "text.secondary" }}>
//                             {/* If you later add date field, show here */}
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
import React, { useState, useRef, useMemo } from "react";
import {
  Box,
  Typography,
  IconButton,
  useMediaQuery,
  Card,
  CardContent,
  Avatar,
  Button,
  Chip,
  Rating,
} from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

// Reviews data
const reviews = [
  {
    name: "H. Karim",
    text: `We took on the challenge of buying an auction property that was in a seriously bad state. Before going ahead, we got in touch with PEPP for a structural survey and a breakdown of what needed fixing. They came through with a super detailed report, covering literally everything, even the small stuff.

From there, they helped us with lending options, building regs, and all the structural packs we needed. Honestly, they were there for us every step of the way, making what could’ve been a stressful process so much easier.

Massive shoutout to Mojo for always being on point with his responses, proper lifesaver! Couldn’t have done it without you lot. Top-tier services soon we will be cracking on more projects.`,
  },
  {
    name: "Adil",
    text: `Mojo was absolutely brilliant! He provided structural drawings with incredible speed and went above and beyond to offer advice and support throughout the project. His expertise and professionalism were outstanding. Offering great value for the exceptional service he delivered. Highly recommend!`,
  },
  {
    name: "Kamal",
    text: `I hired Pepp for a house conversion project and have been very impressed from their work. It's been absolute pleasure working with Mojo. He has deep understanding of concepts related to structural integrity, planning process, and how everything then integrate into building works. Mojo has given many valuable suggestions which make overall project cost efficient. Would highly recommend them and would look forward to working with them again in future.`,
  },
  {
    name: "Bea Buan",
    text: `I’ve recently hired Pearl engineers to be the structural engineers for my extension and renovation project. Right from the start, Mojo was very prompt in his responses to arrange a visit on the site and very clear on his explanations of what needs to be done. I feel like he’s really listened to all my queries and considerations.

Moreover, Mojo helped in finding the right contractors for the project. I have found that he was also always willing to help and quick with his responses for any queries that came about once the project had started.

Overall, I would recommend Pearl engineers and would use them again if the opportunity arises.`,
  },
  {
    name: "Ruth",
    text: `I have used this company for a kitchen wall to be removed. Mohammed came and he has done a great job providing all the details needed, drawings and instructions for the builder to understand, but most of all he had completed all the drawings within two days to accommodate the urgency of the work. Thank you Mohammed.`,
  },
  {
    name: "Chhavi",
    text: `I had Muhammad visit and provide structural designs and calculations for my work. I found him very professional and helpful. He explained things that I was not sure on and has been very helpful throughout the process and this far. We are waiting on the council approvals to complete the works. Thank you!! I highly recommend!!`,
  },
  {
    name: "Marisa Erftemeijer",
    text: `Found weekend before builders arrived when we realised previous calculations had mistakes in them—agreed to job on Friday night and by Saturday had visited and advised with final plans in by Monday! Really appreciated their quick and last-minute support! Good value for money and felt in safe hands—would use again and recommend.`,
  },
];

// small helper: initials
const initials = (name = "") =>
  name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase())
    .join("");

export default function BarkReview() {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const toggleExpand = (idx) => setExpandedIndex((prev) => (prev === idx ? null : idx));

  const show2 = useMediaQuery("(max-width:992px)");
  const show1 = useMediaQuery("(max-width:768px)");
  const slidesToShow = show1 ? 1 : show2 ? 2 : 3;

  const [index, setIndex] = useState(0);
  const maxIndex = Math.max(0, reviews.length - slidesToShow);

  const timer = useRef();
  const maxLength = 220;

  const prev = () => {
    clearInterval(timer.current);
    setIndex((i) => (i <= 0 ? maxIndex : i - 1));
  };
  const next = () => {
    clearInterval(timer.current);
    setIndex((i) => (i >= maxIndex ? 0 : i + 1));
  };

  // summary header (static for now)
  const summary = useMemo(() => {
    return { avg: 4.9, total: reviews.length };
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
            "radial-gradient(900px 520px at 15% 5%, rgba(124,58,237,.14), transparent 60%), radial-gradient(900px 520px at 85% 45%, rgba(59,130,246,.10), transparent 62%), radial-gradient(900px 520px at 50% 95%, rgba(16,185,129,.08), transparent 60%)",
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
              label="Verified client feedback"
              size="small"
              sx={{
                mb: 1,
                borderRadius: 99,
                fontWeight: 800,
                bgcolor: "rgba(17,24,39,.06)",
              }}
            />
            <Typography
              variant="h4"
              sx={{ fontWeight: 950, letterSpacing: "-0.02em", lineHeight: 1.1 }}
            >
              Bark Reviews
            </Typography>
            <Typography sx={{ color: "text.secondary", mt: 1, maxWidth: 720 }}>
              Real experiences from customers — clarity, speed and professional guidance throughout
              the build journey.
            </Typography>
          </Box>

          {/* ✅ UPDATED: only rating summary (no grey divider, no button) */}
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 1.5,
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
              {summary.avg}/5
            </Typography>

            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Rating value={summary.avg} precision={0.1} readOnly size="small" />
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

                return (
                  <Box
                    key={idx}
                    sx={{
                      flex: `0 0 ${100 / slidesToShow}%`,
                      boxSizing: "border-box",
                      p: 1.25,
                    }}
                  >
                    <Card
                      elevation={0}
                      sx={{
                        height: "100%",
                        borderRadius: 4,
                        border: "1px solid rgba(17,24,39,.10)",
                        bgcolor: "rgba(255,255,255,.86)",
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
                        {/* Top row */}
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            mb: 1.4,
                            gap: 1.5,
                          }}
                        >
                          <Box sx={{ display: "flex", alignItems: "center", gap: 1.2 }}>
                            <Avatar
                              sx={{
                                width: 44,
                                height: 44,
                                fontWeight: 950,
                                bgcolor: "rgba(124,58,237,.10)",
                                color: "rgba(17,24,39,.85)",
                                border: "2px solid rgba(124,58,237,.22)",
                                boxShadow: "0 12px 25px rgba(124,58,237,.12)",
                              }}
                            >
                              {initials(review.name)}
                            </Avatar>

                            <Box>
                              <Typography sx={{ fontWeight: 950, lineHeight: 1.1 }}>
                                {review.name}
                              </Typography>

                              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                                <Rating value={5} readOnly size="small" />
                              </Box>
                            </Box>
                          </Box>

                          <Box
                            aria-hidden
                            sx={{
                              fontSize: 36,
                              fontWeight: 950,
                              lineHeight: 1,
                              color: "rgba(17,24,39,.10)",
                              userSelect: "none",
                            }}
                          >
                            “
                          </Box>
                        </Box>

                        {/* Review text */}
                        <Typography
                          sx={{
                            color: "rgba(17,24,39,.85)",
                            lineHeight: 1.7,
                            fontSize: 14.5,
                            whiteSpace: "pre-line",
                            display: "-webkit-box",
                            WebkitLineClamp: isExpanded ? "unset" : 6,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                          }}
                        >
                          {displayText}
                        </Typography>

                        {/* Bottom row */}
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            mt: 1.75,
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
                              {isExpanded ? "Show less" : "Read more"}
                            </Button>
                          ) : (
                            <span />
                          )}

                          <Typography variant="caption" sx={{ color: "text.secondary" }}>
                            {/* Date placeholder */}
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
