// "use client";
// import React, { useState } from "react";
// import style from "./reveiw.module.scss";

// const reviews = [
//   {
//     name: "B D",
//     rating: 5.0,
//     reviewCount: 17,
//     reviewText:
//       "I cannot rate Pearl Engineers highly enough. We engaged Mohammed during a single storey extension project where the previous builder well and truly messed up the initial construction leading to council pointing out multiple problems which required rework. As this was part of a Building Control application, the council were closely involved. He did an exceptional job of not only providing the structural engineers report to be submitted to the council but also made architectural drawings and changes to accommodate the existing works, to avoid unnecessary redoing of work. He engaged well with the building inspector, the new builder and also managed to contact the council’s structural engineer who was vague in the comments and feedback. I particularly appreciated him making physical visits to address the concerns of the building inspectors and ensuring he works with us to understand our requirements and project budget.You will not regret hiring their services",
//     timeAgo: "now week ago",
//     image: "review2.png",
//   },
//   {
//     name: "Muhammad Adil Qureshi",
//     rating: 5.0,
//     reviewCount: 36,
//     reviewText:
//       "100% recommended - service was amazing from start to finish. They went out of their way to accommodate us, answered all our questions, and worked with us to find cost-effective solutions. The aftercare was the best part—they were always just a phone call away. We had to make some changes to the design midway, and they handled it without any issues. They even helped us deal with building control questions and adjusted the design when we discovered unexpected changes after opening a wall. I really felt I had to write this review because their support was incredible. One thing I’d say is to follow their designs. Builders might have their own ideas, but even building control praised the plans, saying they were exactly how things should be done. Mojo, in particular, was super helpful. We worked with them on a structural design for removing a massive chimney breast. I am thankful to them for considering us in the centre of their design decision - For example, they suggested a splice in the beam, which saved us money with builders as we didn’t need a crane. If you want a team that knows what they’re doing and truly cares about their clients, Pearl Engineers Planners is the way to go!",
//     timeAgo: "4 month ago",
//     image: "review6.png",
//   },

//   {
//     name: "marcus “MW”",
//     rating: 4.8,
//     reviewCount: 4,
//     reviewText:
//       "Pearl Engineers and project managers: Highly recommended. Mojo was helpful, professional and informative from the first meeting.  He  provided very clear explanation of the nature of our building problems and excellent solutions. The report was extremely useful and prompt, he was very supportive, always available by e-mail or phone. Kind, friendly yet very professional, clear and forthright representing us. Our guardian angel! Very reliable and trustworthy, We would highly recommend his work and this company to anyone.",
//     timeAgo: "a month ago",
//     image: "review3.png",
//   },
  
//   {
//     name: "Kamal Sahni",
//     rating: 5.0,
//     reviewCount: 4,
//     reviewText:
//       "Mojo and company is one of the most professional and ethical set of people we have worked with. I was very impressed with level of knowledge and understanding that Mojo showed on the job. We hired Mojo for a structural survey of a house we were looking to buy for investment purposes. On surface everything looked perfect and we didn't think house had any issue. But Mojo highlighted some really important structural details which were critical to the structural integrity of the house and were very expensive to fix. His insight and knowledge saved us a great deal of money for which we are very thankful. We plan to hire Mojo for any future project we'll do and would highly recommend anyone for the same.",
//     timeAgo: "2 months ago",
//     image: "review7.png",
//   },

//   {
//     name: "Abdullah Shameer",
//     rating: 4.9,
//     reviewCount: 14,
//     reviewText:
//       "10/10 service, knowledge and engagement from Muhammad - at the time of writing, I’ve engaged his services for two different projects and he has not disappointed one bit, delivering excellence both times. All reports, drawings, explanations etc are super clear and complete to a very high standard. He is very thorough and clear in his approach and explanations, and always goes above and beyond to ensure the client gets the exactly what they’re after.  Very few businesses can give you enough confidence to re-engage their services however I can confidently say I will be returning for future projects!",
//     timeAgo: "2 week ago",
//     image: "review5.png",
//   },
//   {
//     name: "Krupali Patel",
//     rating: 4.9,
//     reviewCount: 24,
//     reviewText:
//       "Working with Mojo has been an absolute pleasure. From the start, he has shown genuine interest and a strong duty of care to ensure that our build progresses smoothly without delays or complications. His responsiveness, dedication, and continuous support have been invaluable in managing our complex project.Mojo is always willing to assist, providing practical and suitable options to tackle challenges effectively. His expertise and problem-solving skills make a real difference, and it's clear that he truly cares about the success of the project.I would highly recommend Mojo and his team to anyone looking for a knowledgeable, reliable, and proactive structural engineer. We will definitely continue working with him on future builds! Thank you, Mojo, for your unwavering support and professionalism!",
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

