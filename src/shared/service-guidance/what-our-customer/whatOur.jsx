import styles from "./whtaOur.module.scss";

const Testimonial = () => {
  return (
    <div className={styles.main}>
      <div className={styles.header}>What our customers say</div>
      <div className={styles.content}>
        <p>
          <strong>
            "This service was so helpful, Rebecca replied promptly and efficiently
            providing excellent advice and was very knowledgeable.
          </strong>
        </p>
        <p>
          <strong>
            I would highly recommend using TerraQuest and will use them again."
          </strong>
        </p>
        <p className={styles.author}>
          <em>Louise Stanhope, homeowner</em>
        </p>
      </div>



      <div className={styles.header}>What our customers say</div>
      <div className={styles.content}>
        <p>
          <strong>
            "This service was so helpful, Rebecca replied promptly and efficiently
            providing excellent advice and was very knowledgeable.
          </strong>
        </p>
        <p>
          <strong>
            I would highly recommend using TerraQuest and will use them again."
          </strong>
        </p>
        <p className={styles.author}>
          <em>Louise Stanhope, homeowner</em>
        </p>
      </div>


      <div className={styles.terms}>
        <div className={styles.header}>Terms and disclaimer</div>
        <div className={styles.content}>
          <p><strong>Terms and conditions:</strong> Terms and conditions apply. <a href="#">Read our full terms and conditions.</a></p>
          <p><strong>Privacy Policy:</strong> We value your privacy and are committed to protecting your personal information. <a href="#">Read our privacy notice.</a></p>
          <p><strong>Disclaimer:</strong> The advice provided during our consultations is based on the information available to us at the time and to the best of our knowledge. While we strive to offer accurate and up-to-date guidance, we cannot guarantee the outcome of your planning application as it is subject to the discretion of local authorities.</p>
        </div>
      </div>






    </div>





  );
};

export default Testimonial;
