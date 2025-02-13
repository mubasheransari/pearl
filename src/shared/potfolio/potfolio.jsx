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
          Our planning experts have helped secure <b>600+</b> planning approvals, with <b>850+</b> planning
          applications pending a decision soon! Click any of our design portfolio projects below to view the required
          architect drawings and planning statements for each planning application.
        </p>
        <p>
          Our team of <b className={style.highlight}>dedicated architectural design experts</b> have put together a
          portfolio of projects we have helped to support, ranging from conservatory additions to dropped kerbs and flat
          conversions.
        </p>
        <p>
          We have a variety of partners who can also help support your application. Take a look at our{' '}
          <b className={style.partnerships}>partnerships</b> today to find out more about what they do and how they
          might be able to help.
        </p>
      </div>

      {/* Image Below Content */}
  <div>
  <h1 className={style.project}>PROJECT TYPES</h1>
 
      <div className={style.imageContainer}>
      
        <Image src="/images/1/Sample   Double Storey Rear Butterfly Roof_page-0001.jpg" alt="Portfolio showcase" width={800} height={800} />
        <Image src="/images/1/Sample   Double Storey Rear Butterfly Roof_page-0002.jpg" alt="Portfolio showcase" width={800} height={800} />
        <Image src="/images/1/Sample   Double Storey Rear Butterfly Roof_page-0003.jpg" alt="Portfolio showcase" width={800} height={800} />
        <Image src="/images/1/Sample   Double Storey Rear Butterfly Roof_page-0004.jpg" alt="Portfolio showcase" width={800} height={800} />
        <Image src="/images/1/Sample   Double Storey Rear Butterfly Roof_page-0005.jpg" alt="Portfolio showcase" width={800} height={800} />
        <Image src="/images/1/Sample   Double Storey Rear Butterfly Roof_page-0006.jpg" alt="Portfolio showcase" width={800} height={800} />

        
        <Image src="/images/2/Sample   Garage Conversion B regs sample_page-0001.jpg" alt="Portfolio showcase" width={800} height={800} />
        <Image src="/images/2/Sample   Garage Conversion B regs sample_page-0002.jpg" alt="Portfolio showcase" width={800} height={800} />
        <Image src="/images/2/Sample   Garage Conversion B regs sample_page-0003.jpg" alt="Portfolio showcase" width={800} height={800} />
        <Image src="/images/2/Sample   Garage Conversion B regs sample_page-0004.jpg" alt="Portfolio showcase" width={800} height={800} />
        <Image src="/images/2/Sample   Garage Conversion B regs sample_page-0005.jpg" alt="Portfolio showcase" width={800} height={800} />
        <Image src="/images/2/Sample   Garage Conversion B regs sample_page-0006.jpg" alt="Portfolio showcase" width={800} height={800} />

        <Image src="/images/4/Sample   Intrenal Remodeling Wall removal Open plan_page-0001.jpg" alt="Portfolio showcase" width={800} height={800} />
        <Image src="/images/4/Sample   Intrenal Remodeling Wall removal Open plan_page-0002.jpg" alt="Portfolio showcase" width={800} height={800} />
        <Image src="/images/4/Sample   Intrenal Remodeling Wall removal Open plan_page-0003.jpg" alt="Portfolio showcase" width={800} height={800} />
        <Image src="/images/4/Sample   Intrenal Remodeling Wall removal Open plan_page-0004.jpg" alt="Portfolio showcase" width={800} height={800} />
        <Image src="/images/4/Sample   Intrenal Remodeling Wall removal Open plan_page-0005.jpg" alt="Portfolio showcase" width={800} height={800} />
        <Image src="/images/4/Sample   Intrenal Remodeling Wall removal Open plan_page-0006.jpg" alt="Portfolio showcase" width={800} height={800} />


        <Image src="/images/5/Sample   New Build Larger_page-0001.jpg" alt="Portfolio showcase" width={800} height={800} />
        <Image src="/images/5/Sample   New Build Larger_page-0002.jpg" alt="Portfolio showcase" width={800} height={800} />
        <Image src="/images/5/Sample   New Build Larger_page-0003.jpg" alt="Portfolio showcase" width={800} height={800} />
        <Image src="/images/5/Sample   New Build Larger_page-0004.jpg" alt="Portfolio showcase" width={800} height={800} />     
        <Image src="/images/5/Sample   New Build Larger_page-0005.jpg" alt="Portfolio showcase" width={800} height={800} />
        <Image src="/images/5/Sample   New Build Larger_page-0006.jpg" alt="Portfolio showcase" width={800} height={800} />


        <Image src="/images/9/Sample   Rear & Loft PD_page-0001.jpg" alt="Portfolio showcase" width={800} height={800} />
        <Image src="/images/9/Sample   Rear & Loft PD_page-0002.jpg" alt="Portfolio showcase" width={800} height={800} />
        <Image src="/images/9/Sample   Rear & Loft PD_page-0003.jpg" alt="Portfolio showcase" width={800} height={800} />
        <Image src="/images/9/Sample   Rear & Loft PD_page-0004.jpg" alt="Portfolio showcase" width={800} height={800} />
        <Image src="/images/9/Sample   Rear & Loft PD_page-0005.jpg" alt="Portfolio showcase" width={800} height={800} />
        <Image src="/images/9/Sample   Rear & Loft PD_page-0006.jpg" alt="Portfolio showcase" width={800} height={800} />


        <Image src="/images/10/Sample   Rear & Remodeling Timber Frame Cosntruction_page-0001.jpg" alt="Portfolio showcase" width={800} height={800} />
        <Image src="/images/10/Sample   Rear & Remodeling Timber Frame Cosntruction_page-0002.jpg" alt="Portfolio showcase" width={800} height={800} />
        <Image src="/images/10/Sample   Rear & Remodeling Timber Frame Cosntruction_page-0003.jpg" alt="Portfolio showcase" width={800} height={800} />
        <Image src="/images/10/Sample   Rear & Remodeling Timber Frame Cosntruction_page-0004.jpg" alt="Portfolio showcase" width={800} height={800} />
        <Image src="/images/10/Sample   Rear & Remodeling Timber Frame Cosntruction_page-0005.jpg" alt="Portfolio showcase" width={800} height={800} />
        <Image src="/images/10/Sample   Rear & Remodeling Timber Frame Cosntruction_page-0006.jpg" alt="Portfolio showcase" width={800} height={800} />


        <Image src="/images/11/Sample   Rear Larger Extension & Remodeling_page-0001.jpg" alt="Portfolio showcase" width={800} height={800} />
        <Image src="/images/11/Sample   Rear Larger Extension & Remodeling_page-0002.jpg" alt="Portfolio showcase" width={800} height={800} />
        <Image src="/images/11/Sample   Rear Larger Extension & Remodeling_page-0003.jpg" alt="Portfolio showcase" width={800} height={800} />
        <Image src="/images/11/Sample   Rear Larger Extension & Remodeling_page-0004.jpg" alt="Portfolio showcase" width={800} height={800} />
        <Image src="/images/11/Sample   Rear Larger Extension & Remodeling_page-0005.jpg" alt="Portfolio showcase" width={800} height={800} />
        <Image src="/images/11/Sample   Rear Larger Extension & Remodeling_page-0006.jpg" alt="Portfolio showcase" width={800} height={800} />
        <Image src="/images/11/Sample   Rear Larger Extension & Remodeling_page-0007.jpg" alt="Portfolio showcase" width={800} height={800} />
        <Image src="/images/11/Sample   Rear Larger Extension & Remodeling_page-0008.jpg" alt="Portfolio showcase" width={800} height={800} />
       



       





   





    




      </div>
      </div>
    </div>
  );
};

export default Portfolio;
