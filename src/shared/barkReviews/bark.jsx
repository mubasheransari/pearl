"use client";
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
  Button
} from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

// Reviews data
const reviews = [
  {
    name: "H. Karim",
    // date: "23 April 2025",
    text: `We took on the challenge of buying an auction property that was in a seriously bad state. Before going ahead, we got in touch with PEPP for a structural survey and a breakdown of what needed fixing. They came through with a super detailed report, covering literally everything, even the small stuff.

From there, they helped us with lending options, building regs, and all the structural packs we needed. Honestly, they were there for us every step of the way, making what could’ve been a stressful process so much easier.

Massive shoutout to Mojo for always being on point with his responses, proper lifesaver! Couldn’t have done it without you lot. Top-tier services soon we will be cracking on more projects.`,
  },
//   {
//     name: "Igor",
//     date: "23 April 2025",
//     text: "Very professional and sociable person. Gave a lot of useful advice and is always in touch.",
//   },
  {
    name: "Adil",
    // date: "12 December 2024",
    text: `Mojo was absolutely brilliant! He provided structural drawings with incredible speed and went above and beyond to offer advice and support throughout the project. His expertise and professionalism were outstanding. Offering great value for the exceptional service he delivered. Highly recommend!`,
  },
  {
    name: "Kamal",
    // date: "12 December 2024",
    text: `I hired Pepp for a house conversion project and have been very impressed from their work. It's been absolute pleasure working with Mojo. He has deep understanding of concepts related to structural integrity, planning process, and how everything then integrate into building works. Mojo has given many valuable suggestions which make overall project cost efficient. Would highly recommend them and would look forward to working with them again in future.`,
  },
//   {
//     name: "Tom Gallagher",
//     verified: true,
//     date: "11 November 2024",
//     subtitle: "Residential Building & Structural Surveyor",
//     text: `Muhammad and the team at Pearl completed the planning and building regs submission for my large rear extension in Cheam. Muhammad’s exemplary attention to detail meant we received unconditional approval from Sutton Council. His advice throughout proved to be very helpful, ensuring everything went smoothly.`,
//   },
  {
    name: "Bea Buan",
    // date: "12 October 2024",
    text: `I’ve recently hired Pearl engineers to be the structural engineers for my extension and renovation project. Right from the start, Mojo was very prompt in his responses to arrange a visit on the site and very clear on his explanations of what needs to be done. I feel like he’s really listened to all my queries and considerations.

Moreover, Mojo helped in finding the right contractors for the project. I have found that he was also always willing to help and quick with his responses for any queries that came about once the project had started.

Overall, I would recommend Pearl engineers and would use them again if the opportunity arises.`,
  },
//   {
//     name: "Thilan Madawalage",
//     date: "10 October 2024",
//     text: "Mojo provided an amazing service at a fair price. Stayed involved throughout the process and offered very helpful advice.",
//   },
//   {
//     name: "Aleksandra",
//     date: "25 September 2024",
//     text: "Very good service. We needed structural drawings done ASAP and Mojo did it quick and up to the standard. Highly recommended!",
//   },
  {
    name: "Ruth",
    // verified: true,
    // date: "5 September 2024",
    text: `I have used this company for a kitchen wall to be removed. Mohammed came and he has done a great job providing all the details needed, drawings and instructions for the builder to understand, but most of all he had completed all the drawings within two days to accommodate the urgency of the work. Thank you Mohammed.`,
  },
  {
    name: "Chhavi",
    // date: "29 May 2024",
    text: `I had Muhammad visit and provide structural designs and calculations for my work. I found him very professional and helpful. He explained things that I was not sure on and has been very helpful throughout the process and this far. We are waiting on the council approvals to complete the works. Thank you!! I highly recommend!!`,
  },
  {
    name: "Marisa Erftemeijer",
    // date: "27 May 2024",
    text: `Found weekend before builders arrived when we realised previous calculations had mistakes in them—agreed to job on Friday night and by Saturday had visited and advised with final plans in by Monday! Really appreciated their quick and last-minute support! Good value for money and felt in safe hands—would use again and recommend.`,
  },
];

export default function BarkReview() {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const toggleExpand = idx => {
    setExpandedIndex(prev => (prev === idx ? null : idx));
  };

  const show2 = useMediaQuery("(max-width:992px)");
  const show1 = useMediaQuery("(max-width:768px)");
  const slidesToShow = show1 ? 1 : show2 ? 2 : 3;

  const [index, setIndex] = useState(0);
  const maxIndex = reviews.length - slidesToShow;
  const timer = useRef();
  const maxLength = 200;

  const prev = () => {
    clearInterval(timer.current);
    setIndex(i => (i === 0 ? maxIndex : i - 1));
  };
  const next = () => {
    clearInterval(timer.current);
    setIndex(i => (i >= maxIndex ? 0 : i + 1));
  };

  return (
    <Box sx={{ maxWidth: 1400, mx: "auto", py: 4, px: 2 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Bark Reviews
      </Typography>

      <Box sx={{ position: "relative", overflow: "hidden" }}>
        <Box
          sx={{
            display: "flex",
            transition: "transform 0.5s ease",
            transform: `translateX(-${(100 / slidesToShow) * index}%)`,
          }}
        >
          {reviews.map((review, idx) => {
            const isExpanded = expandedIndex === idx;
            const displayText =
              isExpanded || review.text.length <= maxLength
                ? review.text
                : review.text.slice(0, maxLength) + "…";

            return (
              <Box
                key={idx}
                sx={{
                  flex: `0 0 ${100 / slidesToShow}%`,
                  boxSizing: "border-box",
                  p: 1,
                }}
              >
                <Card elevation={3}>
                  <CardHeader
                    avatar={
                      review.verified && (
                        <Avatar sx={{ bgcolor: "primary.main", width: 32, height: 32 }}>
                          ✔︎
                        </Avatar>
                      )
                    }
                    title={review.name}
                    subheader={review.subtitle || review.date}
                    // subheader={review.subtitle || review.date}
                  />
                  <CardContent>
                    <Typography variant="body2" sx={{ mb: 1, whiteSpace: "pre-line" }}>
                      {displayText}
                    </Typography>
                    {review.text.length > maxLength && (
                      <Button size="small" onClick={() => toggleExpand(idx)}>
                        {isExpanded ? "Hide" : "See more"}
                      </Button>
                    )}
                    {!review.subtitle && (
                      <Typography
                        variant="caption"
                        color="text.secondary"
                        display="block"
                        sx={{ mt: 1 }}
                      >
                        {review.date}
                      </Typography>
                    )}
                  </CardContent>
                </Card>
              </Box>
            );
          })}
        </Box>

        <IconButton
          onClick={prev}
          sx={{
            position: "absolute",
            top: "50%",
            left: -16,
            transform: "translateY(-50%)",
            bgcolor: "background.paper",
            boxShadow: 1,
            "&:hover": { bgcolor: "background.paper" },
          }}
        >
          <ChevronLeft />
        </IconButton>
        <IconButton
          onClick={next}
          sx={{
            position: "absolute",
            top: "50%",
            right: -16,
            transform: "translateY(-50%)",
            bgcolor: "background.paper",
            boxShadow: 1,
            "&:hover": { bgcolor: "background.paper" },
          }}
        >
          <ChevronRight />
        </IconButton>
      </Box>
    </Box>
  );
}
