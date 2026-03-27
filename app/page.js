import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Textoverlay from "./components/Textoverlay"

import Events from "./components/Events"
import Faculty from "./components/Faculty"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <>
  
   <Hero/>
   <Textoverlay/>

   <Events/>
   <Faculty/>
   <Footer/>
    </>
  )
}