// const ReviewSection = () => {
//   const [expandedIndex, setExpandedIndex] = useState(null);

//   const toggleExpand = (index) => {
//     setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
//   };

//   const maxLength = 250;

//   return (
//     <div className={style.reviewSection}>
//       <h1 className={style.heading}>Reviews</h1>
//       <div className={style.reviewRow}>
//         {reviews.map((review, index) => {
//           const isExpanded = expandedIndex === index;
//           const text = review.reviewText;

//           return (
//             <div
//               className={`${style.reviewCard} ${isExpanded ? style.expanded : ""}`}
//               key={index}
//             >
//               <div className={style.companyInfo}>
//                 <img
//                   src={review.image}
//                   alt={`${review.name} logo`}
//                   className={style.companyLogo}
//                 />
//                 <div className={style.companyDetails}>
//                   <h3>{review.name}</h3>
//                   <div className={style.rating}>
//                     <span>{review.rating} </span> ⭐⭐⭐
//                     <span>Based on {review.reviewCount} reviews</span>
//                   </div>
//                 </div>
//               </div>
//               <div className={style.review}>
//                 <p>
//                   {isExpanded
//                     ? text
//                     : text.length > maxLength
//                     ? text.slice(0, maxLength) + "..."
//                     : text}
//                 </p>
//                 <div className={style.reviewFooter}>
//                   {text.length > maxLength && (
//                     <button
//                       className={style.toggleButton}
//                       onClick={() => toggleExpand(index)}
//                     >
//                       {isExpanded ? " Hide " : " See more "}
//                     </button>
//                   )}
//                   <span className={style.timeAgo}>{review.timeAgo}</span>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default ReviewSection;


"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Typography,
  IconButton,
  useMediaQuery,
  Card,
  CardContent,
  CardHeader,
  Avatar,
  Rating,
  Button
} from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

