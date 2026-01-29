// "use client";
// import React, { useMemo, useRef, useState } from "react";
// import {
//   Avatar,
//   Box,
//   Button,
//   Card,
//   CardContent,
//   Chip,
//   IconButton,
//   Rating,
//   Typography,
//   useMediaQuery,
// } from "@mui/material";
// import { ChevronLeft, ChevronRight } from "@mui/icons-material";

// const reviews = [
//   {
//     name: "ASDB LTD",
//     rating: 5.0,
//     reviewCount: 2,
//     reviewText:
//       "Very clear and well-detailed structural drawings for the side and rear extension. The plans were easy to follow, accurate, and aligned perfectly with building regulations. Highly recommend for anyone needing reliable structural design work.",
//     timeAgo: "4 month ago",
//     image: "asdb.png",
//   },
//   {
//     name: "Gert Meneri",
//     rating: 5.0,
//     reviewCount: 3,
//     reviewText:
//       "Pearl Engineers Planners and Project Managers, where the structural engineers for my loft conversion project. I dealt with Mojo and to this day, I haven't come across any company or individual who where more accommodating than him. I was impressed when he came over for a site visit, on the same day that I called and enquired about their services. He came on site two more times when there were issues when we took out the chimney breast and the drawings had to be revised. He made the necessary changes without charging extra. What also was amazing about him, is the fact that he answered most questions I made through messages, in a matter of minutes. I never had to wait next day for a response. I have already recommended him to other friends who required his kind of services and will definitely contract him again in the future.",
//     timeAgo: "now week ago",
//     image: "g.png",
//   },
//   {
//     name: "EBEC Assistant",
//     rating: 5.0,
//     reviewCount: 7,
//     reviewText:
//       "Mojo was very helpful and precise in the explanations. He arrived perfectly on time and he was able to come for a site visit with a very small notice, because we were in a hurry. Thank you, we will surely call back if there will be other issues.",
//     timeAgo: "4 month ago",
//     image: "ebec.png",
//   },
//   {
//     name: "marcus “MW”",
//     rating: 4.8,
//     reviewCount: 4,
//     reviewText:
//       "Pearl Engineers and project managers: Highly recommended. Mojo was helpful, professional and informative from the first meeting. He provided very clear explanation of the nature of our building problems and excellent solutions. The report was extremely useful and prompt, he was very supportive, always available by e-mail or phone. Kind, friendly yet very professional, clear and forthright representing us. Our guardian angel! Very reliable and trustworthy, We would highly recommend his work and this company to anyone.",
//     timeAgo: "a month ago",
//     image: "review3.png",
//   },
//   {
//     name: "Richard Long",
//     rating: 5.0,
//     reviewCount: 48,
//     reviewText:
//       "We have worked with Mojo and his team on a few projects now and can honestly say their work and professionalism is unrivalled in the industry. Thank you again and we look forward to working with you on the next project",
//     timeAgo: "2 months ago",
//     image: "richard.png",
//   },
//   {
//     name: "Nick Goodson",
//     rating: 5.0,
//     reviewCount: 2,
//     reviewText:
//       "Recently used Pearl for a kitchen lintel spec and found well priced and competent service. Very easy to contact and quick to assist. Will continue to use Mojo on all following projects. Kitchen fitter of 20 years plus experience.",
//     timeAgo: "2 week ago",
//     image: "n.png",
//   },
//   {
//     name: "Krupali Patel",
//     rating: 4.9,
//     reviewCount: 24,
//     reviewText:
//       "Working with Mojo has been an absolute pleasure. From the start, he has shown genuine interest and a strong duty of care to ensure that our build progresses smoothly without delays or complications. His responsiveness, dedication, and continuous support have been invaluable in managing our complex project. Mojo is always willing to assist, providing practical and suitable options to tackle challenges effectively. His expertise and problem-solving skills make a real difference, and it's clear that he truly cares about the success of the project. I would highly recommend Mojo and his team to anyone looking for a knowledgeable, reliable, and proactive structural engineer. We will definitely continue working with him on future builds! Thank you, Mojo, for your unwavering support and professionalism!",
//     timeAgo: "2 years ago",
//     image: "/unnamed.png",
//   },
//   {
//     name: "Babur Moghul",
//     rating: 4.7,
//     reviewCount: 7,
//     reviewText:
//       "I would 100% recommend Pearl Engineers for a structural survey before purchasing a new property if you are unsure about some aspects of the building (in my case some cracks in walls). They are fast to communicate throughout the whole process, can set up a survey quickly, and can deliver a detailed and in-depth survey within a day. What I really appreciated was how Mojo took the time to answer questions especially after the survey uncovered some previously undetected issues, and we set up a post-survey call where he explained what kind of repairs would be required, and an estimate of the costs. My experience has been this is a company you can trust to provide you the answers you need and in my case has saved me from thousands of pounds in repair work, which in itself makes booking in the survey an extremely sound investment.",
//     timeAgo: "a month ago",
//     image: "review4.png",
//   },
//   {
//     name: "Gert Meneri",
//     rating: 5.0,
//     reviewCount: 3,
//     reviewText:
//       "Pearl Engineers Planners and Project Managers, where the structural engineers for my loft conversion project. I dealt with Mojo and to this day, I haven't come across any company or individual who where more accommodating than him. I was impressed when he came over for a site visit, on the same day that I called and enquired about their services. He came on site two more times when there were issues when we took out the chimney breast and the drawings had to be revised. He made the necessary changes without charging extra. What also was amazing about him, is the fact that he answered most questions I made through messages, in a matter of minutes. I never had to wait next day for a response. I have already recommended him to other friends who required his kind of services and will definitely contract him again in the future.",
//     timeAgo: "3 months ago",
//     image: "review8.png",
//   },
// ];

