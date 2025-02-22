'use client';  
import React, { useState, useEffect, Suspense } from 'react';  
import { useSearchParams, useRouter } from 'next/navigation';  
import styles from './ThingWeCan.module.scss';
import Development from './All-compoent/Development';
import Ecommerce from './All-compoent/Ecommerce/Ecommerce';
import WebApplication from './All-compoent/Web application/WebApplication';
import MobileAppDevelopment from './All-compoent/Mobile App/MobileApp';
import DataScraping from './All-compoent/Data Scraping/DataScraping';
import Ai from './All-compoent/AI/Ai';
import DotNet from "./All-compoent/DOT NET/DotNet";
import Cbs from "./All-compoent/CBS/Cbs";
import Shopify from "./All-compoent/Shopify/Shopify";
import Pdf10 from './All-compoent/pdf10/ten';
import Pdf11 from './All-compoent/pdf11/11';
import Pdf12 from './All-compoent/pdf12/12';
import Pdf13 from './All-compoent/pdf13/13';
import Pdf14 from './All-compoent/pdf14/14';
import Pdf15 from './All-compoent/pdf15/15';
import Pdf16 from './All-compoent/pdf16/16';
import Pdf17 from './All-compoent/pdf17/17';
import Pdf18 from './All-compoent/pdf18/18';
import Pdf19 from './All-compoent/pdf18/18';
import Pdf20 from './All-compoent/pdf20/20';
import Pdf21 from './All-compoent/pdf21/21';
import Pdf22 from './All-compoent/pdf22/22';
import Pdf23 from './All-compoent/pdf23/23';
import Pdf24 from './All-compoent/pdf24/24';
import Pdf25 from './All-compoent/pdf25/25';
import Pdf26 from './All-compoent/pdf26/26';
import Pdf27 from './All-compoent/pdf27/27';
import Pdf28 from './All-compoent/pdf28/28';
import Pdf29 from './All-compoent/pdf29/29';
import Pdf30 from './All-compoent/pdf30/30';
import Pdf31 from './All-compoent/pdf31/31';
import Pdf32 from './All-compoent/pdf32/32';
import Pdf33 from './All-compoent/pdf33/33';
import Pdf34 from './All-compoent/pdf34/34';
import Pdf35 from './All-compoent/pdf35/35';
import Pdf36 from './All-compoent/pdf36/36';




function CustomTabPanel({ children, value, index }) {
  return (
    
    <div role="tabpanel" hidden={value !== index} className={styles.tabsContent}>
      {value === index && <div className={styles.panelContent}>{children}</div>}
    </div>
  );
}

