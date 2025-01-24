import { Poppins } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "@/shared/google-analytics/googleAnaytics";
import Header from "@/shared/header/header";
import Footer from "@/shared/footer/footer";

const poppins = Poppins({weight:'400', subsets: ["latin"] });

export const metadata = {
  title: "PEARL ENGINEERS, PLANNERS & PROJECT MANAGERS",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GoogleAnalytics />
      <head>
        <link href="/bootstrap.min.css" rel="stylesheet" />
        {/* <link  rel="canonical" href="https://pearlepp.co.uk/" /> */}
        <link rel="alternate" href="https://pearlepp.co.uk/" hreflang="en-uk" />
        <meta name="google-site-verification" content="5jllG5yaIGP4yMEIFPLQE308aMGx-Y_9jCLesHYeaU4" />
        <meta name="google-site-verification" content="5jllG5yaIGP4yMEIFPLQE308aMGx-Y_9jCLesHYeaU4" />
        <script src="/bootstrap.bundle.min.js" />
         <script
            dangerouslySetInnerHTML={{
                __html: `
                    (function(w,d,s,l,i){
                      w[l]=w[l]||[];w[l].push(
                      {
                        'gtm.start':new Date().getTime(),event:'gtm.js'}
                      );
                    var f=d.getElementsByTagName(s)[0],
                      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                      })(window,document,'script','dataLayer','GTM-MPZD5CKM');
                `,
            }}
                />

      </head>
      <body className={poppins.className}>
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Pearlepp" />
      <meta property="og:description" content=" Pearl Engineers, Planners, and Project Managers (PEPP) is an emerging engineering consultancy in the UK, specializing in residential and commercial construction. They offer services in structural engineering, planning, and project management, focusing on quality, safety, and innovative solutions. " />
      <meta property="og:url" content="https://pearlepp.co.uk/" />
      <meta property="og:image" content="https://pearlepp.co.uk/pearl.png" />
      <meta property="og:image:width" content="880" />
      <meta property="og:image:height" content="660" />
      <meta property="og:locale" content="en_UK" />
      <meta property="og:site_name" content="Pearlepp" />
      <meta name="robots" content="index, follow" />
      <meta name="bingbot" content="index, follow, max-snippet:-1 " />
      <meta name="googlebot" content="index, follow, max-snippet:-1" />
      <script
        dangerouslySetInnerHTML={{
            __html: `
                (function(w,d,s,l,i){
                    w[l]=w[l]||[];
                    w[l].push({'gtm.start':
                    new Date().getTime(),event:'gtm.js'});
                    var f=d.getElementsByTagName(s)[0],
                        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
                    j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                    f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-MPZD5CKM');
            `,
        }}
                />
        <script type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: `
                          {
                            "@context": "https://schema.org/",
                            "@type": "WebSite",
                            "name": "Pearlepp",
                            "url": "https://pearlepp.co.uk/",
                            "potentialAction": {
                              "@type": "SearchAction",
                              "target": "https://pearlepp.co.uk/search?q{search_term_string}",
                              "query-input": "required name=search_term_string"
                            }
                          }
                        `,
                    }}
                        />
        <script type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: `
                          {
                            "@context": "https://schema.org",
                            "@type": "Organization",
                            "name": "Pearlepp",
                            "alternateName": "Pearlepp",
                            "url": "https://pearlepp.co.uk/",
                            "logo": "https://pearlepp.co.uk/pearl.png"
                            }
                              `,
                          }}
                        />
        <script type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: `
                          {
                            "@context": "https://schema.org",
                            "@type": "ProfessionalService",
                            "name": "Pearlepp",
                            "image": "https://pearlepp.co.uk/pearl.png",
                            "@id": "",
                            "url": "https://pearlepp.co.uk/",
                            "telephone": "+44 2035763199",
                            "priceRange": "$",
                            "address": {
                              "@type": "PostalAddress",
                              "streetAddress": "Flat 02 Towerfieds, Westerham Road Bromley",
                              "addressLocality": "London",
                              "postalCode": "BR2 6HF",
                              "addressCountry": "GB"
                            },
                            "geo": {
                              "@type": "GeoCoordinates",
                              "latitude": 51.3566726,
                              "longitude": 0.0368212
                            }  
                          }
                              `,
                  }}
                />
        <Header/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
