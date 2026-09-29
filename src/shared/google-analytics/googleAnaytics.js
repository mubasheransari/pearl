import React from 'react';
import Script from 'next/script';

const GA_ID = 'G-SKGN1K9142';        // Google Analytics 4
const ADS_ID = 'AW-16561850457';     // Google Ads

// One gtag.js load serves both IDs; each ID just needs its own `config` call.
const GoogleAnalytics = () => {
  return (
    <>
      <Script
        id='gtag-js'
        strategy='afterInteractive'
        src={`https://www.googletagmanager.com/gtag/js?id=${ADS_ID}`}
      />

      <Script id='gtag-init' strategy='afterInteractive'>
        {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${ADS_ID}');
              gtag('config', '${GA_ID}', {
                page_path: window.location.pathname,
              });
          `}
      </Script>
    </>
  );
};

export default GoogleAnalytics;
