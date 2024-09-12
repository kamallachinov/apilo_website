import Footer from '@/components/footer/Footer'
import SecondaryNavbar from '@/components/navbar/SecondaryNavbar'
import ServiceContent from '@/components/service/ServiceContent'
import MembersCounter from '@/components/shared/MembersCounter'
import NewsLetter from '@/components/shared/NewsLetter'
import Pricing from '@/components/shared/Pricing'
import { ServiceData } from '@/data/data'
import Head from 'next/head'

export async function generateMetadata({ params }) {
  const service = ServiceData.find((item) => item?.slug === params?.slug) || {}
  return {
    title: service.title || 'Service Details',
    description: service.description || 'Detailed information about our services.',
    openGraph: {
      title: service.title || 'Service Details',
      description: service.description || 'Detailed information about our services.',
      type: 'website',
      url: `http://localhost:3000/en/services/${params?.slug}`,
      image: service.image || '/images/default-service-image.jpg',
    },
    twitter: {
      card: 'summary_large_image',
      title: service.title || 'Service Details',
      description: service.description || 'Detailed information about our services.',
      image: service.image || '/images/default-service-image.jpg',
    },
  }
}

export async function generateStaticParams() {
  return ServiceData.map((item) => ({
    slug: item.slug,
  }))
}

const ServiceDetails = (props) => {
  const slug = props.params.slug
  const data = ServiceData.find((post) => post.slug === slug)

  return (
    <>
      <Head>
        <title>{data?.title || 'Service Details'}</title>
        <meta name="description" content={data?.description || 'Detailed information about our services.'} />
        <meta property="og:title" content={data?.title || 'Service Details'} />
        <meta property="og:description" content={data?.description || 'Detailed information about our services.'} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`http://localhost:3000/en/services/${slug}`} /> {/* Replace with actual URL */}
        <meta property="og:image" content={data?.image || '/images/default-service-image.jpg'} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={data?.title || 'Service Details'} />
        <meta name="twitter:description" content={data?.description || 'Detailed information about our services.'} />
        <meta name="twitter:image" content={data?.image || '/images/default-service-image.jpg'} />
      </Head>
      <SecondaryNavbar />
      <main>
        <ServiceContent data={data} />
        <MembersCounter />
        <Pricing className={'pt-150 max-md:pt-20'} />
        <NewsLetter />
      </main>
      <Footer />
    </>
  )
}

export default ServiceDetails
