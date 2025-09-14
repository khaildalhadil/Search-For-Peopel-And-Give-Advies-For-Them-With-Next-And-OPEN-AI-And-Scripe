import type { Metadata } from "next";
import { Bitcount_Prop_Double } from "next/font/google";
import "./globals.css";

const ricolageGrotesque = Bitcount_Prop_Double({subsets: ["latin"],weight: "400"});

export const metadata: Metadata = {
  title: "حصل نصائح من khalid ai",
  description: "اكتب اسمك و حصل على نصائح لي الاينكدن مالك مزود بي الذكاء الاصطناعي",
  icons: 'favicon.ico'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="favicon.ico" sizes="any" />
      <body className={`${ricolageGrotesque.className} antialiased bg-black`}>
        {children}
      </body>
    </html>
  );
}
