import { Archivo, Inter, Oswald } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const oswald = Archivo({ subsets: ["latin"] });

export const metadata = {
  title: "Techno Innovation Challenge Cambodia",
  description: "Techno Innovation Challenge Cambodia",
};

export default function RootLayout({ children}) {
  return (
    <html lang="en">
      <body className={oswald.className}>

        {children}

      </body>
    </html>
  );
}
