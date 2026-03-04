import { useMemo } from 'react'

export default function Particles() {
    const particles = useMemo(() => {
        return Array.from({ length: 15 }, (_, i) => ({
            id: i,
            left: `${Math.random() * 100}%`,
            size: 2 + Math.random() * 4,
            duration: 10 + Math.random() * 20,
            delay: Math.random() * 15,
            color: Math.random() > 0.5 ? 'rgba(168, 85, 247, 0.3)' : 'rgba(234, 179, 8, 0.2)',
        }))
    }, [])

    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            {particles.map((p) => (
                <div
                    key={p.id}
                    className="particle"
                    style={{
                        left: p.left,
                        width: `${p.size}px`,
                        height: `${p.size}px`,
                        backgroundColor: p.color,
                        animationDuration: `${p.duration}s`,
                        animationDelay: `${p.delay}s`,
                    }}
                />
            ))}
        </div>
    )
}
