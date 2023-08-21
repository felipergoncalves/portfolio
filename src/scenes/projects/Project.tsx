import { motion } from "framer-motion"
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import useMediaQuery from '@/hooks/useMediaQuery'

const childVariant = {
    hidden: {opacity: 0, scale:0.9},
    visible: {opacity: 1, scale: 1},
}

type Props = {
    image: string,
    title: string,
    link: string,
}

function Project({image, title, link}: Props) {
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
    const cardMargin = isAboveMediumScreens ? "" : "mt-12";
  return (
    <motion.div
        variants={childVariant}
        className={`${cardMargin} mt-5 p-5 rounded-2xl h-auto text-center hover:cursor-pointer bg-slate-200`}>
            <div className="flex justify-center">
                <img className="w-full h-full rounded-lg" src={image} alt=""/>
            </div>
            <div className="mt-5 text-start flex flex-col gap-5 justify-between">
                <h4 className="font-bold">{title}</h4>
                <div className="text-sm w-fit text-blue-100 no-underline hover:underline">
                    <a className="flex gap-1" target="_blank" href={link}>
                        <span>Saiba mais</span>
                        <ArrowRightIcon className="h-5 w-5" />
                    </a>
                </div>
            </div>
    </motion.div>
  )
}

export default Project