// export default function ReviewSection() {
//   const isMd = useMediaQuery("(max-width:992px)");
//   const isSm = useMediaQuery("(max-width:768px)");
//   const slidesToShow = isSm ? 1 : isMd ? 2 : 3;

//   const [index, setIndex] = useState(0);
//   const [expandedIndex, setExpandedIndex] = useState(null);

//   const maxIndex = Math.max(0, reviews.length - slidesToShow);
//   const timer = useRef(null);

//   const summary = useMemo(() => {
//     const total = reviews.reduce((s, r) => s + (r.reviewCount || 0), 0);
//     const avg =
//       reviews.reduce((s, r) => s + (r.rating || 0), 0) /
//       Math.max(1, reviews.length);
//     return { avg: Math.round(avg * 10) / 10, total };
//   }, []);

//   const stopTimer = () => {
//     if (timer.current) clearInterval(timer.current);
//     timer.current = null;
//   };

//   const prev = () => {
//     stopTimer();
//     setIndex((i) => (i <= 0 ? maxIndex : i - 1));
//   };

//   const next = () => {
//     stopTimer();
//     setIndex((i) => (i >= maxIndex ? 0 : i + 1));
//   };

//   const toggleExpand = (idx) => setExpandedIndex((p) => (p === idx ? null : idx));

//   const maxLength = 220;

//   return (
//     <Box
//       sx={{
//         position: "relative",
//         py: { xs: 7, md: 9 },
//         px: 2,
//         overflow: "hidden",
//       }}
//     >
//       <Box
//         aria-hidden
//         sx={{
//           position: "absolute",
//           inset: 0,
//           pointerEvents: "none",
//           background:
//             "radial-gradient(900px 500px at 20% 10%, rgba(0,64,143,.14), transparent 60%), radial-gradient(900px 500px at 80% 40%, rgba(59,130,246,.10), transparent 60%), radial-gradient(900px 500px at 50% 90%, rgba(16,185,129,.09), transparent 60%)",
//         }}
//       />

//       <Box sx={{ position: "relative", maxWidth: 1200, mx: "auto" }}>
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
//               label="Trusted by clients"
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
//               sx={{
//                 fontWeight: 900,
//                 letterSpacing: "-0.02em",
//                 lineHeight: 1.1,
//               }}
//             >
//               Google Reviews
//             </Typography>
//             <Typography sx={{ color: "text.secondary", mt: 1, maxWidth: 680 }}>
//               Real feedback from homeowners, builders and businesses — quality, speed and clarity in every
//               report and drawing.
//             </Typography>
//           </Box>

//           <Box
//             sx={{
//               display: "flex",
//               alignItems: "center",
//               gap: 1.5,
//               p: 1.5,
//               borderRadius: 3,
//               bgcolor: "rgba(255,255,255,.72)",
//               border: "1px solid rgba(17,24,39,.08)",
//               backdropFilter: "blur(10px)",
//             }}
//           >
//             <Box>
//               <Typography sx={{ fontWeight: 900, fontSize: 22, lineHeight: 1 }}>
//                 {summary.avg}/5
//               </Typography>
//               <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
//                 <Rating value={summary.avg} precision={0.1} readOnly size="small" />
//                 <Typography variant="caption" sx={{ color: "text.secondary" }}>
//                   ({summary.total}+)
//                 </Typography>
//               </Box>
//             </Box>

