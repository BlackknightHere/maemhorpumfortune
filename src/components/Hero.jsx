import { useEffect, useRef } from 'react'
import heroImage from '../assets/แม่หมอปุ้ม.jpg'

export default function Hero() {
    const sectionRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('scroll-visible')
                    }
                })
            },
            { threshold: 0.1 }
        )

        const elements = sectionRef.current?.querySelectorAll('.scroll-hidden')
        elements?.forEach((el) => observer.observe(el))

        return () => observer.disconnect()
    }, [])

    const scrollToContact = () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <section id="hero" ref={sectionRef} className="relative w-full flex flex-col justify-center hero-gradient pt-28 pb-10 min-h-screen">
            <div className="max-w-6xl mx-auto px-4 py-8 grid md:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <div className="text-center md:text-left order-2 md:order-1">
                    <div className="scroll-hidden" style={{ transitionDelay: '0.1s' }}>
                        <span className="inline-block px-5 py-2 rounded-full text-base font-medium bg-primary-900/50 border border-primary-700/50 text-primary-300 mb-6">
                            ✨ ดูดวงแม่นยำ ด้วยไพ่พรหมญาณ
                        </span>
                    </div>

                    <h1 className="scroll-hidden text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight" style={{ transitionDelay: '0.2s' }}>
                        <span className="bg-gradient-to-r from-primary-300 via-primary-200 to-primary-300 bg-clip-text text-transparent">
                            แม่หมอปุ้ม
                        </span>
                        <br />
                        <span className="text-glow bg-gradient-to-r from-gold-400 via-gold-300 to-gold-400 bg-clip-text text-transparent text-4xl md:text-5xl lg:text-6xl">
                            ไพ่พรหมญาณ
                        </span>
                    </h1>

                    <p className="scroll-hidden text-primary-300/80 text-xl md:text-2xl mb-4 leading-relaxed max-w-lg" style={{ transitionDelay: '0.3s' }}>
                        เปิดไพ่ดูดวงชะตา ด้วย <strong className="text-gold-400">ไพ่พรหมญาณ</strong> ที่แม่นยำ
                        ให้คำปรึกษาเรื่องความรัก การงาน การเงิน สุขภาพ
                    </p>

                    <p className="scroll-hidden text-primary-300/80 text-xl md:text-2xl mb-10 leading-relaxed max-w-lg" style={{ transitionDelay: '0.4s' }}>
                        พร้อมบริการ <strong className="text-gold-400">เปลี่ยนเบอร์มือถือมงคล</strong> เสริมดวงชะตา เปลี่ยนชีวิตให้ดีขึ้น
                    </p>

                    <div className="scroll-hidden flex flex-col sm:flex-row gap-4 justify-center md:justify-start" style={{ transitionDelay: '0.5s' }}>
                        <button
                            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                            className="btn-gold px-10 py-4 rounded-full text-mystic-dark font-bold text-xl flex items-center justify-center gap-3"
                        >
                            <span>✦</span>
                            ดูบริการของเรา
                        </button>
                        <button
                            onClick={scrollToContact}
                            className="btn-gradient px-10 py-4 rounded-full text-white font-bold text-xl flex items-center justify-center gap-3"
                        >
                            <span>🔮</span>
                            นัดดูดวง
                        </button>
                    </div>
                </div>

                {/* Hero Image */}
                <div className="scroll-hidden flex justify-center order-1 md:order-2" style={{ transitionDelay: '0.3s' }}>
                    <div className="relative">
                        {/* Glow effect behind image */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/30 to-gold-500/20 rounded-full blur-3xl scale-110 animate-pulse-soft" />

                        {/* Image with border */}
                        <div className="hero-image-container relative z-10">
                            <img
                                src={heroImage}
                                alt="แม่หมอปุ้ม - หมอดูไพ่พรหมญาณ"
                                className="w-72 h-72 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] rounded-full object-cover shadow-2xl"
                                onError={(e) => {
                                    e.target.style.display = 'none'
                                    e.target.parentElement.innerHTML = `
                    <div class="w-72 h-72 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] rounded-full bg-gradient-to-br from-primary-800 to-mystic-card flex items-center justify-center border-2 border-primary-600">
                      <span class="text-8xl">🔮</span>
                    </div>
                  `
                                }}
                            />
                        </div>

                        {/* Floating decorations */}
                        <div className="absolute -top-4 -right-4 text-5xl animate-float">✨</div>
                        <div className="absolute -bottom-2 -left-6 text-4xl animate-float" style={{ animationDelay: '2s' }}>🌙</div>
                        <div className="absolute top-1/2 -right-8 text-3xl animate-float" style={{ animationDelay: '4s' }}>⭐</div>
                    </div>
                </div>
            </div>

            {/* Scroll indicator - relative to content instead of absolute */}
            <div className="flex flex-col items-center gap-2 animate-bounce mt-8 md:absolute md:bottom-8 md:left-1/2 md:-translate-x-1/2">
                <span className="text-primary-400 text-base">เลื่อนลง</span>
                <svg className="w-6 h-6 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </div>
        </section>
    )
}
