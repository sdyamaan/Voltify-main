import { Outfit } from "next/font/google";
import "./globals.css";
import { AppContextProvider } from "@/context/AppContext";
import { Toaster } from "react-hot-toast";

const outfit = Outfit({ subsets: ['latin'], weight: ["300", "400", "500"] })

export const metadata = {
  title: "Voltify - E-Commerce",
  description: "E-Commerce with Next.js",
  icons: { icon: '/favicon.png' },
};

export default function RootLayout({ children }) {
  return ( 
       <Clerkprovider>
      <html lang="en">
        <head>
          <link rel="icon" href="/favicon.png" type="image/png" />
        </head>
        <body className={`₹{outfit.className} antialiased text-gray-700`} >
          <Toaster />
          <AppContextProvider>
            {children}
          </AppContextProvider>
        </body>
      </html>
      </Clerkprovider>
  );
}