//             <Box
//               sx={{
//                 width: 1,
//                 alignSelf: "stretch",
//                 bgcolor: "rgba(17,24,39,.10)",
//                 mx: 0.5,
//               }}
//             />

//             <Button
//               href="/contact"
//               variant="contained"
//               sx={{
//                 textTransform: "none",
//                 borderRadius: 999,
//                 px: 2.2,
//                 fontWeight: 900,
//                 background: "linear-gradient(90deg, #00408f, #1b74e4)",
//               }}
//             >
//               Get a quote
//             </Button>
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
//                 const text = review.reviewText || "";
//                 const displayText =
//                   isExpanded || text.length <= maxLength
//                     ? text
//                     : text.slice(0, maxLength).trim() + "…";

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
//                         <Box
//                           sx={{
//                             display: "flex",
//                             alignItems: "center",
//                             justifyContent: "space-between",
//                             mb: 1.5,
//                             gap: 1.5,
//                           }}
//                         >
//                           <Box sx={{ display: "flex", alignItems: "center", gap: 1.2 }}>
//                             <Avatar
//                               src={review.image}
//                               alt={review.name}
//                               sx={{
//                                 width: 44,
//                                 height: 44,
//                                 border: "2px solid rgba(0,64,143,.20)",
//                                 boxShadow: "0 12px 25px rgba(0,64,143,.12)",
//                               }}
//                             />
//                             <Box>
//                               <Typography sx={{ fontWeight: 900, lineHeight: 1.1 }}>
//                                 {review.name}
//                               </Typography>
//                               <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
//                                 <Rating value={review.rating} precision={0.1} readOnly size="small" />
//                                 <Typography variant="caption" sx={{ color: "text.secondary" }}>
//                                   {/* ({review.reviewCount}) */}
//                                 </Typography>
//                               </Box>
//                             </Box>
//                           </Box>

//                           <Box
//                             aria-hidden
//                             sx={{
//                               fontSize: 36,
//                               fontWeight: 900,
//                               lineHeight: 1,
//                               color: "rgba(17,24,39,.10)",
//                               userSelect: "none",
//                             }}
//                           >
//                             “
//                           </Box>
//                         </Box>

//                         <Typography
//                           sx={{
//                             color: "rgba(17,24,39,.86)",
//                             lineHeight: 1.7,
//                             fontSize: 14.5,
//                             display: "-webkit-box",
//                             WebkitLineClamp: isExpanded ? "unset" : 5,
//                             WebkitBoxOrient: "vertical",
//                             overflow: "hidden",
//                           }}
//                         >
//                           {displayText}
//                         </Typography>

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
//                             {/* {review.timeAgo} */}
//                           </Typography>
//                         </Box>
//                       </CardContent>
//                     </Card>
//                   </Box>
//                 );
//               })}
//             </Box>
//           </Box>

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
//                   "&:hover": { bgcolor: "rgba(255,255,255,1)" },
//                 }}
//               >
//                 <ChevronRight />
//               </IconButton>
//             </>
//           )}
//         </Box>

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
//                   bgcolor: i === index ? "rgba(0,64,143,.65)" : "rgba(17,24,39,.18)",
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
import React, { useMemo, useRef, useState } from "react";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Chip,
  IconButton,
  Rating,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

