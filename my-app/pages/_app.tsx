import "@/styles/globals.css";
import { ThemeProvider } from "@emotion/react";
import type { AppProps } from "next/app";
import { Inter } from "@next/font/google";
import { Plus_Jakarta_Sans } from "@next/font/google";

const PKS = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: "500",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={PKS.className}>
      <Component {...pageProps} />
    </main>
  );
}
