import useMediaQuery from '@/hooks/useMediaQuery'
import { SelectedPage } from '@/shared/types'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { DocumentArrowDownIcon } from "@heroicons/react/24/outline";
import MainImage from "@/assets/FelipeGoncalves.jpeg"
import { motion } from 'framer-motion'
import curriculo from '@/assets/Curriculo_FelipeGoncalves.pdf'

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

function Home({setSelectedPage}: Props) {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  const imgMobile = isAboveMediumScreens ? "" : "z-10 py-16 justify-center";

  return (
    <section id="home" className='gap-16 bg-gray-20 py-10 md:h-full md:pb-0'>
        {/* image and main header */}
        <motion.div 
            className='md:flex mx-auto w-5/6 items-center justify-center md:h-5/6'
            onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
            >
                {/* main header */}
                <div className='z-10 mt-32 md:basis-3/5'>
                    {/* headings */}
                    <motion.div
                        className='md:-mt-20'
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: false, amount: 0.5}}
                        transition={{duration: 0.5 }}
                        variants={{
                            hidden: {opacity: 0, x:-50},
                            visible: {opacity: 1, x: 0},
                        }}
                    >
                        <div className='relative'>
                            <div className='before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext'>
                                <h1 className='text-blue-100 text-6xl'>Felipe Gonçalves</h1>
                            </div>
                        </div>
                        <p className='mt-8 text-base'>
                            Olá, meu nome é Felipe Rodrigues Gonçalves | Desenvolvedor Full-Stack
                        </p>
                    </motion.div>
                    {/* actions */}
                    <motion.div
                        className='mt-8 flex items-center gap-8'
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: false, amount: 0.5}}
                        transition={{delay:0.3, duration: 0.5 }}
                        variants={{
                            hidden: {opacity: 0, x:-50},
                            visible: {opacity: 1, x: 0},
                        }}
                    >
                        <a className="bg-blue-100 hover:bg-blue-200 text-white px-10 py-2 rounded-md" href={curriculo} download="Felipe_Goncalves_Curriculo">
                            <div className='flex gap-2'>
                                <span>Currículo</span>
                                <DocumentArrowDownIcon className='h-6 w-6 p-0'/>
                            </div>
                        </a>
                        <AnchorLink 
                            className='text-sm font-bold text-blue-100 no-underline hover:underline'
                            onClick={() => setSelectedPage(SelectedPage.Sobre)}
                            href={`#${SelectedPage.Sobre}`}
                        >
                            <p>Saiba mais</p>
                        </AnchorLink>
                    </motion.div>
                </div>

                {/* img */}
                <div className={`${imgMobile} flex basis-3/5 justify-end`}>
                    <img src={MainImage} className="rounded-md h-96" alt="Felipe Gonçalves" />
                </div>
        </motion.div>
        {/* Techs */}
        {/* <div className='h-[150px] w-full bg-blue-50 py-10'>
            <div className='mx-auto w-5/6'>
                <div className='flex w-3/5 items-center justify-between gap-8'>
                    <img src="" alt="" />
                </div>
            </div>
        </div> */}
    </section>
  )
}

export default Home