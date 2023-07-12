import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import SocialLinks from "./components/SocialLinks";
// import logo from "./Hero.svg";


function App() {
  return (
    <>
      <NavBar />
      <Home />
      <About/>
      <Portfolio/>
      <Skills/>
      <Contact/>

      <SocialLinks />
    </>
  );
}

export default App;
