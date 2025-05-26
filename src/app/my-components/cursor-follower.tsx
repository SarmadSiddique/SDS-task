"use client"

import { useEffect, useState } from "react"

export default function CursorFollower() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY,
            })
        }

        window.addEventListener("mousemove", handleMouseMove)

        return () => {
            window.removeEventListener("mousemove", handleMouseMove)
        }
    }, [])

    return (
        <div
            className="fixed w-4 h-4 bg-cyan-400 pointer-events-none z-50 transition-transform duration-75 ease-out"
            style={{
                left: mousePosition.x - 8, // Center the box on cursor
                top: mousePosition.y - 8,
                transform: "translate(0, 0)",
            }}
        />
    )
}
