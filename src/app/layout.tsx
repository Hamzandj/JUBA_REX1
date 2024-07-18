"use client";

import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

import { Analytics } from "@vercel/analytics/react";

import BottomNav from "@/components/bottom-nav";
import Sidebar from "@/components/sidebar";
import Topbar from "@/components/topbar";
import { User, UserProfile } from "@/types";
import { useState } from "react";
import { JubarexContext } from "./context";

const nunito = Nunito({ subsets: ["latin"] });

const metadata: Metadata = {
  title: "Ancient Treasures",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<User | undefined>();
  const [userProfile, setUserProfile] = useState<UserProfile | undefined>();

  return (
    <html lang="en">
      <body
        className={`font-nunito bg-bg-color-light dark:bg-bg-color-dark/50`}
      >
        <JubarexContext.Provider
          value={{ user, setUser, userProfile, setUserProfile }}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Sidebar />
            <Topbar />
            <BottomNav />

            <main className="main">{children}</main>
          </ThemeProvider>
          <Analytics />
        </JubarexContext.Provider>
      </body>
    </html>
  );
}
