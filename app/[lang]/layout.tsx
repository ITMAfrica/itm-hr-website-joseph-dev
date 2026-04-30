import HomeHeader from '@/components/global/header';
import { GoogleAnalytics } from '@next/third-parties/google';
import Script from 'next/script';
import { type Locale } from '@/i18n-config';
import localFont from 'next/font/local';
import { Open_Sans } from 'next/font/google';
import Footer from '@/components/global/footer';
import { Analytics } from '@vercel/analytics/next';
import { generateMetadata as generateSEOMetadata } from '@/lib/metadata';
import { getDictionary } from '@/get-dictionary';
import StructuredData from '@/components/global/structured-data';
import { Metadata } from 'next';
import '@/styles/global.css';

const candara = localFont({
  src: [
    {
      path: '../../fonts/Candara.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../fonts/Candara.ttf',
      weight: '500',
      style: 'medium',
    },
    {
      path: '../../fonts/Candara_Italic.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../../fonts/Candara_Bold.ttf',
      weight: '700',
      style: 'bold',
    },
  ],
});

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
  display: 'swap',
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const lang = resolvedParams.lang;
  const dictionary = getDictionary(lang);
  const metaData = dictionary.globalContent.pages.hr.meta;

  return generateSEOMetadata({
    title: metaData.title || 'ITM Africa | Welcome to the ITM Africa web site',
    description:
      metaData.description ||
      'ITM HR is your strategic partner in HR solutions in Africa.',
    keywords: metaData.keywords || [],
    locale: lang,
    images: ['/assets/logo/logo.png'],
    type: 'website',
  });
}

export default async function Root({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: Locale }>;
}) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang;
  return (
    <html lang={lang} className="scroll-smooth" data-scroll-behavior="smooth">
      <head>
        <StructuredData locale={lang} />
      </head>
      <body
        suppressHydrationWarning={true}
        className={`${openSans.variable} ${candara.className}`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KDH8FQNP"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
            title="Google Tag Manager"
          />
        </noscript>
        {/* Google Tag Manager (script) */}
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KDH8FQNP');`}
        </Script>
        <HomeHeader params={resolvedParams} />
        <main className="w-full bg-gray_itm_bg/40 text-black_itm">
          {children}
        </main>
        <Footer params={resolvedParams} />
        <GoogleAnalytics gaId="AW-16880582497" />
        {/* Google tag (gtag.js) - AW-17979050212 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17979050212"
          strategy="afterInteractive"
        />
        <Script id="gtag-aw-17979050212" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17979050212');
          `}
        </Script>
        <Analytics />
      </body>
    </html>
  );
}
