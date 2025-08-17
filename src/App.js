// import Navbar from './components/navbar'
import Header from './components/header'
import Hero from './components/hero'
import About from './components/about'
import Logo from './components/logo'
import Service from './components/service'
import Portfolio from './components/portfolio'
import Testimonials from './components/testimonials'
import Team from './components/team'
import Contact from './components/contact'
import Footer from './components/footer'

function App() {
  return (
<>
{/* <Navbar /> */}
<Header />  
<Hero />
<About />
<Logo />
<Service />
<Portfolio />
<Testimonials />
<Team />
<Contact />
<Footer />
  {/* Scroll Top */}
  <a
    href="/"
    id="scroll-top"
    className="scroll-top d-flex align-items-center justify-content-center"
  >
    <i className="bi bi-arrow-up-short" />
  </a>
  {/* Preloader */}
  {/* <div id="preloader" /> */}
  {/* Vendor JS Files */}
  {/* Main JS File */}
</>
  );
}

export default App;
