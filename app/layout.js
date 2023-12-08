import { Navbar } from "@/Components";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Yimbs",
  description: "Get Your Services Done",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} box-border m-0 bg-[#202020] font-poppins`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