const reviews = [
  {
    name: "ASDB LTD",
    rating: 5.0,
    reviewCount: 2,
    reviewText:
      "Very clear and well-detailed structural drawings for the side and rear extension. The plans were easy to follow, accurate, and aligned perfectly with building regulations. Highly recommend for anyone needing reliable structural design work.",
    timeAgo: "4 month ago",
    image: "asdb.png",
  },
  {
    name: "Gert Meneri",
    rating: 5.0,
    reviewCount: 3,
    reviewText:
      "Pearl Engineers Planners and Project Managers, where the structural engineers for my loft conversion project. I dealt with Mojo and to this day, I haven't come across any company or individual who where more accommodating than him. I was impressed when he came over for a site visit, on the same day that I called and enquired about their services. He came on site two more times when there were issues when we took out the chimney breast and the drawings had to be revised. He made the necessary changes without charging extra. What also was amazing about him, is the fact that he answered most questions I made through messages, in a matter of minutes. I never had to wait next day for a response. I have already recommended him to other friends who required his kind of services and will definitely contract him again in the future.",
    timeAgo: "now week ago",
    image: "g.png",
  },
  {
    name: "EBEC Assistant",
    rating: 5.0,
    reviewCount: 7,
    reviewText:
      "Mojo was very helpful and precise in the explanations. He arrived perfectly on time and he was able to come for a site visit with a very small notice, because we were in a hurry. Thank you, we will surely call back if there will be other issues.",
    timeAgo: "4 month ago",
    image: "ebec.png",
  },
  {
    name: 'marcus “MW”',
    rating: 4.8,
    reviewCount: 4,
    reviewText:
      "Pearl Engineers and project managers: Highly recommended. Mojo was helpful, professional and informative from the first meeting. He provided very clear explanation of the nature of our building problems and excellent solutions. The report was extremely useful and prompt, he was very supportive, always available by e-mail or phone. Kind, friendly yet very professional, clear and forthright representing us. Our guardian angel! Very reliable and trustworthy, We would highly recommend his work and this company to anyone.",
    timeAgo: "a month ago",
    image: "review3.png",
  },
  {
    name: "Richard Long",
    rating: 5.0,
    reviewCount: 48,
    reviewText:
      "We have worked with Mojo and his team on a few projects now and can honestly say their work and professionalism is unrivalled in the industry. Thank you again and we look forward to working with you on the next project",
    timeAgo: "2 months ago",
    image: "richard.png",
  },
  {
    name: "Nick Goodson",
    rating: 5.0,
    reviewCount: 2,
    reviewText:
      "Recently used Pearl for a kitchen lintel spec and found well priced and competent service. Very easy to contact and quick to assist. Will continue to use Mojo on all following projects. Kitchen fitter of 20 years plus experience.",
    timeAgo: "2 week ago",
    image: "n.png",
  },
  {
    name: "Krupali Patel",
    rating: 4.9,
    reviewCount: 24,
    reviewText:
      "Working with Mojo has been an absolute pleasure. From the start, he has shown genuine interest and a strong duty of care to ensure that our build progresses smoothly without delays or complications. His responsiveness, dedication, and continuous support have been invaluable in managing our complex project. Mojo is always willing to assist, providing practical and suitable options to tackle challenges effectively. His expertise and problem-solving skills make a real difference, and it's clear that he truly cares about the success of the project. I would highly recommend Mojo and his team to anyone looking for a knowledgeable, reliable, and proactive structural engineer. We will definitely continue working with him on future builds! Thank you, Mojo, for your unwavering support and professionalism!",
    timeAgo: "2 years ago",
    image: "/unnamed.png",
  },
  {
    name: "Babur Moghul",
    rating: 4.7,
    reviewCount: 7,
    reviewText:
      "I would 100% recommend Pearl Engineers for a structural survey before purchasing a new property if you are unsure about some aspects of the building (in my case some cracks in walls). They are fast to communicate throughout the whole process, can set up a survey quickly, and can deliver a detailed and in-depth survey within a day. What I really appreciated was how Mojo took the time to answer questions especially after the survey uncovered some previously undetected issues, and we set up a post-survey call where he explained what kind of repairs would be required, and an estimate of the costs. My experience has been this is a company you can trust to provide you the answers you need and in my case has saved me from thousands of pounds in repair work, which in itself makes booking in the survey an extremely sound investment.",
    timeAgo: "a month ago",
    image: "review4.png",
  },
  {
    name: "Gert Meneri",
    rating: 5.0,
    reviewCount: 3,
    reviewText:
      "Pearl Engineers Planners and Project Managers, where the structural engineers for my loft conversion project. I dealt with Mojo and to this day, I haven't come across any company or individual who where more accommodating than him. I was impressed when he came over for a site visit, on the same day that I called and enquired about their services. He came on site two more times when there were issues when we took out the chimney breast and the drawings had to be revised. He made the necessary changes without charging extra. What also was amazing about him, is the fact that he answered most questions I made through messages, in a matter of minutes. I never had to wait next day for a response. I have already recommended him to other friends who required his kind of services and will definitely contract him again in the future.",
    timeAgo: "3 months ago",
    image: "review8.png",
  },
];

