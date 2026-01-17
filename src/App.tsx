import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

export default function App(){
  return (
    <div className="mt-10 p-5 md:px-[10%]">
      <Navbar/>
     <div className="">
      
      <Home/>
     </div>
     <About/>
     <div className="">
      <Experience/>
      <Projects/>
     </div  >
     <Contact/>
     <Footer/>
     
    </div>
  )
} 