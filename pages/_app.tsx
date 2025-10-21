import '@/styles/globals.css'
import { PlasmicRootProvider } from "@plasmicapp/react-web";
import type { AppProps } from "next/app";
import Head from "next/head";
import Link from "next/link";
import Script from 'next/script';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PlasmicRootProvider Head={Head} Link={Link}>
      {/* Google Analytics - Only load in MAIN environment */}
      {process.env.NEXT_PUBLIC_ENV_NAME === 'MAIN' && (
        <>
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-P7JFBHBD1F"
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-P7JFBHBD1F');
            `}
          </Script>
        </>
      )}
      <Component {...pageProps} />
    </PlasmicRootProvider>
  );
}
