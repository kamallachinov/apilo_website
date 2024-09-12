import Head from 'next/head'
import BlogSearch from '@/components/blogs/BlogSearch'
import Footer from '@/components/footer/Footer'
import SecondaryNavbar from '@/components/navbar/SecondaryNavbar'
import PageHero from '@/components/shared/PageHero'
import getMarkDownData from '@/utils/getMarkDownData'

export async function generateMetadata({ params }) {
  return {
    title: params?.category,
  }
}

export async function generateStaticParams() {
  const careerData = getMarkDownData('data/blogs')
  return careerData.map((item) => ({
    category: item.data.categories,
  }))
}

const CategoryPage = ({ params }) => {
  const blogs = getMarkDownData('data/blogs')
  const decodedCategory = decodeURIComponent(params.category.replace(/%20/g, ' '))
  const categoryBlog = blogs.filter((blog) => blog.data.categories === decodedCategory)

  return (
    <>
      <Head>
        <title>{`Blog Category: ${decodedCategory} | Optima Business Solutions`}</title>
        <meta
          name="description"
          content={`Explore the latest blogs categorized under ${decodedCategory} at Optima Business Solutions. Stay updated with industry insights and trends.`}
        />
        <meta name="keywords" content={`${decodedCategory}, Optima Blog, Business Solutions, Industry Trends`} />
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={`Blog Category: ${decodedCategory} | Optima Business Solutions`} />
        <meta
          property="og:description"
          content={`Discover blogs in the ${decodedCategory} category. Stay updated with the latest trends and insights at Optima Business Solutions.`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`http://localhost:3000/en/blog/${params.category}`} />{' '}
        <meta property="og:image" content="/images/og-image-category.jpg" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Optima Business Solutions" />
        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`Blog Category: ${decodedCategory} | Optima Business Solutions`} />
        <meta
          name="twitter:description"
          content={`Explore blogs under the ${decodedCategory} category at Optima Business Solutions for industry insights and trends.`}
        />
        <meta name="twitter:image" content="/images/twitter-image-category.jpg" />
        <meta name="twitter:site" content="@yourTwitterHandle" />
        {/* Canonical URL */}
        <link rel="canonical" href={`http://localhost:3000/en/blog/${params.category}`} />
      </Head>

      <SecondaryNavbar />
      <main>
        <PageHero subtitle="BLOG Category" title={`Recent blogs categorized under ${decodedCategory}`} />
        <section className="relative mb-150">
          <div className="absolute -top-[250px] left-1/2 -z-10 h-[550px] w-full -translate-x-1/2  bg-[url('/images/hero-gradient.png')] bg-cover bg-center bg-no-repeat opacity-70 md:hidden"></div>
          <div className="container relative">
            <div className="absolute left-1/2 top-20 -z-10 flex -translate-x-1/2 -translate-y-1/2 max-md:hidden max-md:flex-col">
              <div className="rounded-full bg-fuchsia-700/20  blur-[145px] max-1xl:h-[335px]  max-1xl:w-[335px] 1xl:h-[442px] 1xl:w-[442px]"></div>
              <div className="-ml-[170px] rounded-full  bg-fuchsia-700/25 blur-[145px]  max-1xl:h-[335px] max-1xl:w-[335px] max-md:ml-0 1xl:h-[442px] 1xl:w-[442px]"></div>
              <div className="-ml-[170px] rounded-full  bg-fuchsia-700/20 blur-[145px]  max-1xl:h-[335px] max-1xl:w-[335px] max-md:ml-0 1xl:h-[442px] 1xl:w-[442px]"></div>
            </div>
            <BlogSearch blogs={categoryBlog} sidebarBlogs={blogs} setActive={decodedCategory} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default CategoryPage
