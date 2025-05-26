"use client"
import React, { useState, useRef } from "react";
import {
  Box,
  Typography,
  IconButton,
  useMediaQuery,
  Card,
  CardContent,
  CardHeader,
  Avatar,
  Button,
  Rating
} from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

// Array of review objects
const reviews = [
//   { rating: 10, title: "Outside walls", text: "Mojo was a really nice man; brother had to get a structural engineer report to give to the home insurance — could not have been more helpful. Very happy with this company.", verified: true, date: "Posted 1 week ago", location: "DA15" },
  { rating: 10, title: "Loft Conversion Calculations", text: "Thank you, Muhammad. You’ve done an amazing job on my structural designs. I’m over the moon and you’ve also given an amazing price—honestly I can’t thank you enough. My job is now in progress. Thanks to you. I’ve had a really good experience. I will definitely be back and recommend you to all my friends and family.", verified: true, 
  
  // date: "Posted 16 May",
   location: "SS16" },
//   { rating: 8, title: "Extension", text: "Good experience.", verified: false, date: "Posted 15 May", location: "KT19" },
//   { rating: 10, title: "Croydon School Calculations", text: "They supplied multiple calculations required to allow structural works. Very quick and easy to respond. I’ve been in the building industry for 20 years and work in 50 schools in the Southeast and this is the first time I’ve found a structural engineer that is competent and can provide a speedy result. Will always use PEPP going forward.", verified: false, date: "Posted 13 May", location: "CR0" },
  { rating: 10, title: "Investment Property", text: "We took on the challenge of buying an auction property that was in a seriously bad state. Before going ahead, we got in touch with PEPP for a structural survey and a breakdown of what needed fixing. They came through with a super detailed report, covering literally everything, even the small stuff. From there, they helped us with lending options, building regs, and all the structural packs we needed. Honestly, they were there for us every step of the way, making what could’ve been a stressful process so much easier. Thanks a million.", verified: true,
  
  // date: "Posted 23 April",
   location: "SW6" },
//   { rating: 10, title: "Side & Rear Extension (One)", text: "Mojo is very professional, helped me a lot to make the right decisions. Always in touch. Highly recommend!!!", verified: false, date: "Posted 23 April", location: "DA7" },
//   { rating: 10, title: "Side & Rear Extension (Two)", text: "Mojo knows what he’s doing. Very professional and sociable person. Gave a lot of useful advice and is always in touch. Highly recommend!!!", verified: true, date: "Posted 23 April", location: "DA7" },
  { rating: 9.33, title: "Side And Rear Extension", text: "Very clear and well-detailed structural drawings for the side and rear extension. The plans were easy to follow, accurate, and aligned perfectly with building regulations. Highly recommend for anyone needing reliable structural design work.", verified: true, 
  
  // date: "Posted 15 April",
   location: "CR5" },
//   { rating: 10, title: "Assessment of Wall Removal", text: "Mojo assessed how an internal wall could be safely removed. His communication was prompt and the final report was clear and comprehensive.", verified: true, date: "Posted 13 April", location: "SW11" },
  { rating: 10, title: "Rear Extension Survey", text: "I recently hired Pearl Engineers to carry out the structural survey and provide the necessary calculations for a rear extension to my home, and I’m so pleased with the service they provided. From my initial enquiry through to the final report, the team was consistently professional, efficient, and approachable. The structural engineer took the time to fully understand the scope of the project and was very thorough during the site visit. He was clear and reassuring in explaining what was required, which really helped me feel confident in moving forward with the build.", verified: true, 
  
  // date: "Posted 04 April",
   location: "KT22" },
//   { rating: 10, title: "Structural Survey", text: "Absolutely superb—quick, responsive and thorough. Will use again!", verified: false, date: "Posted 01 April", location: "SW2" },
//   { rating: 10, title: "Steel Beam Support", text: "Excellent service; Mojo is knowledgeable and experienced. His quick response and detailed explanation really helped out the process.", verified: true, date: "Posted 01 April", location: "BR6" },
//   { rating: 10, title: "Patio Door Lintel Survey", text: "Response to my request via Checkatrade was very prompt. An appointment was made and a report produced shortly after.", verified: true, date: "Posted 17 March", location: "SM2" },
//   { rating: 10, title: "Structural Survey Follow-up", text: "Mojo was so quick to respond to our enquiry, competitively priced, and came back with great availability and flexibility. Sadly our seller pulled out at the last minute; that’s the only reason we didn’t proceed. We will reach out to them in the future.", verified: false, date: "Posted 17 March", location: "BR7" },
  { rating: 10, title: "Kitchen Extension & Garage Refurbishment", text: "Mojo and his team provided excellent structural engineering services for my kitchen extension and garage refurbishment. They were responsive, addressing all my queries with clear, detailed answers. The drawings were thorough; adjustments like the skylight and lintel changes were made promptly. Communication was professional and timely throughout, and the final results were exactly what I needed. Highly recommend!", verified: true, 
  
  // date: "Posted 15 March",
   location: "DA10" },
//   { rating: 10, title: "Construction Project Drawings", text: "Great company and nice to work with. Highly recommend.", verified: true, date: "Posted 14 March", location: "DA5" },
  { rating: 10, title: "Damage Report", text: "Pearl Engineers and project managers: Highly recommended. Mojo was helpful, professional and informative from the first meeting. He provided very clear explanations of our building problems and excellent solutions. The report was extremely useful and prompt; he was supportive, always available by email or phone. Kind, friendly yet very professional. Our guardian angel! Very reliable and trustworthy. Would highly recommend.", verified: true,
  
  //  date: "Posted 11 March",
    location: "SW4" },
  { rating: 10, title: "Beams Calculation for Kitchen Remodeling", text: "The engineer understood our requirements and completed the work very swiftly. The building work has yet to start, but we are confident that if problems arise we can contact them for advice. The calculations appeared detailed and accurate.", verified: true, 
  
  // date: "Posted 23 February", 
  location: "KT4" },
  { rating: 10, title: "Structural Plans", text: "Mojo was super communicative and speedy in booking the site survey and delivering the plans and report. All done within one week of contacting. He was also very responsive in answering any questions, queries, and changes I wanted to make to the plan. He even went above and beyond by recommending trusted builders.", verified: true,
  
  //  date: "Posted 23 February",
    location: "SE6" },
  { rating: 0.33, title: "Useless Survey Report", text: "We paid for a structural survey to aid a sale process, but the report was useless—basically saying ‘looks okay but ask building control to confirm.’ Why did we pay for that? I’d recommend it to my worst enemy to waste their money.", verified: true, 
  
  // date: "Posted 13 February", 
  location: "BR5" }
];

