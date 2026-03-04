import prommayangLogo from '../assets/prommayang logo.png'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="relative border-t border-primary-900/50 py-10 px-4">
            <div className="max-w-6xl mx-auto text-center">
                <div className="flex items-center justify-center gap-3 mb-4">
                    <span className="text-2xl"><img src={prommayangLogo} alt="ไพ่พรหมญาณ" className="w-16 h-16 object-contain" /> </span>
                    <span className="text-xl font-bold bg-gradient-to-r from-primary-400 to-gold-400 bg-clip-text text-transparent">
                        แม่หมอปุ้ม
                    </span>
                </div>
                <p className="text-primary-400/50 text-base">
                    ดูดวงไพ่พรหมญาณ & เปลี่ยนเบอร์มือถือมงคล
                </p>
                <p className="text-primary-400/30 text-sm mt-3">
                    © {currentYear} แม่หมอปุ้ม. All rights reserved.
                </p>
            </div>
        </footer>
    )
}
