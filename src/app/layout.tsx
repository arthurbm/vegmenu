import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import { TRPCReactProvider } from "@/trpc/react";

export const metadata: Metadata = {
  title: "VEGMENU - Discover Vegetarian Options",
  description: "Find vegetarian menu items from your favorite restaurants",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body className="overflow-x-hidden">
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  );
}
