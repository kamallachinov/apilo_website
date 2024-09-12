import BlogSearch from '@/components/blogs/BlogSearch'
import Footer from '@/components/footer/Footer'
import PrimaryNavbar from '@/components/navbar/PrimaryNavbar'
import PageHero from '@/components/shared/PageHero'
import getMarkDownData from '@/utils/getMarkDownData'
import Head from 'next/head'

export const metadata = {
  title: 'Blog List - Articles & Insights | Optima Business Solutions',
  description:
    'Explore a comprehensive list of articles and insights prepared by Optima Business Solutions on retail, automation, logistics, and more.',
  keywords:
    'Business Solutions Articles, Optima Blogs, Retail Insights, Automation Trends, Logistics Tips, Accounting Articles',
  openGraph: {
    title: 'Blog List - Articles & Insights | Optima Business Solutions',
    description:
      'Browse a list of insightful articles and blogs prepared by Optima Business Solutions, covering retail, automation, logistics, and more.',
    type: 'website',
    url: 'https://example.com/blog-list',
    site_name: 'Optima Business Solutions',
    image: '/images/og-image-blog-list.jpg',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog List - Articles & Insights | Optima Business Solutions',
    description: 'Find valuable articles and insights on retail, automation, and more from Optima Business Solutions.',
    image: '/images/twitter-image-blog-list.jpg',
    site: '@yourTwitterHandle',
  },
  canonical: 'https://example.com/blog-list',
}

const BlogListPage = () => {
  const blogs = getMarkDownData('data/blogs')

  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:image" content={metadata.openGraph.image} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:locale" content={metadata.openGraph.locale} />
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:image" content={metadata.twitter.image} />
        <link rel="canonical" href={metadata.canonical} />
      </Head>
      <PrimaryNavbar />
      <main>
        <PageHero subtitle="BLOG" title="Bizim tərəfimizdən hazırlanan məqalələr" />
        <section className="relative mb-150">
          <div className="absolute -top-[250px] left-1/2 -z-10 h-[550px] w-full -translate-x-1/2  bg-[url('/images/hero-gradient.png')] bg-cover bg-center bg-no-repeat opacity-70 md:hidden"></div>
          <div className="container relative">
            <div className="absolute left-1/2 top-20 -z-10 flex -translate-x-1/2 -translate-y-1/2 max-md:hidden max-md:flex-col">
              <div className="rounded-full bg-primary-200/20  blur-[145px] max-1xl:h-[335px]  max-1xl:w-[335px] 1xl:h-[442px] 1xl:w-[442px]"></div>
              <div className="-ml-[170px] rounded-full  bg-primary-200/25 blur-[145px]  max-1xl:h-[335px] max-1xl:w-[335px] max-md:ml-0 1xl:h-[442px] 1xl:w-[442px]"></div>
              <div className="-ml-[170px] rounded-full  bg-primary-200/20 blur-[145px]  max-1xl:h-[335px] max-1xl:w-[335px] max-md:ml-0 1xl:h-[442px] 1xl:w-[442px]"></div>
            </div>
            <BlogSearch blogs={blogs} sidebarBlogs={blogs} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default BlogListPage