function ClientSideTabs() {
  const [value, setValue] = useState(0); 
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const tabFromURL = searchParams.get('id'); // Get tab index from URL
    if (tabFromURL !== null && !isNaN(tabFromURL) && tabFromURL >= 0 && tabFromURL < 9) {
      setValue(Number(tabFromURL)); // Set the tab value based on URL parameter
    }
  }, [searchParams]);  // Add searchParams as a dependency

  const handleChange = (newValue) => {
    setValue(newValue);

    // Update the URL without reloading the page
    const newSearchParams = new URLSearchParams(searchParams.toString());
    newSearchParams.set('id', newValue);
    router.replace(`?${newSearchParams.toString()}`, { scroll: false });
  };

  const tabLabels = [
    "Double Storey Rear Butterfly Roof", "Garage Conversion B regs  ", "Intrenal Remodeling Wall removal Open plan","New Build Larger", "Planning  Decision  LFDC ", 
    "Planning  Decision Double Sotrey Rear & Elevation Alterations",  "   Planning Prior Approval For Larger Extension",  "Rear & Loft PD","Rear & Remodeling Timber Frame Cosntruction","Rear Larger Extension & Remodeling",
    "Residential Property Survey ","chimney calcs","Small Wall Removal","Earth Retaining Steel Structure Stair Design","Outbuilding with Screw Piles Structural Design",
    " chimney"," Double sotrey Side & Rear"," home buyer","measure survey"," Measured Survey"," New Build Design Calcs"," New Build Small"," Project 6 Rear & Loft With 3D Prespectives"," Project Conversion",
    " project Rear & Loft"," Rear Extension With 3D Prespectives"," Rear Single Storey Small Extension"," report land sliding"," report strutural Damages",
    " Underpining Drawings"," wall removal calcs"," wall removal DWG"," Wrap Around Extension"," Larger Loft & Kitchen Extension","Structural Analysis of Roof for additional loading","Garage Sample Structure Calculation Report"

  



    
  ];

  return (
    <div className={styles.tabsContainer} id='thing'>
     <h1 className={styles.header}>Project Type</h1>
      <div className={styles.contentWrapper}>
        <div className={styles.tabsHeader}>
          {tabLabels.map((label, index) => (
            <div
              key={index}
              className={`${styles.tabLabel} ${value === index ? styles.activeTab : ''}`}
              onClick={() => handleChange(index)}
            >
              {label}
            </div>
          ))}
        </div>

        <div className={styles.tabsContent}>
          <CustomTabPanel value={value} index={0}><Development /></CustomTabPanel>
          <CustomTabPanel value={value} index={1}><Ecommerce /></CustomTabPanel>
          <CustomTabPanel value={value} index={2}><Cbs /></CustomTabPanel>
          <CustomTabPanel value={value} index={3}><WebApplication /></CustomTabPanel>
          <CustomTabPanel value={value} index={4}><Ai /></CustomTabPanel>
          <CustomTabPanel value={value} index={5}><MobileAppDevelopment /></CustomTabPanel>
          <CustomTabPanel value={value} index={6}><DataScraping /></CustomTabPanel>
          <CustomTabPanel value={value} index={7}><DotNet /></CustomTabPanel>
          <CustomTabPanel value={value} index={8}><Shopify /></CustomTabPanel>
          <CustomTabPanel value={value} index={9}><Pdf10 /></CustomTabPanel>
          <CustomTabPanel value={value} index={10}><Pdf11 /></CustomTabPanel>
          <CustomTabPanel value={value} index={11}><Pdf12 /></CustomTabPanel>
          <CustomTabPanel value={value} index={12}><Pdf13 /></CustomTabPanel>
          <CustomTabPanel value={value} index={13}><Pdf14 /></CustomTabPanel>
          <CustomTabPanel value={value} index={14}><Pdf15 /></CustomTabPanel>
          <CustomTabPanel value={value} index={15}><Pdf16 /></CustomTabPanel>
          <CustomTabPanel value={value} index={16}><Pdf17 /></CustomTabPanel>
          <CustomTabPanel value={value} index={17}><Pdf18 /></CustomTabPanel>
          <CustomTabPanel value={value} index={18}><Pdf19 /></CustomTabPanel>
          <CustomTabPanel value={value} index={19}><Pdf20 /></CustomTabPanel>
          <CustomTabPanel value={value} index={20}><Pdf21 /></CustomTabPanel>
          <CustomTabPanel value={value} index={21}><Pdf22 /></CustomTabPanel>
          <CustomTabPanel value={value} index={22}><Pdf23 /></CustomTabPanel>
          <CustomTabPanel value={value} index={23}><Pdf24 /></CustomTabPanel>
          <CustomTabPanel value={value} index={24}><Pdf25 /></CustomTabPanel>
          <CustomTabPanel value={value} index={25}><Pdf26 /></CustomTabPanel>
          <CustomTabPanel value={value} index={26}><Pdf27 /></CustomTabPanel>
          <CustomTabPanel value={value} index={27}><Pdf28 /></CustomTabPanel>
          <CustomTabPanel value={value} index={28}><Pdf29 /></CustomTabPanel>
          <CustomTabPanel value={value} index={29}><Pdf30 /></CustomTabPanel>
          <CustomTabPanel value={value} index={30}><Pdf31 /></CustomTabPanel>
          <CustomTabPanel value={value} index={31}><Pdf32 /></CustomTabPanel>
          <CustomTabPanel value={value} index={32}><Pdf33 /></CustomTabPanel>
          <CustomTabPanel value={value} index={33}><Pdf34 /></CustomTabPanel>
          <CustomTabPanel value={value} index={34}><Pdf35 /></CustomTabPanel>
          <CustomTabPanel value={value} index={35}><Pdf36 /></CustomTabPanel>


        </div>
      </div>
    </div>
  );
}

export default function ClientSideTabsWithSuspense() {
  return (
    <Suspense fallback={<div className={styles.loading}>Loading tabs...</div>}>
      <ClientSideTabs />
    </Suspense>
  );
}








