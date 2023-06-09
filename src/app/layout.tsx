import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Suspense } from "react";
import "./globals.css";
import Loading from "./loading";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Suspense fallback={<Loading />}>
        <body className="bg-gray-100 container mx-auto flex flex-col w-full min-h-screen">
          <Header />
          {children}
          <div className="flex-grow" />
          <Footer />
        </body>
      </Suspense>
    </html>
  );
}
