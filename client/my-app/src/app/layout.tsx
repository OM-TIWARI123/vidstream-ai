import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/theme";
import ReactQueryProvider from "@/react-query/index"
import { ReduxProvider } from "@/redux/provider";
import { Toaster } from "sonner";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Opal",
  description: "Share ai powered videos with your friends",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${manrope.className} bg-[#171717]`}>
          <ThemeProvider attribute="class" defaultTheme="dark" disableTransitionOnChange>
            <ReduxProvider>
            <ReactQueryProvider>
              {children}
              <Toaster/>
              </ReactQueryProvider>
            </ReduxProvider>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
