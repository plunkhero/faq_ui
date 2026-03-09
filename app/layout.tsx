import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import { ChatProvider } from "@/components/support/chatbot/ChatProvider";
import Footer from "@/components/layout/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={{ fontSize: "16px" }}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Share+Tech+Mono&family=Sarabun:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          background: "#06101e",
          fontSize: "16px",
          WebkitFontSmoothing: "antialiased",
        }}
      >
        <ChatProvider>
          <Navbar />

          <main style={{ flex: 1, display: "flex", flexDirection: "column" }}>
            {children}
          </main>

          <Footer />
        </ChatProvider>
      </body>
    </html>
  );
}