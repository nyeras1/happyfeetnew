"use client"

import { useEffect, useRef, useState } from "react"

interface HeroScrollCanvasProps {
    scrollProgress: number
    onFirstFrameReady?: () => void
}

export function HeroScrollCanvas({ scrollProgress, onFirstFrameReady }: HeroScrollCanvasProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const [images, setImages] = useState<HTMLImageElement[]>([])
    const [isLoaded, setIsLoaded] = useState(false)
    const [fitMode, setFitMode] = useState<"cover" | "contain">("cover")
    const totalFrames = 170
    const didNotifyFirstFrame = useRef(false)

    useEffect(() => {
        const updateFit = () => {
            setFitMode(window.innerWidth < 640 ? "contain" : "cover")
        }

        updateFit()
        window.addEventListener("resize", updateFit)
        return () => window.removeEventListener("resize", updateFit)
    }, [])

    // Preload images (progressive): load first frame ASAP, then lazily load the rest
    useEffect(() => {
        let cancelled = false
        const imageUrls = Array.from({ length: totalFrames }, (_, i) => {
            const frameNum = (i + 1).toString().padStart(3, "0")
            return `/travel images/ezgif-frame-${frameNum}.jpg`
        })

        const imageArray: Array<HTMLImageElement | undefined> = new Array(totalFrames)
        let loadedCount = 0

        const commitImages = () => {
            if (cancelled) return
            setImages(imageArray.filter(Boolean) as HTMLImageElement[])
        }

        const loadFrame = (index: number) => {
            if (cancelled) return
            const img = new Image()
            img.decoding = "async"
            img.src = imageUrls[index]
            img.onload = () => {
                if (cancelled) return
                imageArray[index] = img
                loadedCount++

                if (index === 0) {
                    setIsLoaded(true)
                    commitImages()

                    if (!didNotifyFirstFrame.current) {
                        didNotifyFirstFrame.current = true
                        onFirstFrameReady?.()
                    }
                } else if (loadedCount % 12 === 0) {
                    commitImages()
                }
            }
            img.onerror = () => {
                if (cancelled) return
                loadedCount++
                if (index === 0) {
                    setIsLoaded(true)

                    if (!didNotifyFirstFrame.current) {
                        didNotifyFirstFrame.current = true
                        onFirstFrameReady?.()
                    }
                }
            }
        }

        loadFrame(0)

        const loadRest = () => {
            for (let i = 1; i < totalFrames; i++) {
                loadFrame(i)
            }
        }

        if (typeof (window as any).requestIdleCallback === "function") {
            ;(window as any).requestIdleCallback(loadRest)
        } else {
            setTimeout(loadRest, 0)
        }

        return () => {
            cancelled = true
        }
    }, [])

    // Draw to canvas
    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas || !isLoaded || images.length === 0) return

        const ctx = canvas.getContext("2d")
        if (!ctx) return

        const render = () => {
            // Calculate frame index
            const frameIndex = Math.min(
                totalFrames - 1,
                Math.max(0, Math.floor(scrollProgress * totalFrames))
            )

            const img = images[frameIndex] || images[images.length - 1]
            if (!img) return

            // Handle high-DPI displays
            const dpr = window.devicePixelRatio || 1
            const rect = canvas.getBoundingClientRect()

            // Update canvas size to match physical pixels if needed
            if (canvas.width !== rect.width * dpr || canvas.height !== rect.height * dpr) {
                canvas.width = rect.width * dpr
                canvas.height = rect.height * dpr
            }

            const canvasWidth = canvas.width
            const canvasHeight = canvas.height

            // Calculate object-fit
            const imgRatio = img.width / img.height
            const canvasRatio = canvasWidth / canvasHeight

            let drawWidth, drawHeight, offsetX, offsetY

            if (fitMode === "cover") {
                if (imgRatio > canvasRatio) {
                    // Image is wider than canvas -> Constrain height
                    drawHeight = canvasHeight
                    drawWidth = canvasHeight * imgRatio
                    offsetX = (canvasWidth - drawWidth) / 2
                    offsetY = 0
                } else {
                    // Image is taller than canvas -> Constrain width
                    drawWidth = canvasWidth
                    drawHeight = canvasWidth / imgRatio
                    offsetX = 0
                    offsetY = (canvasHeight - drawHeight) / 2
                }
            } else {
                // contain
                if (imgRatio > canvasRatio) {
                    // Image is wider than canvas -> Constrain width
                    drawWidth = canvasWidth
                    drawHeight = canvasWidth / imgRatio
                    offsetX = 0
                    offsetY = (canvasHeight - drawHeight) / 2
                } else {
                    // Image is taller than canvas -> Constrain height
                    drawHeight = canvasHeight
                    drawWidth = canvasHeight * imgRatio
                    offsetX = (canvasWidth - drawWidth) / 2
                    offsetY = 0
                }
            }

            ctx.clearRect(0, 0, canvasWidth, canvasHeight)
            ctx.imageSmoothingEnabled = true
            ctx.imageSmoothingQuality = 'high'
            ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight)
        }

        render()

        // Add resize listener specific to this effect to ensure re-render on resize
        // We bind local render function so it uses latest scope variables
        const handleResize = () => {
            window.requestAnimationFrame(render)
        }

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)

    }, [scrollProgress, isLoaded, images, fitMode])


    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full object-cover bg-black"
            style={{ opacity: isLoaded ? 1 : 0, transition: 'opacity 0.5s ease-in-out' }}
        />
    )
}
