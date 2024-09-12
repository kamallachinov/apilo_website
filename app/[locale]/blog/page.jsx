import FeatureBlog from '@/components/blogs/FeatureBlog'
import RecentNews from '@/components/blogs/RecentNews'
import Footer from '@/components/footer/Footer'
import SecondaryNavbar from '@/components/navbar/SecondaryNavbar'
import NewsLetter from '@/components/shared/NewsLetter'
import PageHero from '@/components/shared/PageHero'
import getMarkDownData from '@/utils/getMarkDownData'
import Head from 'next/head'

export const metadata = {
  title: 'Blog - Latest Insights & Updates | Optima Business Solutions',
  description:
    'Stay updated with the latest insights, trends, and news in business solutions, retail, automation, logistics, and accounting from the Optima Business Solutions blog.',
  keywords:
    'Optima Blog, Business Solutions Blog, Retail Trends, Automation News, Logistics Updates, Accounting Insights',
  openGraph: {
    title: 'Blog - Latest Insights & Updates | Optima Business Solutions',
    description:
      'Explore recent blogs by Optima Business Solutions on business trends, automation, logistics, and more to stay ahead in the industry.',
    type: 'website',
    url: 'http://localhost:3000/en/blog',
    site_name: 'Optima Business Solutions',
    image: '/images/og-image-blog.jpg',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog - Latest Insights & Updates | Optima Business Solutions',
    description:
      'Discover the latest insights and updates from Optima Business Solutions, covering business solutions, retail, automation, and more.',
    image: '/images/twitter-image-blog.jpg',
    site: '@yourTwitterHandle',
  },
  canonical: 'http://localhost:3000/en/blog',
}

const Blog = () => {
  const blogs = getMarkDownData('data/blogs')
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />

        {/* Open Graph Meta Tags for SEO */}
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:site_name" content={metadata.openGraph.site_name} />
        <meta property="og:image" content={metadata.openGraph.image} />
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

      <SecondaryNavbar />
      <main>
        <PageHero subtitle="BLOG GRID" title="Recent blogs created <br/> by aplio" />
        <FeatureBlog featureBlog={blogs} />
        <RecentNews blogItemData={blogs} />
        <NewsLetter />
      </main>
      <Footer />
    </>
  )
}

export default Blog
