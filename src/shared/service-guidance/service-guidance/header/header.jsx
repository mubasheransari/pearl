import React from "react";
import styles from "./header.module.scss";
import Image from "next/image";
import planningImage from "../../../../public/service-planning.png"; // Public folder में इमेज रखें

const PlanningGuidance = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <Image src={planningImage} alt="Planning Guidance" layout="fill" objectFit="cover" />
        <div className={styles.text}>Planning Guidance Service</div>
      </div>
    </div>
  );
};

export default PlanningGuidance;
