import type { Metadata } from "next";
import Script from "next/script";

import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { Footer } from "../components/Footer.component";
import { prefix } from "../constants/prefix";
import "./globals.css";
import { Providers } from "./providers";
import { DefaultMetadata, DefaultOpenGraph } from "./shared-metadata";

export const metadata: Metadata = {
  ...DefaultMetadata,
  openGraph: DefaultOpenGraph,
};

const GTM_ID = process.env.GTM_ID;
const GA_ID = process.env.GA_ID;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='kr'>
      {/* 테스트후 제거 예정 */}
      {/* Google Tag Manager (Script) - <head> 내부 */}
      {/* <Script id='google-tag-manager' strategy='afterInteractive'>
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${GTM_ID}');`}
      </Script> */}

      <head>
        <meta charSet='utf-8' />
        <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />

        {/* <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover'
        /> */}

        <meta name='author' content='Dohyeong Lee 이도형' />
        <meta name='robots' content='index,follow' />
        <meta property='og:type' content='website' />
        <link rel='apple-touch-icon' sizes='57x57' href={`${prefix}/apple-icon-57x57.png`} />
        <link rel='apple-touch-icon' sizes='60x60' href={`${prefix}/apple-icon-60x60.png`} />
        <link rel='apple-touch-icon' sizes='72x72' href={`${prefix}/apple-icon-72x72.png`} />
        <link rel='apple-touch-icon' sizes='76x76' href={`${prefix}/apple-icon-76x76.png`} />
        <link rel='apple-touch-icon' sizes='114x114' href={`${prefix}/apple-icon-114x114.png`} />
        <link rel='apple-touch-icon' sizes='120x120' href={`${prefix}/apple-icon-120x120.png`} />
        <link rel='apple-touch-icon' sizes='144x144' href={`${prefix}/apple-icon-144x144.png`} />
        <link rel='apple-touch-icon' sizes='152x152' href={`${prefix}/apple-icon-152x152.png`} />
        <link rel='apple-touch-icon' sizes='180x180' href={`${prefix}/apple-icon-180x180.png`} />
        <link rel='icon' type='image/png' sizes='192x192' href={`${prefix}/android-icon-192x192.png`} />
        <link rel='icon' type='image/png' sizes='32x32' href={`${prefix}/favicon-32x32.png`} />
        <link rel='icon' type='image/png' sizes='96x96' href={`${prefix}/favicon-96x96.png`} />
        <link rel='icon' type='image/png' sizes='16x16' href={`${prefix}/favicon-16x16.png`} />
        <link rel='manifest' href={`${prefix}/site.webmanifest`} crossOrigin='use-credentials' />
        <meta name='msapplication-TileColor' content='#ffffff' />
        <meta name='msapplication-TileImage' content={`${prefix}/ms-icon-144x144.png`} />
        <meta name='theme-color' content='#ffffff' />
      </head>

      <body className='flex antialiased h-screen overflow-hidden bg-gray-100'>
        {/* GTM 컴포넌트를 조건부로 배포 환경에서만 적용 */}
        {GTM_ID && process.env.NODE_ENV === "production" && <GoogleTagManager gtmId={GTM_ID} />}
        {/* Google Tag Manager (noscript) - <body> 바로 뒤 */}
        {/* 테스트후 제거 예정 */}
        {/* <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height='0'
            width='0'
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript> */}

        <div className='lg:pl-2 lg:pt-2 bg-gray-100 flex-1 overflow-y-auto'>
          <div className='flex-1 bg-white min-h-screen lg:rounded-tl-xl border border-transparent lg:border-neutral-200 overflow-y-auto'>
            {/*  GA 컴포넌트를 조건부로 배포 환경에서만 적용 */}
            {GA_ID && process.env.NODE_ENV === "production" && <GoogleAnalytics gaId={GA_ID} />}
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
