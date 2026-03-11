import Navbar from '../Components/Layout/Navbar'
import Home from '../Components/Home/Home'
import About from '../Components/About/About'
import Service from '../Components/Services/Service'
import Portfolio from '../Components/Portfolio/Portfolio'
import ContactPage from '../Components/Contact/ContactPage'

const AppRouter = () => {
    return (
        <>
            <Navbar />
            <main id="home" className="section">
                <Home />
            </main>
            <section id="about" className="section">
                <About />
            </section>
            <section id="service" className="section">
                <Service />
            </section>
            <section id="portfolio" className="section">
                <Portfolio />
            </section>
            <section id="contact" className="section">
                <ContactPage />
            </section>
        </>
    )
}

export default AppRouter