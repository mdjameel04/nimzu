import { Poppins, Bebas_Neue, Pacifico } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
});

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas",
});

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-pacifico",
});

export const metadata = {
  title: "Juice App",
  description: "Pure taste, pure nature",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html
      lang="en"
      className={`${poppins.variable} ${bebasNeue.variable} ${pacifico.variable} h-full antialiased`}
      >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
      </ClerkProvider>
  );
}