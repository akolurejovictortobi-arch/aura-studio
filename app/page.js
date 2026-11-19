import Header from './components/Header'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'

const Home = () => {
  return (<><Header /><main><Hero /><Marquee /><About /><Services /><Contact /></main><Footer /><BackToTop /></>);
}

export default Home