"use client"
import "./globals.css";
import App from "./App"
import React, { useEffect, useState } from 'react';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

    const [isClient, setIsClient] = useState(false);
  
    useEffect(() => {
      // This code only runs on the client side
      setIsClient(true);
    }, []);

  return (
    <html lang="en">
      <body>
      {isClient ? (
        <App/>
      ) : (
        <p>Loading...</p>
      )}
      </body>
    </html>
  );
}
