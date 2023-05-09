import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NextNProgress from "nextjs-progressbar";
import Script from "next/script";
import Link from "next/link";

export default function App({ Component, pageProps }) {
  return (
    <>
    <Link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" 
    integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" 
    crossorigin="anonymous" />
    <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" 
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" 
        crossorigin="anonymous"
      />
      <NextNProgress
        color="#7E7E7E"
        options={{ showSpinner: false }}
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}
