import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"
import Link from "./Link";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import Logo  from "@/assets/Logo.png"
// importar imagens, logo

type Props = {
    isTopOfPage: boolean;
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
}

const Navbar = ({isTopOfPage, selectedPage, setSelectedPage}: Props) => {
  const flexBetween = "flex items-center justify-between";
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const navbarBackground = isTopOfPage ? "" : "transition duration-150 shadow-lg bg-gray-20";

  return (
    <nav>
        <div className={` ${navbarBackground} ${flexBetween} text-blue-100 text-base transition duration-150 fixed top-0 z-30 w-full py-6`}>
            <div className={`${flexBetween} max-w-6xl mx-auto w-5/6`}>
                <div className={`${flexBetween} w-full gap-16`}>
                    {/* Left side */}
                    <img width="25px" height="25px" src={Logo} alt="Logo" />
                    {/* Right side */}
                    {isAboveMediumScreens ? (
                        <div className={`flex justify-end w-full`}>
                            <div className={`flex gap-8`}>
                                <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                                <Link page="Sobre" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                                <Link page="Projetos" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                                <Link page="Contate-me" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                            </div>
                            {/* <div className={`${flexBetween} gap-8`}>
                                <SunIcon className="transition delay-150 hover:-translate-y-1 duration-300 ..." width={25} height={25}/>
                            </div> */}
                        </div>
                        ) : (
                            <button className="rounded-full bg-blue-100 p-2" onClick={() => setIsMenuToggled(!isMenuToggled)}>
                                <Bars3Icon className="h-6 w-6 text-white"/>
                            </button>
                    )}
                </div>
            </div>
        </div>
        {/* Mobile Menu Modal */}
        {!isAboveMediumScreens && isMenuToggled && (
            <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-gray-20 drop-shadow-xl">
                {/* Close icon */}
                <div className="flex justify-end p-6">
                    <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                        <XMarkIcon className="h-6 w-6 text-gray-400 hover:text-blue-100"/>
                    </button>
                </div>

                {/* Menu items */}
                <div className="ml-[23%] flex flex-col gap-10 text-blue-100 text-base">
                    <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                    <Link page="Sobre" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                    <Link page="Projetos" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                    <Link page="Contate-me" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                </div>
            </div>
        )}
    </nav>
  )
}

export default Navbar