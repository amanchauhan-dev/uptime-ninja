import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ClerkProvider } from '@clerk/nextjs'
import { ProgressBar } from "@/contexts/progress-bar";


export const metadata: Metadata = {
  title: {
    template: "%s - Uptime Ninja",
    default: "Uptime Ninja"
  },
  description: "UptimeNinja is a lightweight and powerful website uptime and performance monitoring tool that keeps a vigilant eye on your websites and APIs — like a true ninja!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <ProgressBar className="bg-primary h-1">
        <html lang="en" suppressHydrationWarning>
          <body
            className={`antialiased`}
          >
            <ThemeProvider
              attribute="class"
              defaultTheme="light"
              enableSystem
              disableTransitionOnChange
            >
              {children}
            </ThemeProvider>
          </body>
        </html>
      </ProgressBar>
    </ClerkProvider>
  );
}
