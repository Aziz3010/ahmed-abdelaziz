"use client";
import { Providers } from "@/app/provider";
import "./globals.css";

// Main layout in all app pages
const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html id="root" lang="en" className="light">
      <head>
        <title>Ahmed Abdelaziz</title>
        <link
          rel="shortcut icon"
          href="./images/logo.png"
          type="image/x-icon"
        />
      </head>
      <body>
        <Providers>
          <main>
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
};

export default AppLayout;