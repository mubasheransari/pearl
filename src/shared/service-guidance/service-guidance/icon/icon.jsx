import React from "react";
import styles from "./icon.module.scss";
import {
  Home as HomeIcon,
  Smartphone as SmartphoneIcon,
  Description as DescriptionIcon,
  AccountTree as AccountTreeIcon,
} from "@mui/icons-material"; // Importing MUI icons

const Cards = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.icon}>
          <HomeIcon fontSize="large" color="success" />
        </div>
        <h3>Common projects</h3>
        <p>
          Use our guides or the links in our common projects table to find
          guidance on the building work you have in mind.
        </p>
        <button className={styles.button}>Browse common projects</button>
      </div>

      <div className={styles.card}>
        <div className={styles.icon}>
          <SmartphoneIcon fontSize="large" color="success" />
        </div>
        <h3>Interactive guides</h3>
        <p>
          Our guides provide visual clarification of the permitted development
          rules for specific projects.
        </p>
        <button className={styles.button}>Explore</button>
      </div>

      <div className={styles.card}>
        <div className={styles.icon}>
          <DescriptionIcon fontSize="large" color="success" />
        </div>
        <h3>Your responsibilities</h3>
        <p>
          Learn about considerations before you start work and other permissions
          you may require.
        </p>
        <button className={styles.button}>Learn more</button>
      </div>

      <div className={styles.card}>
        <div className={styles.icon}>
          <AccountTreeIcon fontSize="large" color="success" />
        </div>
        <h3>What to do next</h3>
        <p>
          Browse our guidance covering lawful development certificates and other
          permissions you may require before you start building work.
        </p>
        <button className={styles.button}>Read guidance</button>
      </div>
    </div>
  );
};

export default Cards;
