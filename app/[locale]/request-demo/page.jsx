import FadeUpAnimation from '@/components/animations/FadeUpAnimation'
import Footer from '@/components/footer/Footer'
import PrimaryNavbar from '@/components/navbar/PrimaryNavbar'
import Head from 'next/head'

export const metadata = {
  title: 'Request a Demo | Optima Business Solutions',
  description:
    'Request a demo of our platform to see how it can enhance your productivity. Fill out the form to schedule a personalized demonstration with our team.',
  keywords: 'Request Demo, Platform Demo, Optima Business Solutions, Productivity Tools',
  openGraph: {
    title: 'Request a Demo | Optima Business Solutions',
    description:
      'Request a demo of our platform to explore its features and benefits. Schedule your personalized demo today!',
    type: 'website',
    url: 'http://localhost:3000/en/request-demo',
    site_name: 'Optima Business Solutions',
    image: '/images/og-image-demo.jpg',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Request a Demo | Optima Business Solutions',
    description: 'Fill out the form to request a demo and see how our platform can improve your productivity.',
    image: '/images/twitter-image-demo.jpg',
    site: '@yourTwitterHandle',
  },
  canonical: 'http://localhost:3000/en/request-demo',
}

const RequestDemo = () => {
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
        <section className="relative overflow-hidden py-[200px] max-md:pt-25">
          <div className="absolute left-1/2 top-0 -z-10 h-[550px] w-full -translate-x-1/2  bg-[url('/images/hero-gradient.png')] bg-cover bg-center bg-no-repeat opacity-70 md:hidden"></div>
          <FadeUpAnimation className="container relative">
            <div className="mx-auto mb-12 max-w-[475px] text-center">
              <p className="section-tagline">Demo</p>

              <h2>Platformaya Giriş Üçün Demo Dələb Et </h2>
            </div>
            <div className="relative z-10 mx-auto max-w-[850px]">
              <div className="absolute left-1/2 top-1/2 -z-10 flex -translate-x-1/2 -translate-y-1/2 max-md:hidden">
                <div className="h-[442px] w-[442px] rounded-full bg-primary-200/20 blur-[145px]"></div>
                <div className="-ml-[170px] h-[442px] w-[442px] rounded-full bg-primary-200/25 blur-[145px]"></div>
                <div className="-ml-[170px] h-[442px] w-[442px] rounded-full bg-primary-200/20 blur-[145px]"></div>
              </div>
              <div className=" rounded-medium bg-white p-2.5 shadow-nav  dark:bg-dark-200">
                <div className=" rounded border border-dashed border-gray-100 bg-white p-12 dark:border-borderColor-dark dark:bg-dark-200 max-md:p-5  ">
                  <form>
                    <div className="grid grid-cols-12 max-md:gap-y-10 md:gap-8 md:gap-x-12">
                      <div className="max-md:col-span-full md:col-span-6">
                        <label
                          htmlFor="username"
                          className="mb-2 block font-jakarta_sans text-sm font-medium text-paragraph dark:text-white">
                          Adınız
                        </label>
                        <input
                          type="text"
                          name="first-name"
                          id="username"
                          placeholder="Adınız"
                          className="block w-full rounded-[48px] border border-borderColor bg-white px-5 py-2.5 text-sm text-paragraph-light outline-none transition-all duration-300 placeholder:text-paragraph-light focus:border-primary dark:border-borderColor-dark dark:bg-dark-200 dark:placeholder:text-paragraph-light dark:focus:border-primary"
                        />
                      </div>
                      <div className="max-md:col-span-full md:col-span-6">
                        <label
                          htmlFor="companyname"
                          className="mb-2 block font-jakarta_sans text-sm font-medium text-paragraph dark:text-white">
                          Şirkət Adı
                        </label>
                        <input
                          type="text"
                          name="company-name"
                          id="companyname"
                          placeholder="Şirkət Adı"
                          className="block w-full rounded-[48px] border border-borderColor bg-white px-5 py-2.5 text-sm text-paragraph-light outline-none transition-all duration-300 placeholder:text-paragraph-light focus:border-primary dark:border-borderColor-dark dark:bg-dark-200 dark:placeholder:text-paragraph-light dark:focus:border-primary"
                        />
                      </div>
                      <div className="max-md:col-span-full md:col-span-6">
                        <label
                          htmlFor="contactno"
                          className="mb-2 block font-jakarta_sans text-sm font-medium text-paragraph dark:text-white">
                          Əlaqə Nömrəsi
                        </label>
                        <input
                          type="text"
                          name="contact-number"
                          id="contactno"
                          placeholder="Nömrə"
                          className="block w-full rounded-[48px] border border-borderColor bg-white px-5 py-2.5 text-sm text-paragraph-light outline-none transition-all duration-300 placeholder:text-paragraph-light focus:border-primary dark:border-borderColor-dark dark:bg-dark-200 dark:placeholder:text-paragraph-light dark:focus:border-primary"
                        />
                      </div>
                      <div className="max-md:col-span-full md:col-span-6">
                        <label
                          htmlFor="email"
                          className="mb-2 block font-jakarta_sans text-sm font-medium text-paragraph dark:text-white">
                          Email Ünvan
                        </label>
                        <input
                          type="email"
                          name="first-name"
                          id="email"
                          placeholder="Email"
                          className="block w-full rounded-[48px] border border-borderColor bg-white px-5 py-2.5 text-sm text-paragraph-light   outline-none transition-all duration-300 placeholder:text-paragraph-light focus:border-primary dark:border-borderColor-dark dark:bg-dark-200 dark:focus:border-primary"
                        />
                      </div>
                      <div className="col-span-full">
                        <label
                          htmlFor="message"
                          className="mb-2 block font-jakarta_sans text-sm font-medium text-paragraph dark:text-white">
                          Mətn
                        </label>
                        <textarea
                          name="first-name"
                          id="message"
                          rows="10"
                          className="block w-full resize-none rounded border border-borderColor bg-white px-5 py-2.5   text-sm text-paragraph-light outline-none transition-all duration-300 placeholder:text-paragraph-light focus:border-primary dark:border-borderColor-dark dark:bg-dark-200 dark:focus:border-primary"></textarea>
                      </div>
                      <div className="col-span-full mx-auto text-center">
                        <button className="btn">Tələb Et</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </FadeUpAnimation>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default RequestDemo
