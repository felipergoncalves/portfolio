import Navbar from "@/scenes/navbar"
import {useState, useEffect} from 'react'
import Home from '@/scenes/home';
import Projects from "@/scenes/projects";
import About from "@/scenes/about";
import Contact from "@/scenes/contact";
import Footer from "@/scenes/footer"
import { SelectedPage } from "@/shared/types"

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home)
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true)

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY === 0){
        setIsTopOfPage(true)
        setSelectedPage(SelectedPage.Home)
      }
      if(window.scrollY !== 0 ) setIsTopOfPage(false)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, []);
  

  return (
    <div className="app bg-gray-20">
      <Navbar 
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        isTopOfPage={isTopOfPage}
      />
      <Home setSelectedPage={setSelectedPage}/>
      <About setSelectedPage={setSelectedPage}/>
      <Projects setSelectedPage={setSelectedPage}/>
      <Contact setSelectedPage={setSelectedPage} />
      <Footer />
    </div>
  )
}

export default App
