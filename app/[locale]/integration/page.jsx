import FadeUpAnimation from '@/components/animations/FadeUpAnimation'
import Footer from '@/components/footer/Footer'
import SecondaryNavbar from '@/components/navbar/SecondaryNavbar'
import NewsLetter from '@/components/shared/NewsLetter'
import PageHero from '@/components/shared/PageHero'
import { IntegrationData } from '@/data/data'
import Head from 'next/head'
import Image from 'next/image'

export const metadata = {
  title: 'Integration Page | Optima Business Solutions',
  description:
    'Discover how Optima Business Solutions enhances productivity with over 50 integrations. Learn about our integration services and solutions.',
  keywords: 'Integration, Productivity, Optima Business Solutions, Business Integrations, Technology Integration',
  openGraph: {
    title: 'Integration Page | Optima Business Solutions',
    description:
      'Explore our integration solutions designed to boost productivity. Learn more about our extensive range of integrations.',
    type: 'website',
    url: 'http://localhost:3000/en/integration',
    site_name: 'Optima Business Solutions',
    image: '/images/og-image-integration.jpg',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Integration Page | Optima Business Solutions',
    description: 'Explore how our integrations can enhance productivity. Discover our range of integration services.',
    image: '/images/twitter-image-integration.jpg',
    site: '@yourTwitterHandle',
  },
  canonical: 'http://localhost:3000/en/integration',
}

const Integration = () => {
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
          subtitle="INTEGRATION"
          title="Make productivity easier <br/>with 50+ integration"
          paragraph="Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. It's not Latin, though it looks like it"
        />
        <section className="relative pb-150">
          <div className="absolute -top-[300px] left-1/2 -z-10 h-[550px] w-full -translate-x-1/2  bg-[url('/images/hero-gradient.png')] bg-cover bg-center bg-no-repeat opacity-70 md:hidden"></div>
          <div className="container ">
            <div className="relative z-10 mx-auto max-w-[850px]">
              <div className="absolute left-1/2 top-150 -z-10 flex -translate-x-1/2 -translate-y-1/2 max-md:hidden max-md:flex-col">
                <div className="rounded-full bg-primary-200/20  blur-[145px] max-1xl:h-[335px]  max-1xl:w-[335px] 1xl:h-[442px] 1xl:w-[442px]"></div>
                <div className="-ml-[170px] rounded-full  bg-primary-200/25 blur-[145px]  max-1xl:h-[335px] max-1xl:w-[335px] max-md:ml-0 1xl:h-[442px] 1xl:w-[442px]"></div>
                <div className="-ml-[170px] rounded-full  bg-primary-200/20 blur-[145px]  max-1xl:h-[335px] max-1xl:w-[335px] max-md:ml-0 1xl:h-[442px] 1xl:w-[442px]"></div>
              </div>
              <FadeUpAnimation className=" grid grid-cols-2 gap-8 max-md:grid-cols-1">
                {IntegrationData.map((items) => (
                  <div className="rounded-medium bg-white p-2.5 shadow-box dark:bg-dark-200" key={items.id}>
                    <div className="rounded border border-dashed border-gray-100 p-10 text-center dark:border-borderColor-dark ">
                      <Image
                        src={items.image}
                        alt="value image"
                        className="mb-8 inline-block h-auto w-auto"
                        width={42}
                        height={42}
                      />
                      <h3 className="mb-2.5">{items.title}</h3>
                      <p>{items.details}</p>
                    </div>
                  </div>
                ))}
              </FadeUpAnimation>
            </div>
          </div>
        </section>
        <NewsLetter />
      </main>
      <Footer />
    </>
  )
}

export default Integration
