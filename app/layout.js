import { Poppins, Inter } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: ['100', '200', '400', '800'] });

export const metadata = {
  title: "My Web App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
