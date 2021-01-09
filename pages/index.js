import AboutUs from '../components/about_us/AboutUs'
import Banner from '../components/banner/Banner'
import Carousel from '../components/carousel/Carousel'
import ContactForm from '../components/contact/ContactForm'
import Footer from '../components/footer/Footer'
import NavBar from '../components/header/NavBar'
import SEO from '../components/seo'
import Services from '../components/services/Services'
import OurTeam from '../components/team/OurTeam'
export default function Home() {
  return (
    <>
      <SEO />
      <NavBar />
      <Banner />
      <AboutUs />
      <Services />
      <Carousel />
      <OurTeam />
      <ContactForm />
      <Footer />
    </>
  )
}
