import BlogSearch from '@/components/blogs/BlogSearch'
import Footer from '@/components/footer/Footer'
import SecondaryNavbar from '@/components/navbar/PrimaryNavbar'
import PageHero from '@/components/shared/PageHero'
import getMarkDownData from '@/utils/getMarkDownData'
import Head from 'next/head'

export async function generateMetadata({ params }) {
  return {
    title: `Blogs tagged with ${params.tag}`,
    description: `Explore blogs tagged with "${params.tag}". Discover posts related to this tag and dive into our content.`,
    openGraph: {
      title: `Blogs tagged with ${params.tag}`,
      description: `Explore blogs tagged with "${params.tag}". Discover posts related to this tag and dive into our content.`,
      type: 'website',
      url: `http://localhost:3000/blogs/${params.tag}`,
      image: '/images/blogs-tag-hero.jpg',
    },
    twitter: {
      card: 'summary_large_image',
      title: `Blogs tagged with ${params.tag}`,
      description: `Explore blogs tagged with "${params.tag}". Discover posts related to this tag and dive into our content.`,
      image: '/images/blogs-tag-hero.jpg',
    },
  }
}

export async function generateStaticParams() {
  const blogs = getMarkDownData('data/blogs')
  return blogs.map((item) => ({
    tag: item.data.tags,
  }))
}

const BlogTags = ({ params }) => {
  const blogs = getMarkDownData('data/blogs')
  const decodedTags = decodeURIComponent(params.tag.replace(/%20/g, ' '))
  const tagsBlog = blogs.filter((blog) => blog.data.tags === decodedTags)
  return (
    <>
      <Head>
        <title>Blogs tagged with {decodedTags}</title>
        <meta
          name="description"
          content={`Explore blogs tagged with "${decodedTags}". Discover posts related to this tag and dive into our content.`}
        />
        <meta property="og:title" content={`Blogs tagged with ${decodedTags}`} />
        <meta
          property="og:description"
          content={`Explore blogs tagged with "${decodedTags}". Discover posts related to this tag and dive into our content.`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`http://localhost:3000/blogs/${decodedTags}`} />{' '}
        {/* Replace with actual URL */}
        <meta property="og:image" content="/images/blogs-tag-hero.jpg" /> {/* Replace with actual image path */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`Blogs tagged with ${decodedTags}`} />
        <meta
          name="twitter:description"
          content={`Explore blogs tagged with "${decodedTags}". Discover posts related to this tag and dive into our content.`}
        />
        <meta name="twitter:image" content="/images/blogs-tag-hero.jpg" /> {/* Replace with actual image path */}
      </Head>
      <SecondaryNavbar />
      <main>
        <PageHero subtitle="BLOG Category" title="Recent blogs created <br/> by aplio" />
        <section className="relative mb-150">
          <div className="absolute -top-[250px] left-1/2 -z-10 h-[550px] w-full -translate-x-1/2  bg-[url('/images/hero-gradient.png')] bg-cover bg-center bg-no-repeat opacity-70 md:hidden"></div>
          <div className="container relative">
            <div className="absolute left-1/2 top-20 -z-10 flex -translate-x-1/2 -translate-y-1/2 max-md:hidden max-md:flex-col">
              <div className="rounded-full bg-fuchsia-700/20  blur-[145px] max-1xl:h-[335px]  max-1xl:w-[335px] 1xl:h-[442px] 1xl:w-[442px]"></div>
              <div className="-ml-[170px] rounded-full  bg-fuchsia-700/25 blur-[145px]  max-1xl:h-[335px] max-1xl:w-[335px] max-md:ml-0 1xl:h-[442px] 1xl:w-[442px]"></div>
              <div className="-ml-[170px] rounded-full  bg-fuchsia-700/20 blur-[145px]  max-1xl:h-[335px] max-1xl:w-[335px] max-md:ml-0 1xl:h-[442px] 1xl:w-[442px]"></div>
            </div>
            <BlogSearch blogs={tagsBlog} sidebarBlogs={blogs} setActive={decodedTags} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default BlogTags
