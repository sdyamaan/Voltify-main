'use client'

import { ClerkProvider } from "@clerk/nextjs";
import { AppContextProvider } from "@/context/AppContext";

export default function Providers({ children }) {
  return (
    <ClerkProvider>
      <AppContextProvider>{children}</AppContextProvider>
    </ClerkProvider>
  );
}