export default function ReviewSection() {
  const isMd = useMediaQuery("(max-width:992px)");
  const isSm = useMediaQuery("(max-width:768px)");
  const slidesToShow = isSm ? 1 : isMd ? 2 : 3;

  const [index, setIndex] = useState(0);
  const [expandedIndex, setExpandedIndex] = useState(null);

  const maxIndex = Math.max(0, reviews.length - slidesToShow);
  const timer = useRef(null);

  const summary = useMemo(() => {
    const total = reviews.reduce((s, r) => s + (r.reviewCount || 0), 0);
    const avg =
      reviews.reduce((s, r) => s + (r.rating || 0), 0) /
      Math.max(1, reviews.length);
    return { avg: Math.round(avg * 10) / 10, total };
  }, []);

  const stopTimer = () => {
    if (timer.current) clearInterval(timer.current);
    timer.current = null;
  };

  const prev = () => {
    stopTimer();
    setIndex((i) => (i <= 0 ? maxIndex : i - 1));
  };

  const next = () => {
    stopTimer();
    setIndex((i) => (i >= maxIndex ? 0 : i + 1));
  };

  const toggleExpand = (idx) => setExpandedIndex((p) => (p === idx ? null : idx));
  const maxLength = 220;

  return (
    <Box sx={{ position: "relative", py: { xs: 7, md: 9 }, px: 2, overflow: "hidden" }}>
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background:
            "radial-gradient(900px 500px at 20% 10%, rgba(0,64,143,.14), transparent 60%), radial-gradient(900px 500px at 80% 40%, rgba(59,130,246,.10), transparent 60%), radial-gradient(900px 500px at 50% 90%, rgba(16,185,129,.09), transparent 60%)",
        }}
      />

      <Box sx={{ position: "relative", maxWidth: 1200, mx: "auto" }}>
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
              label="Trusted by clients"
              size="small"
              sx={{ mb: 1, borderRadius: 99, fontWeight: 800, bgcolor: "rgba(17,24,39,.06)" }}
            />
            <Typography variant="h4" sx={{ fontWeight: 900, letterSpacing: "-0.02em", lineHeight: 1.1 }}>
              Google Reviews
            </Typography>
            <Typography sx={{ color: "text.secondary", mt: 1, maxWidth: 680 }}>
              Real feedback from homeowners, builders and businesses — quality, speed and clarity in every
              report and drawing.
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
            <Typography sx={{ fontWeight: 900, fontSize: 26, lineHeight: 1 }}>
              {summary.avg}/5
            </Typography>

            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Rating value={summary.avg} precision={0.1} readOnly size="small" />
              <Typography variant="caption" sx={{ color: "text.secondary", fontWeight: 700 }}>
                ({summary.total}+)
              </Typography>
            </Box>
          </Box>
        </Box>

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
                const text = review.reviewText || "";
                const displayText =
                  isExpanded || text.length <= maxLength
                    ? text
                    : text.slice(0, maxLength).trim() + "…";

                return (
                  <Box
                    key={idx}
                    sx={{ flex: `0 0 ${100 / slidesToShow}%`, p: 1.25, boxSizing: "border-box" }}
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
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            mb: 1.5,
                            gap: 1.5,
                          }}
                        >
                          <Box sx={{ display: "flex", alignItems: "center", gap: 1.2 }}>
                            <Avatar
                              src={review.image}
                              alt={review.name}
                              sx={{
                                width: 44,
                                height: 44,
                                border: "2px solid rgba(0,64,143,.20)",
                                boxShadow: "0 12px 25px rgba(0,64,143,.12)",
                              }}
                            />
                            <Box>
                              <Typography sx={{ fontWeight: 900, lineHeight: 1.1 }}>
                                {review.name}
                              </Typography>
                              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                                <Rating value={review.rating} precision={0.1} readOnly size="small" />
                              </Box>
                            </Box>
                          </Box>

                          <Box
                            aria-hidden
                            sx={{
                              fontSize: 36,
                              fontWeight: 900,
                              lineHeight: 1,
                              color: "rgba(17,24,39,.10)",
                              userSelect: "none",
                            }}
                          >
                            “
                          </Box>
                        </Box>

                        <Typography
                          sx={{
                            color: "rgba(17,24,39,.86)",
                            lineHeight: 1.7,
                            fontSize: 14.5,
                            display: "-webkit-box",
                            WebkitLineClamp: isExpanded ? "unset" : 5,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                          }}
                        >
                          {displayText}
                        </Typography>

                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            mt: 1.75,
                          }}
                        >
                          {text.length > maxLength ? (
                            <Box
                              component="button"
                              onClick={() => toggleExpand(idx)}
                              style={{
                                border: 0,
                                background: "transparent",
                                cursor: "pointer",
                                fontWeight: 900,
                                padding: "6px 10px",
                                borderRadius: 999,
                              }}
                            >
                              {isExpanded ? "Show less" : "Read more"}
                            </Box>
                          ) : (
                            <span />
                          )}
                        </Box>
                      </CardContent>
                    </Card>
                  </Box>
                );
              })}
            </Box>
          </Box>

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
                  "&:hover": { bgcolor: "rgba(255,255,255,1)" },
                }}
              >
                <ChevronRight />
              </IconButton>
            </>
          )}
        </Box>

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
                  bgcolor: i === index ? "rgba(0,64,143,.65)" : "rgba(17,24,39,.18)",
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
