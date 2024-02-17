import { Navbar } from "@/Components";
import "./globals.css";
import { Inter } from "next/font/google";
import LoginRegisterController from "@/Components/loginRegister/LoginRegisterController";
import { ReduxProvider } from "./storeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Yimbs",
  description: "Get Your Services Done",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} box-border bg-[#202020] font-poppins relative`}>
        <ReduxProvider>
          <Navbar />
          {children}
          <LoginRegisterController />
        </ReduxProvider>
      </body>
    </html>
  );
}
