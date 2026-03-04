import { useMemo } from 'react'

export default function Stars() {
    const stars = useMemo(() => {
        return Array.from({ length: 80 }, (_, i) => ({
            id: i,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            duration: `${2 + Math.random() * 5}s`,
            opacity: 0.3 + Math.random() * 0.7,
            delay: `${Math.random() * 5}s`,
            size: Math.random() > 0.8 ? '3px' : '2px',
        }))
    }, [])

    return (
        <div className="stars">
            {stars.map((star) => (
                <div
                    key={star.id}
                    className="star"
                    style={{
                        left: star.left,
                        top: star.top,
                        width: star.size,
                        height: star.size,
                        '--duration': star.duration,
                        '--opacity': star.opacity,
                        animationDelay: star.delay,
                    }}
                />
            ))}
        </div>
    )
}
