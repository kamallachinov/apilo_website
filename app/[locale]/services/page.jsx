import Footer from '@/components/footer/Footer'
import PrimaryNavbar from '@/components/navbar/PrimaryNavbar'
import MembersCounter from '@/components/shared/MembersCounter'
import PageHero from '@/components/shared/PageHero'
import Services from '@/components/shared/Services'
import Head from 'next/head'

export const metadata = {
  title: 'Services | Optima Business Solutions',
  description:
    'Explore the services offered by our company. Learn how we can help your business grow with our top-notch solutions.',
  openGraph: {
    title: 'Our Services | Optima Business Solutions',
    description:
      'Explore the services offered by our company. Learn how we can help your business grow with our top-notch solutions.',
    type: 'website',
    url: 'http://localhost:3000/services',
    image: '/images/services-hero.jpg',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Services | Optima Business Solutions',
    description:
      'Explore the services offered by our company. Learn how we can help your business grow with our top-notch solutions.',
    image: '/images/services-hero.jpg',
  },
}
export default function ServicePage() {
  return (
    <>
      <Head>
        <title>{metadata.metadata || 'Services | Optima Business Solutions'}</title>
        <meta
          name="description"
          content="Explore the services offered by our company. Learn how we can help your business grow with our top-notch solutions."
        />
        <meta property="og:title" content="Our Services" />
        <meta
          property="og:description"
          content="Explore the services offered by our company. Learn how we can help your business grow with our top-notch solutions."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://localhost:3000/services" />
        <meta property="og:image" content="/images/services-hero.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Our Services" />
        <meta
          name="twitter:description"
          content="Explore the services offered by our company. Learn how we can help your business grow with our top-notch solutions."
        />
        <meta name="twitter:image" content="/images/services-hero.jpg" />
      </Head>
      <PrimaryNavbar />
      <main>
        <PageHero
          subtitle="OUR SERVICES"
          title="The world’s best companies <br> trust aplio "
          paragraph="Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. It's not Latin, though it looks like it"
        />
        <Services sectionDetails={false} />
        <MembersCounter />
      </main>
      <Footer />
    </>
  )
}
