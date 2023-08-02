import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"
import { SunIcon } from "@heroicons/react/24/outline";
import Link from "./Link";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";
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
  const navbarBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow";

  return (
    <nav>
        <div className={` ${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}>
            <div className={`${flexBetween} mx-auto w-5/6`}>
                <div className={`${flexBetween} w-full gap-16`}>
                    {/* Left side */}
                    <img width="25px" height="25px" src={Logo} alt="Logo" />
                    {/* Right side */}
                    {isAboveMediumScreens ? (
                        <div className={`${flexBetween} w-full`}>
                            <div className={`${flexBetween} gap-8 text-sm`}>
                                <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                                <Link page="Sobre mim" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                                <Link page="Projetos" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                                <Link page="Contate-me" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                            </div>
                            <div className={`${flexBetween} gap-8`}>
                                <SunIcon className="transition delay-150 hover:-translate-y-1 duration-300 ..." width={25} height={25}/>
                                <ActionButton setSelectedPage={setSelectedPage}>Teste</ActionButton>
                            </div>
                        </div>
                        ) : (
                            <button className="rounded-full bg-secondary-500 p-2" onClick={() => setIsMenuToggled(!isMenuToggled)}>
                                <Bars3Icon className="h-6 w-6 text-white"/>
                            </button>
                    )}
                </div>
            </div>
        </div>
        {/* Mobile Menu Modal */}
        {!isAboveMediumScreens && isMenuToggled && (
            <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
                {/* Close icon */}
                <div className="flex justify-end p-12">
                    <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                        <XMarkIcon className="h-6 w-6 text-gray-400"/>
                    </button>
                </div>

                {/* Menu items */}
                <div className="ml-[33%] flex flex-col gap-10 text-2xl">
                    <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                    <Link page="Sobre mim" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                    <Link page="Projetos" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                    <Link page="Contate-me" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                </div>
            </div>
        )}
    </nav>
  )
}

export default Navbar