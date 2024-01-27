import type { Metadata } from "next";
import { SWRConfig } from "swr";
import localFont from "next/font/local";
import { Inter, M_PLUS_Rounded_1c, Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
// import Footer from "@/components/footer";
import ThemeProvider from "@/provider/theme-provider";
import ScrollToTopButton from "@/components/scroll-to-top";
import TransitionLayout from "@/components/layouts/TransitionLayout";
const myFont = localFont({
  src: "../../assets/fonts/CONSOLA.ttf",
  display: "swap",
});
const mPlus = Open_Sans({
  subsets: ["vietnamese"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Cat Anhht",
  description: "Blog của Hoàng Tuấn Anh",
  keywords: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "Dev and Design",
    "CatAnh",
    "CatAnh Shop",
  ],
  authors: [
    {
      name: "anhht",
      url: "https://github.com/anhht1511",
    },
  ],
  creator: "anhht",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="scroll-smooth no-scrollbar" lang="en">
      <body
        className={` ${myFont.className} dark:bg-[#202023] dark:text-white`}
      >
        <ScrollToTopButton />
        <ThemeProvider>
          <main className="mx-auto px-[20px] max-w-[600px]">
            <TransitionLayout>{children}</TransitionLayout>
          </main>
          <div className=" w-full py-[20px]">
            <p className="text-center text-[14px] text-[rgba(255,255,255,0.5)]">
              © 2024 Hoàng Tuấn Anh. All Rights Reserved.
            </p>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
