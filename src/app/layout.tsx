"use client";
import { Provider } from "react-redux";
import "./globals.css";
import Footer from "@/components/footer/Footer";
import { usePathname } from "next/navigation";
import { store } from "@/store";
import { clash, epilogue } from "@assets/fonts";
// import { Metadata } from 'next/types';

// export const metadata: Metadata = {
//   title: 'The Intern Place',
//   description: 'The Intern Place',
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <body className={`${epilogue.className} ${clash.variable} relative`}>
        <Provider store={store}>
          {children}
          {pathname !== "/login" &&
            pathname !== "/sign-up" &&
            !pathname.startsWith("/admin") && <Footer />}
        </Provider>
      </body>
    </html>
  );
}
