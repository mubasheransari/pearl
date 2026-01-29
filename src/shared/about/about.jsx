import React from "react";
import style from "./style.module.scss";
import { Lora } from "next/font/google";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faLinkedin, faYoutube } from "@fortawesome/free-brands-svg-icons";

const lora = Lora({ subsets: ["latin"] });

function About({ isMain }) {
  return (
    <section className={style.about} id="about-us">
      <div className={`${style.about_box} container`}>
        {/* LEFT */}
        <div className={style.left}>
          <div className={style.card}>
            <div className={style.block}>
              <div className={style.kicker}>
                <span className={style.dot} />
                <h5 className={lora.className}>Vision</h5>
              </div>
              <p>
                To benefit society and built environments through resilient structural engineering that
                enhances safety and sustainability using innovative solutions.
              </p>
            </div>

            <div className={style.media}>
              <img src="/about.jpg" alt="About PEPP" />
            </div>

            <div className={style.block}>
              <div className={style.kicker}>
                <span className={style.dot} />
                <h5 className={lora.className}>About Us</h5>
              </div>

              <p>
                Pearl Engineers Planners and Project Managers (PEPP) is a progressive consultancy firm
                dedicated to transforming the residential and commercial construction sectors across the
                United Kingdom. Driven by a commitment to excellence, PEPP merges technical expertise with
                innovative approaches, delivering high-quality engineering solutions that are both reliable
                and forward-looking.
              </p>

              <p>
                Our team of experienced civil and structural engineers understands that each project presents
                unique challenges and requires meticulous attention to detail. Focused on creating robust,
                aesthetically pleasing structures, we prioritize safety, functionality, and sustainability.
                Every project we undertake meets the highest standards, enhancing not only the structural
                integrity but also the architectural appeal of the built environment—turning visions into
                lasting, resilient realities.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className={`${style.right} ${lora.className}`}>
          <div className={style.values}>
            <div className={`${style.word} ${style.stroke}`}>Integrity</div>
            <div className={style.word}>Resilience</div>
            <div className={`${style.word} ${style.stroke}`}>Intelligence</div>
          </div>
        </div>
      </div>

      {!isMain && (
        <div className={style.bottom}>
          <div className={style.social_Link}>
            <div>
              <h4 className={lora.className}>Get Connected</h4>
              <span>
                <ul>
                  <Link href="#"><li><FontAwesomeIcon icon={faFacebookF} /></li></Link>
                  <Link href="https://www.linkedin.com/company/pearl-engineers-planners-project-managers/" target="_blank">
                    <li><FontAwesomeIcon icon={faLinkedin} /></li>
                  </Link>
                  <Link href="#"><li><FontAwesomeIcon icon={faInstagram} /></li></Link>
                  <Link href="#"><li><FontAwesomeIcon icon={faYoutube} /></li></Link>
                </ul>
              </span>
            </div>
          </div>

          <div className={style.mapWrap}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2491.0280513620164!2d0.038921!3d51.365781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNTHCsDIxJzU2LjgiTiAwwrAwMicyMC4xIkU!5e0!3m2!1sen!2s!4v1713013995125!5m2!1sen!2s"
              width="100%"
              height="500"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      )}
    </section>
  );
}

export default About;
