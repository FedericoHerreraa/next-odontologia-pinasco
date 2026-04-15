import type { Metadata } from "next";
import "./globals.css";
import { WhatsAppIcon } from "./components/WhatsAppIcon";
import { MobileViewProvider } from "./context/MobileView";
import { Footer } from "./components/Footer";
import { MetaPixel } from "./components/MetaPixel";

export const metadata: Metadata = {
  title: "Pinasco Odontologia",
  description: "Pinasco Odontologia es una clinica odontologica que se dedica a la salud bucal de sus pacientes.",
};


export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="https://res.cloudinary.com/dikdtnj2b/image/upload/v1736119219/P_efhkut.png"/>
      </head>
      <body>
        <MetaPixel />
        <MobileViewProvider>
          {children}
          <WhatsAppIcon />
          <Footer />
        </MobileViewProvider>
      </body>
    </html>
  );
}
