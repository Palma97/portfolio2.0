import { Playfair } from "next/font/google";

export const playfair = Playfair({
  subsets: ["latin"],
  weight: ["400", "700"], // Puedes ajustar los pesos que necesitas
  variable: "--font-playfair",
});
