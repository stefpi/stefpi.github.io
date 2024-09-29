import { Rubik } from "next/font/google";

import "./globals.css";

export const metadata = {
  title: "stefpi.github.io",
  description: "a time capsule of a limited collection of knowledge explorations",
};

const rubik = Rubik({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width,height=device-height,initial-scale=1" />
      </head>
      <body className={rubik.className}>
        <div>
          {children}
        </div>
      </body>
    </html>
  );
}
