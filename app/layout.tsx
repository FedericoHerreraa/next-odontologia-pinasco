import type { Metadata } from "next";
import "./globals.css";
import { Header } from "./components/Header";
import { WhatsAppIcon } from "./components/WhatsAppIcon";

export const metadata: Metadata = {
  title: "Pinasco Odontologia",
  description: "Pinasco Odontologia es una clinica odontologica que se dedica a la salud bucal de sus pacientes.",
};


export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>
        <Header />
        {children}
        <WhatsAppIcon />
      </body>
    </html>
  );
}
