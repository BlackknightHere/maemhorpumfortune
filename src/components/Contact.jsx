import { useEffect, useRef } from 'react'

export default function Contact() {
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

    return (
        <section id="contact" ref={sectionRef} className="relative py-24 px-4">
            <div className="max-w-4xl mx-auto text-center">
                {/* Section Header */}
                <h2 className="scroll-hidden text-4xl md:text-5xl font-bold mb-5">
                    <span className="bg-gradient-to-r from-gold-400 to-primary-400 bg-clip-text text-transparent">
                        ติดต่อแม่หมอปุ้ม
                    </span>
                </h2>
                <p className="scroll-hidden text-primary-300/70 mb-14 mx-auto text-xl md:text-2xl" style={{ transitionDelay: '0.1s' }}>
                    พร้อมให้คำปรึกษาทุกเรื่อง สามารถติดต่อได้ผ่านช่องทางด้านล่าง
                </p>

                {/* Contact Cards */}
                <div className="grid sm:grid-cols-3 gap-6 mb-14">
                    {/* Phone */}
                    <a
                        href="tel:0628982699"
                        className="scroll-hidden glass-card rounded-2xl p-8 flex flex-col items-center gap-5 group transition-all duration-500"
                        style={{ transitionDelay: '0.2s' }}
                    >
                        <div className="w-[4.5rem] h-[4.5rem] rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-green-500/20">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                            </svg>
                        </div>
                        <div>
                            <p className="text-primary-400 text-base mb-1">โทรศัพท์</p>
                            <p className="text-white font-bold text-2xl">062-898-2699</p>
                        </div>
                    </a>

                    {/* Facebook */}
                    <a
                        href="https://www.facebook.com/nichanan.janruangrit"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="scroll-hidden glass-card rounded-2xl p-8 flex flex-col items-center gap-5 group transition-all duration-500"
                        style={{ transitionDelay: '0.3s' }}
                    >
                        <div className="w-[4.5rem] h-[4.5rem] rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/20">
                            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                            </svg>
                        </div>
                        <div>
                            <p className="text-primary-400 text-base mb-1">Facebook</p>
                            <p className="text-white font-bold text-xl">แม่หมอปุ้ม</p>
                        </div>
                    </a>

                    {/* LINE */}
                    <a
                        href="https://line.me/ti/p/~friendandpum"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="scroll-hidden glass-card rounded-2xl p-8 flex flex-col items-center gap-5 group transition-all duration-500"
                        style={{ transitionDelay: '0.4s' }}
                    >
                        <div className="w-[4.5rem] h-[4.5rem] rounded-full bg-gradient-to-br from-[#00B900] to-[#009900] flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-green-400/20">
                            <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 496 512">
                                <path d="M248 8C111.1 8 0 119.1 0 256c0 113.6 84.6 207.1 192 227v89.7c0 13 14.5 20.3 25 12.8L323.5 491C420 472.9 496 373.2 496 256 496 119.1 384.9 8 248 8zm98.6 307.7c-4.9 0-8.9-4-8.9-8.9v-73.6c0-4.9-4-8.9-8.9-8.9h-44.5c-4.9 0-8.9 4-8.9 8.9v73.6c0 4.9-4 8.9-8.9 8.9H222c-4.9 0-8.9-4-8.9-8.9v-73.6c0-4.9-4-8.9-8.9-8.9h-44.5c-4.9 0-8.9 4-8.9 8.9v73.6c0 4.9-4 8.9-8.9 8.9h-44.5c-4.9 0-8.9-4-8.9-8.9V215.3c0-4.9 4-8.9 8.9-8.9h44.5c4.9 0 8.9 4 8.9 8.9v47.2h36.4V215.3c0-4.9 4-8.9 8.9-8.9h44.5c4.9 0 8.9 4 8.9 8.9v47.2h36.4V215.3c0-4.9 4-8.9 8.9-8.9h44.5c4.9 0 8.9 4 8.9 8.9v82.4c0 4.9-4 8.9-8.9 8.9h-42.6z" />
                            </svg>
                        </div>
                        <div>
                            <p className="text-primary-400 text-base mb-1">LINE ID</p>
                            <p className="text-white font-bold text-xl">friendandpum</p>
                        </div>
                    </a>
                </div>

                {/* Big CTA */}
                <div className="scroll-hidden glass-card rounded-3xl p-10 md:p-14" style={{ transitionDelay: '0.5s' }}>
                    <div className="text-6xl mb-5">🔮</div>
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">พร้อมเปลี่ยนชีวิตให้ดีขึ้น?</h3>
                    <p className="text-primary-300/70 mb-10 max-w-md mx-auto text-xl md:text-2xl leading-relaxed">
                        ติดต่อแม่หมอปุ้มได้เลยวันนี้ พร้อมให้คำปรึกษาทุกเรื่องราว ด้วยไพ่พรหมญาณที่แม่นยำ
                    </p>
                    <div className="flex flex-col sm:flex-row gap-5 justify-center">
                        <a
                            href="tel:0628982699"
                            className="btn-gold px-10 py-5 rounded-full text-mystic-dark font-bold text-xl flex items-center justify-center gap-3 hover:scale-105 transition-transform"
                        >
                            📲 โทรเลย 062-898-2699
                        </a>
                        <a
                            href="https://www.facebook.com/nichanan.janruangrit"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-gradient px-10 py-5 rounded-full text-white font-bold text-xl flex items-center justify-center gap-3 hover:scale-105 transition-transform"
                        >
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                            </svg>
                            Facebook
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
