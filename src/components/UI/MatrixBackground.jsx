import React, { useEffect, useRef, useState } from 'react'
import { useTheme } from '../../context/ThemeContext'
import { useMatrix } from '../../context/MatrixContext'

const MatrixBackground = () => {
  const canvasRef = useRef(null)
  const { isDarkMode } = useTheme()
  const { isMatrixEnabled } = useMatrix()
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  // Matrix characters - mix of alphanumeric and symbols
  const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲンabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$+-*/=%"#&_(),.;:?!\\|{}<>[]^~'
  
  // Theme-based colors
  const colors = {
    light: {
      primary: '#800000', // Maroon accent
      secondary: '#FF6347', // Tomato hover
      glow: 'rgba(255, 99, 71, 0.3)' // Tomato glow
    },
    dark: {
      primary: '#800000', // Maroon accent
      secondary: '#E41F1F', // ThinkPad Red hover
      glow: 'rgba(228, 31, 31, 0.3)' // Red glow
    }
  }

  const currentColors = isDarkMode ? colors.dark : colors.light

  // Initialize canvas
  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    updateDimensions()
    window.addEventListener('resize', updateDimensions)

    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  // Matrix animation
  useEffect(() => {
    if (!isMatrixEnabled) return
    
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas dimensions
    canvas.width = dimensions.width
    canvas.height = dimensions.height

    // Calculate font size based on screen width
    const fontSize = Math.max(20, Math.min(20, dimensions.width / 80))
    const columns = Math.floor(dimensions.width / fontSize)
    
    // Create drops array
    const drops = Array(columns).fill(1)

    // Draw function
    const draw = () => {
      // Semi-transparent black background for trail effect
      ctx.fillStyle = isDarkMode ? 'rgba(10, 10, 10, 0.05)' : 'rgba(255, 255, 255, 0.05)'
      ctx.fillRect(0, 0, dimensions.width, dimensions.height)

      // Draw characters
      for (let i = 0; i < drops.length; i++) {
        // Random character
        const char = chars[Math.floor(Math.random() * chars.length)]
        
        // Calculate position
        const x = i * fontSize
        const y = drops[i] * fontSize
        
        // Color gradient based on position
        const opacity = Math.min(1, (drops[i] * fontSize) / dimensions.height)
        //const colorIntensity = 1 - opacity * 0.9
        
        // Base color
        let color
        if (opacity > 0.8) {
          color = currentColors.primary
        } else if (opacity > 0.5) {
          color = currentColors.secondary
        } else {
          // Fade to theme text color
          color = isDarkMode ? '#9CA3AF' : '#4B5563'
        }
        
        // Apply intensity
        //ctx.fillStyle = color
        ctx.fillStyle = '#E41F1F'
        //ctx.globalAlpha = colorIntensity
        ctx.globalAlpha = 1
        
        // Draw character with glow effect for brighter ones
        if (opacity > 0.7) {
          ctx.shadowBlur = 30
          ctx.shadowColor = currentColors.glow
        } else {
          ctx.shadowBlur = 0
        }
        
        ctx.font = `bold ${fontSize}px 'Source Code Pro', monospace`
        ctx.fillText(char, x, y)
        
        // Reset shadow
        ctx.shadowBlur = 0
        
        // Move drop down
        drops[i]++
        
        // Randomly reset drop
        if (drops[i] * fontSize > dimensions.height && Math.random() > 0.975) {
          drops[i] = 0
        }
      }
    }

    // Animation loop
    let animationId
    let lastTime = 0
    const frameInterval = 60

    const animate = (currentTime) => {
      if (!lastTime) lastTime = currentTime;
      const deltaTime = currentTime - lastTime
      if (deltaTime > frameInterval){
        draw()
        lastTime = currentTime
      }
   
      animationId = requestAnimationFrame(animate)
    }
    
    animate()

    // Cleanup
    return () => {
      cancelAnimationFrame(animationId)
    }
  }, [dimensions, isDarkMode, currentColors, isMatrixEnabled])

  if (!isMatrixEnabled) return null

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      style={{
        opacity: isDarkMode ? 0.4 : 0.25, // Subtle in light mode, slightly more visible in dark
        transition: 'opacity 0.3s ease'
      }}
    />
  )
}

export default MatrixBackground