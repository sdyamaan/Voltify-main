import "./globals.css";
import Providers from "@/components/Providers";
import { SignInButton, SignUpButton, Show, UserButton } from "@clerk/nextjs";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <header>
            <Show when="signed-out">
              <SignInButton />
              <SignUpButton />
            </Show>
            <Show when="signed-in">
              <UserButton />
            </Show>
          </header>
          {children}
        </Providers>
      </body>
    </html>
  );
}