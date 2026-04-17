import { Inter, Playfair_Display  } from "next/font/google";
import "./styles/globals.css";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import SmoothScroll from "@/components/layout/SmoothScoll";
import SplashComp from "@/components/layout/SplashComp";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata = {
  title: "Groves-WeUno",
  description: "Groves-WeUno",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SplashComp>
        <SmoothScroll>
        <Header/>
        {children}
        <Footer/>
        </SmoothScroll>
        </SplashComp>
        </body>
    </html>
  );
}
