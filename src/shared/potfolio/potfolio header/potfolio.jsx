import Image from 'next/image';
import style from './potfolio.module.scss';

const Portfolio = () => {
  return (
    <div className={style.container}>
      {/* Background Image Section */}
      <div className={style.background}>
        <h1 className={style.heading}>PORTFOLIO</h1>
      </div>

      {/* Text Content */}
      <div className={style.content}>
        <p>
        Pearl Engineers Planners and Project Managers (PEPP) is dedicated to providing expert planning and architectural design services, guiding clients through every stage of the planning process with precision and care. Our team brings a wealth of experience in delivering tailored solutions for a wide range of projects, from residential extensions and conversions to complex commercial developments.
        </p>
      
        <p>
        With a focus on innovation, functionality, and aesthetics, we ensure that every design not only meets regulatory standards but also enhances the built environment. Our commitment to excellence is reflected in our collaborative approach, working closely with clients and partners to turn visions into reality. At PEPP, we offer comprehensive support to help navigate the planning process smoothly, delivering high-quality outcomes that stand the test of time.
        </p>
      </div>

      {/* Image Below Content */}

    </div>
  );
};

export default Portfolio;
