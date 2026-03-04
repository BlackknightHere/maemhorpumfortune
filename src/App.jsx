import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Stars from './components/Stars'
import Particles from './components/Particles'

function App() {
    return (
        <div className="relative min-h-screen">
            <Stars />
            <Particles />
            <Navbar />
            <main>
                <Hero />
                <div className="section-divider max-w-4xl mx-auto" />
                <Services />
                <div className="section-divider max-w-4xl mx-auto" />
                <Contact />
            </main>
            <Footer />
        </div>
    )
}

export default App
