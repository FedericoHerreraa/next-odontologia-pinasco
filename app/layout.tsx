import type { Metadata } from "next";
import "./globals.css";
import { Header } from "./components/Header";
import { WhatsAppIcon } from "./components/WhatsAppIcon";
import { MobileViewProvider } from "./context/MobileView";
import { Footer } from "./components/Footer";

export const metadata: Metadata = {
  title: "Pinasco Odontologia",
  description: "Pinasco Odontologia es una clinica odontologica que se dedica a la salud bucal de sus pacientes.",
};


export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      {/* <head>
        <link rel="icon" href="/P.png" sizes="any" />
      </head> */}
      <body>
        <MobileViewProvider>
          <Header />
          {children}
          <WhatsAppIcon />
          <Footer />
        </MobileViewProvider>
      </body>
    </html>
  );
}
