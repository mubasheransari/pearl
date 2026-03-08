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

      <div className={styles.header}>Take the next step towards planning success</div>
      <div className={styles.content}>
        <p>
       
          Planning doesn’t have to be overwhelming. Whether you need quick advice or in-depth support, our team of planning experts is here to guide you. Book your consultation today and move forward with confidence.
        </p>
        <strong><h4>Why choose us?</h4></strong>
        <p>
         
        Our in-house team of planning experts is dedicated to helping you navigate the often-complex world of planning applications. As a service offered through the <strong> Planning Portal,</strong> powered by TerraQuest, we bring together decades of industry expertise and technological innovation.
       
        </p>
        <p >
        With our personalised, reliable advice, you can trust that you’re receiving guidance from a leading authority in UK planning services. Our relaxed and approachable manner ensures you leave the session feeling informed and confident about the next stage, whether you're tackling a simple query or a more complex planning challenge.
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