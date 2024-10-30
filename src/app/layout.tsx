"use client";
import { Provider } from "react-redux";
import "./globals.css";
import Footer from "@/components/footer/Footer";
import { usePathname } from "next/navigation";
import { store } from "@/store";
import { clash, epilogue } from "@assets/fonts";
import { Toaster } from "@/components/ui/toaster";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
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
          <DndProvider backend={HTML5Backend}>
            {children}
            {pathname !== "/login" &&
              pathname !== "/sign-up" &&
              pathname !== "/settings" &&
              pathname !== "/help-centre" &&
              !pathname.startsWith("/admin") && <Footer />}
          </DndProvider>
        </Provider>
        <Toaster />
      </body>
    </html>
  );
}
