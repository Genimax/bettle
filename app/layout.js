import { Inter } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bettle",
  description:
    "Place your bet on a team using cryptocurrency and join the month-long competition.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <SpeedInsights />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
