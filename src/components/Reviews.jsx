import { useEffect, useRef } from 'react'

const reviews = [
    {
        name: "คุณเมย์",
        text: "แม่หมอทักแม่นมากค่ะ เรื่องงานที่กังวลอยู่แม่หมอบอกจะได้ข่าวดีใน 7 วัน แล้วก็ได้จริงๆ ค่ะ ขอบคุณมากนะคะ",
        target: "งานและการเงิน",
        stars: "⭐⭐⭐⭐⭐"
    },
    {
        name: "คุณปอนด์",
        text: "เปลี่ยนเบอร์มงคลกับแม่หมอปุ้มแล้ว ชีวิตเปลี่ยนไปในทางที่ดีขึ้นมากครับ การเจรจาลูกค้าสำเร็จง่ายขึ้นเยอะเลย",
        target: "เบอร์มงคล",
        stars: "⭐⭐⭐⭐⭐"
    },
    {
        name: "คุณอ้อม",
        text: "ดูดวงความรักมาหลายที่ แต่ที่นี่ตรงที่สุดค่ะ แม่หมอพูดจาดี แนะนำทางออกให้ด้วย ไม่ใช่แค่ทายอย่างเดียว",
        target: "ความรัก",
        stars: "⭐⭐⭐⭐⭐"
    }
]

export default function Reviews() {
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
        <section id="reviews" ref={sectionRef} className="relative py-24 px-4 overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="scroll-hidden text-4xl md:text-5xl font-bold mb-5">
                        <span className="bg-gradient-to-r from-gold-300 to-primary-300 bg-clip-text text-transparent">
                            รีวิวจากลูกค้าตัวจริง
                        </span>
                    </h2>
                    <p className="scroll-hidden text-white font-medium mx-auto text-xl md:text-2xl">
                        ความประทับใจที่บอกต่อกันปากต่อปาก
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                        <div 
                            key={index} 
                            className="scroll-hidden glass-card rounded-2xl p-8 flex flex-col justify-between border-t-2 border-gold-500/30"
                            style={{ transitionDelay: `${index * 0.1}s` }}
                        >
                            <div>
                                <div className="text-gold-400 mb-2">{review.stars}</div>
                                <p className="text-white text-lg md:text-xl italic mb-6 leading-relaxed">
                                    "{review.text}"
                                </p>
                            </div>
                            <div className="flex items-center justify-between border-t border-white/10 pt-4">
                                <span className="text-primary-300 font-bold">{review.name}</span>
                                <span className="bg-primary-900/50 text-primary-200 text-sm px-3 py-1 rounded-full border border-primary-700/50">
                                    {review.target}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>


            </div>
        </section>
    )
}
