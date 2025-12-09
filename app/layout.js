import { Outfit } from "next/font/google";
import "./globals.css";
import { AppContextProvider } from "@/context/AppContext";
import { Toaster } from "react-hot-toast";
<<<<<<< HEAD
import { ClerkProvider } from "@clerk/nextjs";
=======
import { ClerkProvider} from "@clerk/nextjs";
>>>>>>> e23eb9ba502a25a5bbe3a8c2cbaea51051c75502

const outfit = Outfit({ subsets: ['latin'], weight: ["300", "400", "500"] })

export const metadata = {
  title: "QuickCart",
  description: "E-Commerce with Next.js ",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
<<<<<<< HEAD
      <html lang="en">
        <body className={`${outfit.className} antialiased text-gray-700`} >
=======
      <html lang="en" suppressHydrationWarning>
        <body className={`${outfit.className} antialiased text-gray-700`} suppressHydrationWarning>
>>>>>>> e23eb9ba502a25a5bbe3a8c2cbaea51051c75502
          <Toaster />
          <AppContextProvider>
            {children}
          </AppContextProvider>
        </body>
      </html>
<<<<<<< HEAD
      </ClerkProvider>
=======
    </ClerkProvider>
>>>>>>> e23eb9ba502a25a5bbe3a8c2cbaea51051c75502
  );
}
