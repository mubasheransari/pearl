import React from "react";
import style from "./card.module.scss";

const PlanningAdvice = () => {
  return (
    <div className={style.container}>
      <div className={style.card}>
        <div className={style.header}>
          <img src="/service-card.png" alt="Householder" className={style.fullImage} />
          <h2 className={style.overlayText}>Householder - planning advice call</h2>
        </div>
        <div className={style.body}>
          <p className={style.text}><strong>Quick answers, expert guidance – only £59</strong></p>
          <p className={style.text1}>
          If you’re a homeowner looking for swift and reliable planning guidance, book a 30-minute call with one of our experienced planning officers. This service is designed to provide clarity and direction, perfect for: 
          </p>
          <ul className={style.list}>
            <li>Understanding planning rules or requirements about your home or flat</li>
            <li>Gaining insight into local policies and constraints</li>
            <li>Addressing general planning queries quickly and effectively</li>
          </ul>
          <p className={style.text1}><strong>Fee:</strong> £59 for a 30-minute session.</p>
          <a href="#" className={style.button1}>Book now ↗</a>
          <p className={style.note}><em>By clicking this button you will visit an external booking website.</em></p>
        </div>
      </div>

      <div className={style.card}>
        <div className={style.header}>
          <img src="/service-card.png" alt="Commercial" className={style.fullImage} />
          <h2 className={style.overlayText}>Commercial - planning advice call</h2>
        </div>
        <div className={style.body}>
          <p className={style.text}><strong>Tailored for commercial advice – £91</strong></p>
          <p className={style.text1}>
          This service is designed specifically for small and large businesses, commercial projects, or residential developments - whether you’re pursuing a change of use, starting a new project, or expanding an existing one. For swift and reliable planning guidance, book a 30-minute call with one of our experienced planning officers. Gain clarity and direction, ideal for: 
          </p>
          <ul className={style.list}>
            <li>Understanding planning rules or requirements</li>
            <li>Gaining insight into local policies and constraints</li>
            <li>Addressing general planning queries quickly and effectively</li>
          </ul>
          <p className={style.text1}><strong>Fee:</strong> £91 for a 30-minute guidance call.</p>
          <a href="#" className={style.button}>Learn more and book ↗</a>
          <p className={style.note}><em>By clicking this button you will visit an external booking website.</em></p>
        </div>
      </div>
    </div>
  );
};

export default PlanningAdvice;