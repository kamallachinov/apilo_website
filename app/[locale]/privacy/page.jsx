import Footer from '@/components/footer/Footer'
import PrimaryNavbar from '@/components/navbar/PrimaryNavbar'
import NewsLetter from '@/components/shared/NewsLetter'
import getMarkDownData from '@/utils/getMarkDownData'
import Head from 'next/head'
import ReactMarkdown from 'react-markdown'

export const metadata = {
  title: 'Privacy Page | Optima Business Solutions',
  description:
    'Read our Privacy Policy to understand how we collect, use, and protect your personal information. Learn more about your data security and privacy rights at Optima Business Solutions.',
  keywords: 'Privacy Policy, Data Protection, Optima Business Solutions, Privacy Rights, Personal Data',
  openGraph: {
    title: 'Privacy Page | Optima Business Solutions',
    description:
      'Discover our Privacy Policy at Optima Business Solutions. Learn about our practices regarding the collection, use, and protection of your personal information.',
    type: 'website',
    url: 'http://localhost:3000/en/privacy',
    site_name: 'Optima Business Solutions',
    image: '/images/og-image-privacy.jpg',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Page | Optima Business Solutions',
    description: 'Read our Privacy Policy to understand how we handle your personal data and protect your privacy.',
    image: '/images/twitter-image-privacy.jpg',
    site: '@yourTwitterHandle',
  },
  canonical: 'http://localhost:3000/en/privacy',
}

const Privacy = () => {
  const privacy = getMarkDownData('data/privacy/')
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
      <PrimaryNavbar />
      <main>
        <section className="relative overflow-hidden pb-150 pt-[250px] max-md:pt-150">
          <div className="absolute -top-[800px] left-0 right-0 h-full w-full bg-[url('/images/core-gradient.png')] bg-[length:600px_1000px] bg-center bg-no-repeat opacity-70 md:hidden"></div>
          <div className="container relative !max-w-[800px]">
            <div className="absolute left-1/2 top-20 -z-10 flex -translate-x-1/2 -translate-y-1/2 max-md:hidden">
              <div className="h-[442px] w-[442px] rounded-full bg-primary-200/20 blur-[145px]"></div>
              <div className="-ml-[170px] h-[442px] w-[442px] rounded-full bg-primary-200/25 blur-[145px]"></div>
              <div className="-ml-[170px] h-[442px] w-[442px] rounded-full bg-primary-200/20 blur-[145px]"></div>
            </div>

            <div className="singlePage">
              <h2 className="mb-3 max-w-[650px] font-semibold leading-[1.33]">Privacy Policy</h2>
            </div>

            <div className="singlePage">
              {privacy.map((item) => (
                <div key={item.slug}>
                  <ReactMarkdown className="mb-6">{item.content}</ReactMarkdown>
                </div>
              ))}
            </div>
          </div>
        </section>
        <NewsLetter />
      </main>
      <Footer />
    </>
  )
}

export default Privacy
