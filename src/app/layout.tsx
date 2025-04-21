import type {Metadata} from "next";
import "./globals.css";
import {ReactNode} from "react";
import Header from "@/app/header";
import Footer from "@/app/footer";
import Navbar from "@/app/navigation";

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
        <Header/>

        {/* 콘텐츠 영역 (Sidebar + Main) */}
        <div className="flex items-stretch min-h-[500px]">
          <Navbar/> {/* ← 사이드 네브바 */}
          <Main>{children}</Main> {/* ← 메인 */}
        </div>

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