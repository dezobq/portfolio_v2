import Person from "../assets/andre.png";
import Typewriter from 'typewriter-effect'



const Hero = () => {
  const socials = [
    {
      name: 'Github',
      link: 'https://github.com/dezobq'
    },
    {
      name: 'Linkedin',
      link: 'https://www.linkedin.com/in/andre-b-queiroz/'
    },
    {
      name: 'Instagram',
      link: 'https://www.instagram.com/dezoqueiroz'
    },
    {
      name: 'Twitter',
      link: 'https://twitter.com/dezobq'
    }
   ]

  return (
    <div className="relative">
      <div className="inset-x-0 mt-8 flex items-center justify-center font-roboto-slab text-[50px] font-black uppercase tracking-tighter text-white md:absolute md:top-[15%] md:mt-[unset] md:text-[95px] lg:top-[10%] lg:text-[140px] xl:top-[15%] xl:text-[160px]">
        <span>Andre Queiroz</span>
      </div>
      <div className="relative  flex h-full flex-col-reverse justify-center md:mt-8 md:max-w-none md:flex-row md:gap-x-6 xl:-mt-8">
        <div className="flex flex-none">
          <img
            src={Person}
            alt="Person"
            className="-mt-12 w-[250px] object-contain sm:w-[345px] md:mt-auto md:w-[400px] lg:w-[450px] xl:w-[560px] xl:mt-[150px]"
          />
        </div>
        <div className="relative mx-10 self-end font-poppins sm:mx-14 md:mx-0 md:pr-8 lg:pr-0 lg:pb-16">
          <div className="relative mb-4 ml-auto w-max text-2xl font-extrabold uppercase text-accent md:text-[32px] lg:mb-6 lg:text-[50px]">
            <div className="absolute top-full right-0 h-[2px] w-3/4 bg-accent md:top-[120%] lg:top-[150%]" />
            <span><Typewriter
                      options={{
                        strings: [
                          'Web Developer',
                          'Web Design',
                          'UI/UX'
                        ],
                        autoStart: true,
                        loop: true,
                        delay: 75
                      }}
                    /></span>
          </div>
          <div className="mb-4 text-justify text-[13px] font-medium text-light lg:max-w-[479px] lg:text-[15px]">
            <span>
            With an unwavering passion for innovation and technology, I consistently seek to explore new solutions and enhance my knowledge. 
            </span>
          </div>
          <div className="text-right text-[13px] font-semibold text-accent md:mb-20 md:text-left lg:text-base">
            <div>
              <span>P: +1 226 975 9215</span>
            </div>
            <div>
              <span>E: contact@dezodev.com</span>
            </div>
          </div>
          <div className="absolute top-[170%] right-0 flex flex-col items-center justify-end gap-y-[13px] gap-x-[30px] text-[15px] font-medium uppercase text-secondary md:relative md:flex-row">
            {socials.map((list, i) => (
              <a
                key={i}
                href={list.link}
                target="_blank"
                className="transition-all hover:text-accent"
              >
                {list.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero