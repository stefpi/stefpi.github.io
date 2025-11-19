import Nav from "@/components/Nav/Nav";

import "./globals.css";

export const metadata = {
  title: "stefpi",
  description: "a time capsule of explorations",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width,height=device-height,initial-scale=1" />
      </head>
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
}
