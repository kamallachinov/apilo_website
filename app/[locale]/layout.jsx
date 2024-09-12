import ThemeSwitcher from '@/components/theme/ThemeSwitcher'
import '@/scss/theme.scss'
import Providers from '@/utils/providers'
import PropTypes from 'prop-types'
import { cn } from '@/utils/cn'
import { Inter, Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
import { notFound } from 'next/navigation'
import Head from 'next/head'

const inter = Inter({
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})
const jakarta_sans = Plus_Jakarta_Sans({
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jakarta_sans',
})
const playfair = Playfair_Display({
  weight: ['600'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
})

export const metadata = {
  title: 'Optima | Optima Business Solutions Web Page',
  icon: '/favicon.ico',
  description:
    'Optima Group provides comprehensive business solutions including integration, productivity enhancement, and technology advancements. Discover our services and innovative solutions.',
  keywords:
    'Optima Group, Business Solutions, Integration, Productivity Enhancement, Technology Solutions, Innovative Business Services',
  openGraph: {
    title: 'Optima Group | Business Solutions',
    description:
      'Explore Optima Group’s range of business solutions, including integration and productivity services designed to help your business excel.',
    type: 'website',
    url: 'http://localhost:3000',
    site_name: 'Optima Group',
    image: '/images/og-image-home.jpg',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Optima Group | Business Solutions',
    description: 'Discover how Optima Group can enhance your business with our comprehensive solutions and services.',
    image: '/images/twitter-image-home.jpg',
    site: '@yourTwitterHandle',
  },
  canonical: 'http://localhost:3000',
}

export default async function RootLayout({ children, params: { locale } }) {
  // const locale = useLocale()
  // const messages = useMessages()
  // // Show a 404 error if the user requests an unknown locale
  // if (params.locale !== locale) {
  //   notFound()
  // }

  let messages
  try {
    messages = (await import(`../../messages/${locale}.json`)).default
  } catch (err) {
    notFound()
  }

  return (
    <>
      <Head>
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={metadata.icon} />
        <meta property="og:url" content={`http://localhost:3000/${locale}`} />
        <meta property="og:site_name" content="Optima Business Solutions" />
        <meta property="og:image:alt" content="Optima Business Solutions Logo" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:image" content={metadata.twitter.image} />
        <meta name="twitter:site" content={metadata.twitter.site} />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <meta name="robots" content="index, follow" />
        <meta property="og:locale" content={locale} />
        <meta name="keywords" content="Optima, Business Solutions, Retail, Automation, Logistics, Accounting" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

        <link rel="icon" href="/favicon.ico" sizes="any" type="image/svg+xml" />
        <link rel="canonical" href={`http://localhost:3000/${locale}`} />
      </Head>

      <html suppressHydrationWarning={true}>
        <body
          className={cn(
            'relative overflow-x-hidden bg-white text-base antialiased dark:bg-dark-300',
            inter.variable,
            jakarta_sans.variable,
            playfair.variable,
          )}
          suppressHydrationWarning={true}>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <Providers attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
              <ThemeSwitcher />
              {/* <Navbar /> */}
              {children}
              {/* <Footer /> */}
            </Providers>
          </NextIntlClientProvider>
        </body>
      </html>
    </>
  )
}

RootLayout.propTypes = {
  children: PropTypes.node,
}
