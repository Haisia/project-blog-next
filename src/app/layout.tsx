import type {Metadata} from "next";
import "./globals.css";
import {ReactNode} from "react";
import Header from "@/app/header";
import Footer from "@/app/footer";
import Navbar from "@/app/navigation";
import ScrollTop from "@/app/(clients)/scrollTop";
import { Analytics } from "@vercel/analytics/next"

export const metadata: Metadata = {
  title: "Haisia\`s blog",
  description: "Haisia\`s Dev blog",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout(
  {
    children,
  }: Readonly<{
    children: ReactNode;
  }>) {
  return (
    <html lang="en">
      <body className="bg-myblack text-white">
        <Analytics />
        <Header/>
        <div className="flex items-stretch min-h-[500px]">
          <Navbar/>
          <Main>{children}</Main>
        </div>
        <ScrollTop/>
        <Footer/>
      </body>
    </html>
  );
}

const Main = ({children}: { children: ReactNode }) => {
  return (
    <div className="flex-1 flex items-stretch">
      {children}
    </div>
  );
};