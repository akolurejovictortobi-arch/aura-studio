import { Marcellus, Manrope } from "next/font/google";
import "./globals.css";
const display = Marcellus({ subsets: ["latin"], weight: "400", variable: "--font-display" });
const body = Manrope({ subsets: ["latin"], variable: "--font-body" });
export const metadata = {
  title: "Aura Studio | Branding, UI/UX and Web Design in London",
  description: "Aura Studio is a London creative agency crafting modern, minimalist branding, UI/UX and web design.",
  icons: { icon: "/sections/aura-logo.png" },
};
export default function RootLayout({ children }) {
  return (<html lang="en" className={`${display.variable} ${body.variable}`}><body>{children}</body></html>);
}
