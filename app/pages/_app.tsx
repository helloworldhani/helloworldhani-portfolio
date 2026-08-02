import type { AppProps } from "next/app";
import Nav from "@/components/nav";
import "@/app/globals.css"; // move globals.css to /styles if you delete app/ entirely

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Nav />
      <Component {...pageProps} />
    </>
  );
}