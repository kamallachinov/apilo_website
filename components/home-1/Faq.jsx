import Questions from './Questions'

const Faq = () => {
  return (
    // <section className=" relative overflow-hidden bg-gray pb-[130px] pt-150 dark:bg-dark max-md:py-20">
    <section className="relative overflow-hidden bg-gradient-to-tr from-[#86489C]/30 to-[#86489C]/10 pb-[130px] pt-150 dark:bg-dark max-md:py-20">
      <div className="container relative z-10">
        <div className="grid grid-cols-2 gap-10 max-lg:grid-cols-1 1xl:gap-x-24 ">
          <div>
            <p className="section-tagline">Faq&rsquo;s</p>
            <h2 className="mb-8">
              Frequently Asked <br />
              Question
            </h2>
            <p>
              Neque accumsan dolor nullam commodo. Odio massa nisi ullamcorper suspendisse amet amet. Aenean suspendisse
              eget est pulvinar. Fames eget eget nascetur ornare
            </p>
          </div>
          <Questions />
        </div>
      </div>

      <div className="absolute left-1/2 top-1/2 -z-10 flex -translate-x-1/2 -translate-y-1/2 max-sm:hidden">
        <div className="rounded-full bg-[#86489C]/20 blur-[145px] lg:h-[330px] lg:w-[330px] xl:h-[442px] xl:w-[442px]"></div>
        <div className="rounded-full bg-[#86489C]/25 blur-[145px] lg:-ml-[170px] lg:h-[330px] lg:w-[330px] xl:h-[442px] xl:w-[442px]"></div>
        <div className="lg-ml-[170px] rounded-full bg-[#86489C]/20 blur-[145px] lg:h-[330px] lg:w-[330px] xl:h-[442px] xl:w-[442px]"></div>
      </div>
    </section>
  )
}

export default Faq
