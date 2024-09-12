import Footer from '@/components/footer/Footer'
import Cta from '@/components/home-1/Cta'
import Faq from '@/components/home-1/Faq'
import Hero from '@/components/home-4/Hero'
import Integration from '@/components/home-1/Integration'
import Solution from '@/components/home-1/Solution'
import Vision from '@/components/home-1/Vision'
import PrimaryNavbar from '@/components/navbar/PrimaryNavbar'
import DataIntegration from '@/components/home-4/DataIntegration'
import Counter from '@/components/shared/Counter'
import Services from '@/components/shared/Services'
import ShareClientMarquee from '@/components/home-4/ShareClientMarquee'
import ProcessInstallation from '@/components/home-4/ProcessInstallation'
import EasyStepFeature from '@/components/home-5/EasyStepFeature'
import { NextIntlClientProvider, useLocale, useMessages } from 'next-intl'
import { notFound } from 'next/navigation'
import Head from 'next/head'

export const metadata = {
  title: 'Optima Group | Business Solutions',
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
export default function Home({ params }) {
  const locale = useLocale()
  const messages = useMessages()

  if (params.locale !== locale) {
    notFound()
  }
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
        <meta property="og:image" content={metadata.openGraph.image} />
        <meta property="og:site_name" content={metadata.openGraph.site_name} />
        <meta property="og:locale" content={metadata.openGraph.locale} />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:image" content={metadata.twitter.image} />
        <meta name="twitter:site" content={metadata.twitter.site} />

        {/* Canonical URL */}
        <link rel="canonical" href={metadata.canonical} />
      </Head>
      <NextIntlClientProvider locale={locale} messages={messages}>
        <PrimaryNavbar />
        <main>
          <Hero />
          <DataIntegration />
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <ProcessInstallation />

          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <Services />
          <Counter />
          <Vision />
          <Solution />
          <Integration />
          <EasyStepFeature />
          <ShareClientMarquee />
          {/* <WhyUs /> */}
          <Faq />
          <Cta />
        </main>
        <Footer />
      </NextIntlClientProvider>
    </>
  )
}