const reviews = [
  {
    name: "B D",
    rating: 5.0,
    reviewCount: 17,
    reviewText:
      "I cannot rate Pearl Engineers highly enough. We engaged Mohammed during a single storey extension project where the previous builder well and truly messed up the initial construction leading to council pointing out multiple problems which required rework. As this was part of a Building Control application, the council were closely involved. He did an exceptional job of not only providing the structural engineers report to be submitted to the council but also made architectural drawings and changes to accommodate the existing works, to avoid unnecessary redoing of work. He engaged well with the building inspector, the new builder and also managed to contact the council’s structural engineer who was vague in the comments and feedback. I particularly appreciated him making physical visits to address the concerns of the building inspectors and ensuring he works with us to understand our requirements and project budget.You will not regret hiring their services",
    timeAgo: "now week ago",
    image: "review2.png",
  },
  {
    name: "Muhammad Adil Qureshi",
    rating: 5.0,
    reviewCount: 36,
    reviewText:
      "100% recommended - service was amazing from start to finish. They went out of their way to accommodate us, answered all our questions, and worked with us to find cost-effective solutions. The aftercare was the best part—they were always just a phone call away. We had to make some changes to the design midway, and they handled it without any issues. They even helped us deal with building control questions and adjusted the design when we discovered unexpected changes after opening a wall. I really felt I had to write this review because their support was incredible. One thing I’d say is to follow their designs. Builders might have their own ideas, but even building control praised the plans, saying they were exactly how things should be done. Mojo, in particular, was super helpful. We worked with them on a structural design for removing a massive chimney breast. I am thankful to them for considering us in the centre of their design decision - For example, they suggested a splice in the beam, which saved us money with builders as we didn’t need a crane. If you want a team that knows what they’re doing and truly cares about their clients, Pearl Engineers Planners is the way to go!",
    timeAgo: "4 month ago",
    image: "review6.png",
  },

  {
    name: "marcus “MW”",
    rating: 4.8,
    reviewCount: 4,
    reviewText:
      "Pearl Engineers and project managers: Highly recommended. Mojo was helpful, professional and informative from the first meeting.  He  provided very clear explanation of the nature of our building problems and excellent solutions. The report was extremely useful and prompt, he was very supportive, always available by e-mail or phone. Kind, friendly yet very professional, clear and forthright representing us. Our guardian angel! Very reliable and trustworthy, We would highly recommend his work and this company to anyone.",
    timeAgo: "a month ago",
    image: "review3.png",
  },
  
  {
    name: "Kamal Sahni",
    rating: 5.0,
    reviewCount: 4,
    reviewText:
      "Mojo and company is one of the most professional and ethical set of people we have worked with. I was very impressed with level of knowledge and understanding that Mojo showed on the job. We hired Mojo for a structural survey of a house we were looking to buy for investment purposes. On surface everything looked perfect and we didn't think house had any issue. But Mojo highlighted some really important structural details which were critical to the structural integrity of the house and were very expensive to fix. His insight and knowledge saved us a great deal of money for which we are very thankful. We plan to hire Mojo for any future project we'll do and would highly recommend anyone for the same.",
    timeAgo: "2 months ago",
    image: "review7.png",
  },

  {
    name: "Abdullah Shameer",
    rating: 4.9,
    reviewCount: 14,
    reviewText:
      "10/10 service, knowledge and engagement from Muhammad - at the time of writing, I’ve engaged his services for two different projects and he has not disappointed one bit, delivering excellence both times. All reports, drawings, explanations etc are super clear and complete to a very high standard. He is very thorough and clear in his approach and explanations, and always goes above and beyond to ensure the client gets the exactly what they’re after.  Very few businesses can give you enough confidence to re-engage their services however I can confidently say I will be returning for future projects!",
    timeAgo: "2 week ago",
    image: "review5.png",
  },
  {
    name: "Krupali Patel",
    rating: 4.9,
    reviewCount: 24,
    reviewText:
      "Working with Mojo has been an absolute pleasure. From the start, he has shown genuine interest and a strong duty of care to ensure that our build progresses smoothly without delays or complications. His responsiveness, dedication, and continuous support have been invaluable in managing our complex project.Mojo is always willing to assist, providing practical and suitable options to tackle challenges effectively. His expertise and problem-solving skills make a real difference, and it's clear that he truly cares about the success of the project.I would highly recommend Mojo and his team to anyone looking for a knowledgeable, reliable, and proactive structural engineer. We will definitely continue working with him on future builds! Thank you, Mojo, for your unwavering support and professionalism!",
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
  const [expandedIndex, setExpandedIndex] = useState(null);
  const toggleExpand = (idx) => {
    setExpandedIndex(prev => (prev === idx ? null : idx));
  };

  const show2 = useMediaQuery("(max-width:992px)");
  const show1 = useMediaQuery("(max-width:768px)");
  const slidesToShow = show1 ? 1 : show2 ? 2 : 3;

  const [index, setIndex] = useState(0);
  const maxIndex = reviews.length - slidesToShow;
  const timer = useRef();
  const maxLength = 200;

  // useEffect(() => {
  //   // autoplay moving left-to-right only (i.e., track moves positive direction)
  //   timer.current = setInterval(() => {
  //     setIndex(i => (i === 0 ? maxIndex : i - 1));
  //   }, 2000);
  //   return () => clearInterval(timer.current);
  // }, [maxIndex]);

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
         Google Reviews
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
            const text = review.reviewText;
            const displayText = isExpanded || text.length <= maxLength
              ? text
              : text.slice(0, maxLength) + "…";

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
                    avatar={<Avatar src={review.image} />}
                    title={review.name}
                    subheader={
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Rating
                          value={review.rating}
                          precision={0.1}
                          readOnly
                          size="small"
                        />
                        <Typography variant="body2" sx={{ ml: 1 }}>
                          ({review.reviewCount})
                        </Typography>
                      </Box>
                    }
                  />
                  <CardContent>
                    <Typography variant="body2" sx={{ mb: 1 }}>
                      {displayText}
                    </Typography>
                    {text.length > maxLength && (
                      <Button
                        size="small"
                        onClick={() => toggleExpand(idx)}
                      >
                        {isExpanded ? "Hide" : "See more"}
                      </Button>
                    )}
                    <Typography
                      variant="caption"
                      color="text.secondary"
                      display="block"
                    >
                      {review.timeAgo}
                    </Typography>
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