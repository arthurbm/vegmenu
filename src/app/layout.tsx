import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import { TRPCReactProvider } from "@/trpc/react";

export const metadata: Metadata = {
  title: "VEGMENU - Discover Vegetarian Delights",
  description:
    "Find delicious vegetarian options from your favorite restaurants, powered by AI",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable} h-full`}>
      <body className="h-full overflow-x-hidden bg-[url('/bg-pattern.svg')] bg-fixed">
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  );
}
