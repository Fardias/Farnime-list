import "./globals.css";
import { Inter } from "next/font/google";
import Search from "./search/page";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FARNIMELIST",
  description: "SEARCH ANIME HERE",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
