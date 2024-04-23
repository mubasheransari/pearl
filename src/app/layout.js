import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PEARL ENGINEERS, PLANNERS & PROJECT MANAGERS",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="/bootstrap.min.css" rel="stylesheet" />
        <script src="/bootstrap.bundle.min.js" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
