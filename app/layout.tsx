import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Андрей Филатьев | Фотограф Сочи | HoReCa & Портфолио",
  description:
    "Андрей Филатьев — профессиональный фотограф в Сочи. Фуд-фотография, съемка ресторанов (HoReCa), брендинг и портреты.",
  metadataBase: new URL("https://photo.filatiev.pro"),
  alternates: {
    canonical: "/",
  },
  verification: {
    other: {
      "yandex-verification": "545fe617929b5210",
    },
  },
  openGraph: {
    title: "Андрей Филатьев | Фотограф Сочи",
    description:
      "Профессиональная фуд-фотография и съемка для бизнеса в Сочи.",
    url: "https://photo.filatiev.pro/",
    siteName: "Andrey Filatiev",
    locale: "ru_RU",
    type: "website",
    images: [
      {
        url: "/assets/portfolio/portfolio_1.jpg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Андрей Филатьев | Фотограф Сочи",
    description:
      "Профессиональная фуд-фотография и съемка для бизнеса в Сочи.",
    images: ["/assets/portfolio/portfolio_1.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <link rel="stylesheet" href="/style.css" />
        <link rel="icon" href="/assets/avatar.jpg" type="image/jpeg" />
        <link rel="apple-touch-icon" href="/assets/avatar.jpg" />
      </head>
      <body>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-LM8QJC5W9G"
          strategy="afterInteractive"
        />
        <Script id="ga4" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-LM8QJC5W9G');`}
        </Script>
        <Script id="ym" strategy="afterInteractive">
          {`(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};m[i].l=1*new Date();for(var j=0;j<document.scripts.length;j++){if(document.scripts[j].src===r){return;}}k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})(window,document,'script','https://mc.yandex.ru/metrika/tag.js?id=106802410','ym'); ym(106802410,'init',{ssr:true,webvisor:true,clickmap:true,ecommerce:'dataLayer',referrer:document.referrer,url:location.href,accurateTrackBounce:true,trackLinks:true});`}
        </Script>
        <noscript>
          <div>
            <img
              src="https://mc.yandex.ru/watch/106802410"
              style={{ position: "absolute", left: "-9999px" }}
              alt=""
            />
          </div>
        </noscript>
        {children}
        <Script src="/script.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
