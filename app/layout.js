import Navbar from "@/components/Navbar";
import "./globals.css";
import { Montserrat, Open_Sans } from 'next/font/google';
import ChatBot from "@/components/ChatBot";
import Footer from "@/components/Footer";


const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400','500','600', '700','800'], 
  variable: '--font-montserrat',
});

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'], 
  variable: '--font-open-sans', 
});


export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${openSans.variable} antialiased`}
      > 
      <Navbar/>
      <ChatBot/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