export default function CheckReview() {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const toggleExpand = idx => setExpandedIndex(prev => (prev === idx ? null : idx));

  const show2 = useMediaQuery("(max-width:992px)");
  const show1 = useMediaQuery("(max-width:768px)");
  const slidesToShow = show1 ? 1 : show2 ? 2 : 3;

  const [index, setIndex] = useState(0);
  const maxIndex = reviews.length - slidesToShow;
  const maxLength = 200;

  const prev = () => setIndex(i => (i === 0 ? maxIndex : i - 1));
  const next = () => setIndex(i => (i >= maxIndex ? 0 : i + 1));

  return (
    <Box sx={{ maxWidth: 1400, mx: "auto", py: 4, px: 2 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Check Reviews
      </Typography>
      <Box sx={{ position: "relative", overflow: "hidden" }}>
        <Box
          sx={{
            display: "flex",
            transition: "transform 0.5s ease",
            transform: `translateX(-${(100 / slidesToShow) * index}%)`
          }}
        >
          {reviews.map((review, idx) => {
            const isExpanded = expandedIndex === idx;
            const displayText = isExpanded || review.text.length <= maxLength
              ? review.text
              : `${review.text.slice(0, maxLength)}…`;

            return (
              <Box key={idx} sx={{ flex: `0 0 ${100 / slidesToShow}%`, p: 1 }}>
                <Card elevation={3}>
                  <CardHeader
                    avatar={review.verified && <Avatar sx={{ bgcolor: "primary.main", width: 32, height: 32 }}>✔︎</Avatar>}
                    title={review.title}
                    subheader={review.location}
                  />
                  <CardContent>
                    <Rating value={review.rating / 2} precision={0.5} readOnly size="small" sx={{ mb: 1 }} />
                    <Typography variant="body2" sx={{ mb: 1, whiteSpace: "pre-line" }}>
                      {displayText}
                    </Typography>
                    {review.text.length > maxLength && (
                      <Button size="small" onClick={() => toggleExpand(idx)}>
                        {isExpanded ? "Hide" : "See more"}
                      </Button>
                    )}
                    <Typography variant="caption" color="text.secondary" display="block" sx={{ mt: 1 }}>
                      {review.date}
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            );
          })}
        </Box>
        <IconButton onClick={prev} sx={{ position: "absolute", top: "50%", left: -16, transform: "translateY(-50%)", bgcolor: "background.paper", boxShadow: 1, "&:hover": { bgcolor: "background.paper" } }}>
          <ChevronLeft />
        </IconButton>
        <IconButton onClick={next} sx={{ position: "absolute", top: "50%", right: -16, transform: "translateY(-50%)", bgcolor: "background.paper", boxShadow: 1, "&:hover": { bgcolor: "background.paper" } }}>
          <ChevronRight />
        </IconButton>
      </Box>
    </Box>
  );
}
