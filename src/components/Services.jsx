import { useEffect, useRef } from 'react'
import prommayangLogo from '../assets/prommayang logo.png'

const services = [
    {
        icon: 'prommayang',
        title: 'ดูดวงไพ่พรหมญาณ',
        description: 'เปิดไพ่พรหมญาณ ดูดวงชะตาชีวิต ความรัก การงาน การเงิน สุขภาพ ให้คำปรึกษาแม่นยำ ตรงจุด ช่วยหาทางออกในทุกปัญหาชีวิต',
        features: ['ดวงความรัก & คู่ครอง', 'ดวงการงาน & อาชีพ', 'ดวงการเงิน & โชคลาภ', 'ดวงสุขภาพ & ทั่วไป'],
        gradient: 'from-primary-600 to-primary-800',
        iconBg: 'bg-primary-900/50',
    },
    {
        icon: 'phone',
        title: 'เปลี่ยนเบอร์มือถือมงคล',
        description: 'บริการเปลี่ยนเบอร์มือถือมงคล วิเคราะห์เบอร์ที่เหมาะกับดวงชะตา เสริมโชคลาภ เสริมดวง ให้ชีวิตเปลี่ยนแปลงไปในทางที่ดีขึ้น',
        features: ['วิเคราะห์เบอร์ตามวันเกิด', 'เบอร์เสริมโชคลาภ', 'เบอร์เสริมการงาน', 'เบอร์เสริมความรัก'],
        gradient: 'from-gold-600 to-gold-800',
        iconBg: 'bg-gold-900/50',
    },
]

const renderIcon = (icon) => {
    if (icon === 'prommayang') {
        return <img src={prommayangLogo} alt="ไพ่พรหมญาณ" className="w-24 h-24 object-contain" />
    }
    if (icon === 'phone') {
        return (
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-lg shadow-green-500/30">
                <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
            </div>
        )
    }
    return <span className="text-4xl">{icon}</span>
}

export default function Services() {
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
        <section id="services" ref={sectionRef} className="relative py-24 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="scroll-hidden text-4xl md:text-5xl font-bold mb-5">
                        <span className="bg-gradient-to-r from-primary-300 to-gold-400 bg-clip-text text-transparent">
                            บริการของเรา
                        </span>
                    </h2>
                    <p className="scroll-hidden text-primary-300/70 mx-auto text-xl md:text-2xl" style={{ transitionDelay: '0.1s' }}>
                        แม่หมอปุ้มพร้อมให้บริการด้วยความตั้งใจ ช่วยให้ท่านพบทางออกในชีวิต
                    </p>
                </div>

                {/* Service Cards */}
                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="scroll-hidden glass-card rounded-2xl p-10 transition-all duration-500 cursor-default"
                            style={{ transitionDelay: `${0.2 + index * 0.15}s` }}
                        >
                            {/* Icon */}
                            <div className={`${service.iconBg} w-28 h-28 rounded-2xl flex items-center justify-center mb-6 border border-primary-700/30 overflow-hidden`}>
                                {renderIcon(service.icon)}
                            </div>

                            {/* Title */}
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{service.title}</h3>

                            {/* Description */}
                            <p className="text-primary-300/70 text-lg md:text-xl leading-relaxed mb-8">
                                {service.description}
                            </p>

                            {/* Features */}
                            <ul className="space-y-3">
                                {service.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-3 text-lg md:text-xl text-primary-200/80">
                                        <span className="text-gold-400 text-base">✦</span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            {/* CTA */}
                            <button
                                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                                className={`mt-8 w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 bg-gradient-to-r ${service.gradient} hover:shadow-lg hover:shadow-primary-900/50 text-white`}
                            >
                                สนใจบริการ →
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
