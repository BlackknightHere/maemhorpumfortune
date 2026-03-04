import { useState, useEffect } from 'react'
import brahmaLogo from '../assets/prommayang logo.png'
import lineLogo from '../assets/line.svg'

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollTo = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
        setMenuOpen(false)
    }

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-3">
            {/* Boxed Container */}
            <div className={`max-w-6xl mx-auto rounded-full transition-all duration-500 ${scrolled
                ? 'bg-mystic-dark/90 backdrop-blur-xl border border-primary-700/40 shadow-lg shadow-primary-900/30'
                : 'bg-mystic-deeper/70 backdrop-blur-lg border border-primary-800/30'
                } px-6 md:px-8 py-3`}>
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <button onClick={() => scrollTo('hero')} className="flex items-center gap-2 group">
                        <img src={brahmaLogo} alt="โลโก้พรหมญาณ" className="w-10 h-10 rounded-full object-cover" />
                        <span className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-gold-400 bg-clip-text text-transparent group-hover:from-gold-400 group-hover:to-primary-400 transition-all duration-500">
                            แม่หมอปุ้ม
                        </span>
                    </button>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-4">
                        <NavLink onClick={() => scrollTo('hero')} label="หน้าแรก" />
                        <NavLink onClick={() => scrollTo('services')} label="บริการ" />
                        <NavLink onClick={() => scrollTo('contact')} label="ติดต่อ" />
                        
                        <a
                            href="https://line.me/ti/p/~friendandpum"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-line px-5 py-2.5 rounded-full text-white font-bold text-base flex items-center gap-2 hover:scale-105 transition-transform"
                        >
                            <img src={lineLogo} alt="LINE" className="w-5 h-5" />
                            <span>แอดไลน์</span>
                        </a>

                        <button
                            onClick={() => scrollTo('contact')}
                            className="btn-gold px-6 py-2.5 rounded-full text-mystic-dark font-bold text-base hover:scale-105 transition-transform"
                        >
                            นัดดูดวง
                        </button>
                    </div>

                    {/* Mobile Hamburger */}
                    <button
                        className="md:hidden flex flex-col gap-1.5 p-2"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span className={`block w-7 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                        <span className={`block w-7 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
                        <span className={`block w-7 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden transition-all duration-500 overflow-hidden max-w-6xl mx-auto ${menuOpen ? 'max-h-[500px] opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                <div className="bg-mystic-dark/95 backdrop-blur-xl border border-primary-700/40 rounded-2xl px-6 py-6 flex flex-col gap-4 text-center">
                    <MobileNavLink onClick={() => scrollTo('hero')} label="หน้าแรก" />
                    <MobileNavLink onClick={() => scrollTo('services')} label="บริการ" />
                    <MobileNavLink onClick={() => scrollTo('contact')} label="ติดต่อ" />
                    
                    <a
                        href="https://line.me/ti/p/~friendandpum"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-line w-full py-4 rounded-full text-white font-bold text-xl flex items-center justify-center gap-3"
                    >
                        <img src={lineLogo} alt="LINE" className="w-7 h-7" />
                        แอดไลน์สอบถาม
                    </a>

                    <button
                        onClick={() => scrollTo('contact')}
                        className="btn-gold w-full py-4 rounded-full text-mystic-dark font-bold text-xl"
                    >
                        นัดดูดวงทันที
                    </button>
                </div>
            </div>
        </nav>
    )
}

function NavLink({ onClick, label }) {
    return (
        <button
            onClick={onClick}
            className="text-primary-200 hover:text-gold-400 transition-colors duration-300 text-base font-semibold relative group"
        >
            {label}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-400 to-gold-400 group-hover:w-full transition-all duration-300" />
        </button>
    )
}

function MobileNavLink({ onClick, label }) {
    return (
        <button
            onClick={onClick}
            className="text-primary-200 hover:text-gold-400 transition-colors duration-300 font-semibold text-lg py-1"
        >
            {label}
        </button>
    )
}
