import React from "react";
import style from "./header.module.scss";

const PlanningGuidance = () => {
  return (
    <div className={style.container}>
      <div className={style.textSection}>
        <h2>Planning Guidance Service</h2>
      </div>
      <div className={style.imageSection}>
        <img src="/about.jpg" alt="Planning Guidance" />
      </div>
    </div>
  );
};

export default PlanningGuidance;
