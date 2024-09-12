import AboutCoreValue from '@/components/about/AboutCoreValue'
import AboutDetails from '@/components/about/AboutDetails'
import Footer from '@/components/footer/Footer'
import SecondaryNavbar from '@/components/navbar/PrimaryNavbar'
import CallToAction from '@/components/shared/CallToAction'
import PageHero from '@/components/shared/PageHero'
import PaymentFeatures from '@/components/shared/PaymentFeatures'
import { AboutFeaturesData } from '@/data/data'
import { useTranslations } from 'next-intl'
import Head from 'next/head'

export const metadata = {
  title: 'About Us | Optima Business Solutions',
  description:
    'Learn more about Optima Business Solutions, our core values, mission, and how we help businesses with retail, logistics, automation, and accounting solutions.',
  keywords: 'About Optima, Business Solutions, Retail Automation, Logistics, Accounting, Core Values, Mission',
  openGraph: {
    title: 'About Us | Optima Business Solutions',
    description:
      'Discover how Optima Business Solutions supports businesses with top-notch retail, logistics, automation, and accounting solutions.',
    type: 'website',
    url: 'http://localhost:3000/en/about', // Replace with actual URL
    site_name: 'Optima Business Solutions',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us - Optima Business Solutions',
    description: 'Learn about our mission and the values that drive Optima Business Solutions.',
    image: '/images/twitter-image-about.jpg',
    site: '@yourTwitterHandle',
  },
  canonical: 'http://localhost:3000/en/about',
}

const About = () => {
  const t = useTranslations('about')
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:site_name" content={metadata.openGraph.site_name} />
        <meta property="og:locale" content={metadata.openGraph.locale} />
        <meta property="og:image" content="/images/og-image-about.jpg" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:image" content={metadata.twitter.image} />
        <meta name="twitter:site" content={metadata.twitter.site} />

        {/* Canonical URL */}
        <link rel="canonical" href={metadata.canonical} />
      </Head>
      <SecondaryNavbar />
      <main>
        <PageHero
          subtitle={t('pageHero.subtitle')}
          title={t.rich('pageHero.title')}
          paragraph={t('pageHero.paragraph')}
        />
        <AboutDetails />
        <PaymentFeatures
          features={AboutFeaturesData}
          sectionTag={t('paymentFeatures.sectionTag')}
          sectionTitle={t('paymentFeatures.sectionTitle')}
          className={'relative bg-white py-150 dark:bg-dark-300 max-md:overflow-hidden max-md:py-25'}
        />
        <AboutCoreValue />
        <CallToAction title={t('callToAction.title')} />
      </main>
      <Footer />
    </>
  )
}

export default About
