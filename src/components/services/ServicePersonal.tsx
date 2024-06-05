const ServicePersonal = () => (
  <div className='flex w-full items-center justify-center'>
    <div className='relative flex w-full bg-theme-blue p-6 pr-0 @3xl:h-[400px] @5xl:h-[450px]'>
      <section className='relative z-10 mt-64 w-11/12 text-lg font-extralight text-white @3xl:mt-0 @3xl:w-3/5 @3xl:text-xl'>
        <h2 className='mb-4 text-3xl font-bold @5xl:text-4xl'>
          Op maat en personal
        </h2>
        <p className='@3xl:mt-4'>
          Elke situatie is anders. Heeft u 1-fase of 3-fase aansluiting. Is uw
          oude groepenkast aan te vervangen? Wat is uw levensstijl ten opzichte
          van uw energie verbruik? Wilt U Uw auto's dagelijks laden, of is een
          tot twee keer per week voldoende. Heeft u een garage, een carport? Is
          uw laadpaal dichtbij uw meterkast of moet het gegraven worden om de
          installatie kabels naar uw garage te brengen.
        </p>
        <p className='mt-4'>
          Deze en andere vragen gaan wij samen bespreken en beantwoorden om een
          echte op-maat oplossing te creëren.
        </p>
      </section>
      <div className='absolute right-[1px] top-0 z-[8] h-full @3xl:h-[90%]'>
        <img
          className='hidden max-h-full @5xl:block'
          src='/img/img-service-1a.jpg'
        />
        <img
          className='max-h-full @xl:hidden @3xl:block @5xl:hidden'
          src='/img/img-service-1b.jpg'
        />
        <img
          className='hidden max-h-full @xl:block @3xl:hidden'
          src='/img/img-service-1c.jpg'
        />
      </div>
    </div>
  </div>
)

export { ServicePersonal }
