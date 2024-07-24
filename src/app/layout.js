import { Poppins } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "@/shared/google-analytics/googleAnaytics";

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
        <link  rel="canonical" href="https://pearlepp.co.uk/" />
        <link rel="alternate" href="https://pearlepp.co.uk/" hreflang="en-uk" />
        <meta name="google-site-verification" content="5jllG5yaIGP4yMEIFPLQE308aMGx-Y_9jCLesHYeaU4" />
        <meta name="google-site-verification" content="5jllG5yaIGP4yMEIFPLQE308aMGx-Y_9jCLesHYeaU4" />
        <script src="/bootstrap.bundle.min.js" />
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
      
        {children}
      </body>
    </html>
  );
}
