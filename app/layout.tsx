import type { Metadata } from "next";
import { fraunces, inter, plexMono } from "./lib/Fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Waypoint — Plan your next trip in minutes",
  description:
    "Smart, flexible travel itineraries with visual route mapping, real-time collaboration, and conflict-free scheduling.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} ${plexMono.variable}`}
    >
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
