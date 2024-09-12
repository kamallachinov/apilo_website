import ContactInfo from '@/components/contact/ContactInfo'
import Footer from '@/components/footer/Footer'
import SecondaryNavbar from '@/components/navbar/PrimaryNavbar'
import ContactForm from '@/components/shared/ContactForm'

import PageHero from '@/components/shared/PageHero'
import Head from 'next/head'

export const metadata = {
  title: 'Contact Us | Optima Business Solutions',
  description:
    'Get in touch with the Optima Business Solutions team for support or inquiries. We are here to help with retail, logistics, automation, and accounting solutions.',
  keywords: 'Contact, Optima Business Solutions, Support, Inquiries, Customer Service, Business Solutions',
  openGraph: {
    title: 'Contact Us | Optima Business Solutions',
    description:
      'Reach out to Optima Business Solutions for any support or business inquiries. We are here to assist you with retail, logistics, automation, and accounting solutions.',
    type: 'website',
    url: 'http://localhost:3000/en/contact', // Replace with actual URL
    site_name: 'Optima Business Solutions',
    image: '/images/og-image-contact.jpg',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us - Optima Business Solutions',
    description: 'Contact Optima Business Solutions for inquiries about business solutions, support, and more.',
    image: '/images/twitter-image-contact.jpg',
    site: '@yourTwitterHandle', // Replace with actual Twitter handle
  },
  canonical: 'http://localhost:3000/en/contact', // Replace with actual URL
}

const page = () => {
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
        <meta property="og:locale" content={metadata.openGraph.locale} />
        <meta property="og:site_name" content={metadata.openGraph.site_name} />

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
          subtitle="Bizimlə Əlaqə Saxlayın"
          title="Dəstək üçün komandamız ilə əlaqə saxlayın"
          paragraph="Sorğularınızı cavablandırmaq üçün komandamız əlindən gələni edir. Bəzən sorğunun cavablanması 24 saata qədər çəkəbilir."
        />
        <ContactInfo />
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}

export default page
