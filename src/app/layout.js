import "./globals.css";

export const metadata = {
  title: "Hyperlocal PWA - Connect with Your Local Community",
  description: "Discover local shops, browse products, and manage your orders all in one place. Join the hyperlocal marketplace that brings your community together.",
  manifest: "/manifest.json",
  themeColor: "#3b82f6",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap" rel="stylesheet" />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
