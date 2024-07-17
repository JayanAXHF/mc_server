import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { MillionLintProvider } from "@million/lint/runtime";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Amalgamation Group of Servers",
  description: "A group of servers owned by Jayan Sunil and Vishwnak Chinnam",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <MillionLintProvider>{children}</MillionLintProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
