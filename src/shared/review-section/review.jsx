import React from 'react';
import style from './reveiw.module.scss';

const reviews = [
  {
    name: "B D",
    rating: 5.0,
    reviewCount: 17,
    reviewText: "No real queuing discipline on busy days and could do better with understanding who’s queuing for much longer .......",
    timeAgo: "now week ago",
    image: "review2.png"
  },
  {
    name: "Krupali Patel",
    rating: 4.9,
    reviewCount: 24,
    reviewText: "Working with Mojo has been an absolute pleasure. From the start, he has shown genuine interest ......",
    timeAgo: "2 years ago",
    image: "/unnamed.png"
  },
 
  {
    name: "marcus “MW”",
    rating: 4.8,
    reviewCount: 4,
    reviewText: "Mojo was helpful, professional and informative from the first meeting.  He  provided very clear explanation ......",
    timeAgo: "a month ago",
    image: "review3.png"
  },
  {
    name: "Babur Moghul",
    rating: 4.7,
    reviewCount: 7,
    reviewText: "I would 100% recommend Pearl Engineers for a structural survey before purchasing a new property if you are unsure about ......",
    timeAgo: "a month ago",
    image: "review4.png"
  },
  {
    name: "Abdullah Shameer",
    rating: 4.9,
    reviewCount: 14,
    reviewText: "10/10 service, knowledge and engagement from Muhammad - at the time of writing, I’ve engaged his services ......",
    timeAgo: "2 week ago",
    image: "review5.png"
  },
  {
    name: "Muhammad Adil Qureshi",
    rating: 5.0,
    reviewCount: 36,
    reviewText: "100% recommended - service was amazing from start to finish. They went out of their way to accommodate us ......",
    timeAgo: "4 month ago",
    image: "review6.png"
  },
  {
    name: "Kamal Sahni",
    rating: 5.0,
    reviewCount: 4,
    reviewText: "Mojo and company is one of the most professional and ethical set of people we have worked with. I was very ......",
    timeAgo: "2 months ago",
    image: "review7.png"
  },
  {
    name: "Gert Meneri",
    rating: 5.0,
    reviewCount: 3,
    reviewText: "Pearl Engineers Planners and Project Managers, where the structural engineers for my loft conversion project ......",
    timeAgo: "3 months ago",
    image: "review8.png"
  }
];

const ReviewSection = () => {
  return (
    <div className={style.reviewSection}>
      <h1 className={style.heading}>Reviews </h1>
      <div className={style.reviewRow}>
        {reviews.map((review, index) => (
          <div className={style.reviewCard} key={index}>
            <div className={style.companyInfo}>
              <img src={review.image} alt="Company logo" className={style.companyLogo} />
              <div className={style.companyDetails}>
                <h3>{review.name}</h3>
                <div className={style.rating}>
                  <span>{review.rating} </span> ⭐⭐⭐
                  <span>Based on {review.reviewCount} reviews</span>
                </div>
              </div>
            </div>
            <div className={style.review}>
              <p>{review.reviewText}</p>
              <span className={style.reviewer}>{review.reviewer}</span>
              <span className={style.timeAgo}>{review.timeAgo}</span>
            </div>
   
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewSection;


