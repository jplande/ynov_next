import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Poppins } from "next/font/google";

const poppins = Poppins({
 weight: ["400", "600"],
 style: ["normal"],
 subsets: ["latin"],
 display: "swap",
 variable: "--font-poppins",}); 


export default function App({ Component, pageProps }: AppProps) {
  return (<div >
      <Component className={`${poppins.variable} font-sans`} {...pageProps} />
    </div>
  );
}