import useMediaQuery from '@/hooks/useMediaQuery'
import { SelectedPage } from '@/shared/types'
import { motion } from 'framer-motion'
import HText from "@/shared/HText";
import code from "@/assets/code.jpg"
import linkedin from "@/assets/linkedin.png"
import github from "@/assets/github.png"

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

function About({setSelectedPage}: Props) {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  const imgMobile = isAboveMediumScreens ? "" : "py-16 justify-center";
  const reverseContent = isAboveMediumScreens ? "" : "mt-20 flex flex-col-reverse";
  const formatText = isAboveMediumScreens ? "" : "px-none";

  return (
    <section id="sobre" className='gap-16 bg-slate-100 py-10 md:h-full md:pb-0'>
        {/* image and main header */}
        <motion.div 
            className={`${reverseContent} md:flex mx-auto w-5/6 items-center justify-between md:h-5/6`}
            onViewportEnter={() => setSelectedPage(SelectedPage.Sobre)}
            >
                {/* img */}
                <div className={`${imgMobile} md:mt-32 flex basis-3/5 justify-start`}>
                    <img src={code} className="rounded-md h-96" alt="Felipe Gonçalves" />
                </div>
                {/* main header */}
                <div className={`${formatText} z-10 md:mt-32 md:px-10 md:basis-3/5`}>
                    {/* headings */}
                    <motion.div
                        className={``}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: false, amount: 0.5}}
                        transition={{duration: 0.5 }}
                        variants={{
                            hidden: {opacity: 0, x:-50},
                            visible: {opacity: 1, x: 0},
                        }}
                    >
                        <div>
                            <HText>Sobre Mim</HText>
                        </div>
                        <p className='mt-4 text-base'>
                            Meu nome é Felipe Rodrigues Gonçalves, tenho 19 anos e atualmente curso Análise e Desenvolvimento de Sistemas no Instituto Federal de São Paulo, sou técnico formado em Desenvolvimento de Sistemas pela ETEC João Belarmino.
                        </p>
                        <div className='mt-4'>
                            <span className='font-bold text-blue-100 text-base'>Techs</span>
                            <p>Tenho conhecimento em tecnologias como: HTML, CSS, JavaScript, TypeScript, React, Python e PHP</p>
                        </div>
                    </motion.div>
                    {/* actions */}
                    <motion.div
                        className='mt-4 flex items-center gap-8'
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: false, amount: 0.5}}
                        transition={{delay:0.3, duration: 0.5 }}
                        variants={{
                            hidden: {opacity: 0, x:-50},
                            visible: {opacity: 1, x: 0},
                        }}
                    >
                        <div className=''>
                            <span className='font-bold text-blue-100 text-base'>Me acompanhe em</span>
                            <div className='flex mt-4 gap-2'>
                                <a target="_blank" href="https://github.com/felipergoncalves">
                                    <img src={github} alt="Github" />
                                </a>
                                <a target="_blank" href="https://www.linkedin.com/in/felipe-goncalves18/">
                                    <img src={linkedin} alt="Linkedin" />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
        </motion.div>
    </section>
  )
}

export default About