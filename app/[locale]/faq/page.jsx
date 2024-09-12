import FaqFilter from '@/components/faq/FaqFilter'
import Footer from '@/components/footer/Footer'
import SecondaryNavbar from '@/components/navbar/SecondaryNavbar'
import PageHero from '@/components/shared/PageHero'
import Head from 'next/head'

export const metadata = {
  title: 'Frequently Asked Questions | Optima Business Solutions',
  description:
    'Find answers to the most commonly asked questions about Optima Business Solutions, including services, support, and more.',
  keywords: 'FAQ, Frequently Asked Questions, Support, Optima Business Solutions, Customer Support',
  openGraph: {
    title: 'Frequently Asked Questions | Optima Business Solutions',
    description:
      'Learn more about our services, customer support, and the most frequently asked questions about Optima Business Solutions.',
    type: 'website',
    url: 'http://localhost:3000/en/faq',
    site_name: 'Optima Business Solutions',
    image: '/images/og-image-faq.jpg',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Frequently Asked Questions | Optima Business Solutions',
    description: 'Check out our FAQ page to find answers to your most common questions about our services.',
    image: '/images/twitter-image-faq.jpg',
    site: '@yourTwitterHandle',
  },
  canonical: 'http://localhost:3000/en/faq',
}
const FaqPage = () => {
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
          subtitle="FAQ’S"
          title="Frequently asked <br> question"
          paragraph="Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. It's not Latin, though it looks like it"
        />
        <section className="pb-150 max-md:overflow-hidden">
          <div className="container relative z-10">
            {/* <div className="absolute left-1/2 top-0 -z-10 flex -translate-x-1/2 -translate-y-1/2 max-md:hidden max-md:flex-col">
              <div className="rounded-full bg-primary-200/20  blur-[145px] max-1xl:h-[335px]  max-1xl:w-[335px] 1xl:h-[442px] 1xl:w-[442px]"></div>
              <div className="-ml-[170px] rounded-full  bg-primary-200/25 blur-[145px]  max-1xl:h-[335px] max-1xl:w-[335px] max-md:ml-0 1xl:h-[442px] 1xl:w-[442px]"></div>
              <div className="-ml-[170px] rounded-full  bg-primary-200/20 blur-[145px]  max-1xl:h-[335px] max-1xl:w-[335px] max-md:ml-0 1xl:h-[442px] 1xl:w-[442px]"></div>
            </div> */}
            <div class="absolute left-1/2 top-1/2 -z-10 flex -translate-x-1/2 -translate-y-1/2 max-sm:hidden">
              <div class="rounded-full bg-[#86489C]/20 blur-[145px] lg:h-[330px] lg:w-[330px] xl:h-[442px] xl:w-[442px]"></div>
              <div class="rounded-full bg-[#86489C]/25 blur-[145px] lg:-ml-[170px] lg:h-[330px] lg:w-[330px] xl:h-[442px] xl:w-[442px]"></div>
              <div class="lg-ml-[170px] rounded-full bg-[#86489C]/20 blur-[145px] lg:h-[330px] lg:w-[330px] xl:h-[442px] xl:w-[442px]"></div>
            </div>
            <div className="absolute left-1/2  -z-10 h-full w-full -translate-x-1/2 bg-[url('/images/hero-gradient.png')]  bg-cover bg-center bg-no-repeat p-[350px] opacity-70 md:hidden"></div>
            <FaqFilter />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default FaqPage
