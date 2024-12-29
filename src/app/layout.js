import "./globals.css";

export const metadata = {
  title: "stefpi.github.io",
  description: "a time capsule of a limited collection of knowledge explorations",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width,height=device-height,initial-scale=1" />
      </head>
      <body>
        <div>
          {children}
        </div>
      </body>
    </html>
  );
}
