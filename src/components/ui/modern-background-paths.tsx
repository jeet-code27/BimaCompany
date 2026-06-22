"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { ArrowDown } from "lucide-react"

// Geometric Grid Paths
function GeometricPaths() {
  const gridSize = 40
  const paths: { id: string; d: string; delay: number }[] = []
  
  for (let x = 0; x < 20; x++) {
    for (let y = 0; y < 12; y++) {
      if (Math.random() > 0.7) {
        paths.push({
          id: `grid-${x}-${y}`,
          d: `M${x * gridSize},${y * gridSize} L${(x + 1) * gridSize},${y * gridSize} L${(x + 1) * gridSize},${(y + 1) * gridSize} L${x * gridSize},${(y + 1) * gridSize} Z`,
          delay: Math.random() * 5,
        })
      }
    }
  }

  return (
    <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 800 480">
      {paths.map((path) => (
        <motion.path
          key={path.id}
          d={path.d}
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: [0, 1, 0], 
            opacity: [0, 0.6, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{
            duration: 8,
            delay: path.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </svg>
  )
}

// Organic Flow Paths
function FlowPaths() {
  const flowPaths = Array.from({ length: 12 }, (_, i) => {
    const amplitude = 50 + i * 10
    const frequency = 0.01 + i * 0.002
    const offset = i * 60
    
    return {
      id: `flow-${i}`,
      d: `M-100,${200 + offset} Q200,${200 + offset - amplitude} 500,${200 + offset} T900,${200 + offset}`,
      strokeWidth: 1 + i * 0.3,
      opacity: 0.1 + i * 0.05,
      delay: i * 0.8
    }
  })

  return (
    <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 800 800">
      {flowPaths.map((path) => (
        <motion.path
          key={path.id}
          d={path.d}
          fill="none"
          stroke="currentColor"
          strokeWidth={path.strokeWidth}
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ 
            pathLength: [0, 1, 0.8, 0],
            opacity: [0, path.opacity, path.opacity * 0.7, 0]
          }}
          transition={{
            duration: 15,
            delay: path.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </svg>
  )
}

// Neural Network Paths
function NeuralPaths() {
  const nodes = Array.from({ length: 50 }, (_, i) => ({
    x: Math.random() * 800,
    y: Math.random() * 600,
    id: `node-${i}`
  }))

  const connections: { id: string; d: string; delay: number }[] = []
  nodes.forEach((node, i) => {
    const nearbyNodes = nodes.filter((other, j) => {
      if (i === j) return false
      const distance = Math.sqrt(Math.pow(node.x - other.x, 2) + Math.pow(node.y - other.y, 2))
      return distance < 120 && Math.random() > 0.6
    })
    
    nearbyNodes.forEach(target => {
      connections.push({
        id: `conn-${i}-${target.id}`,
        d: `M${node.x},${node.y} L${target.x},${target.y}`,
        delay: Math.random() * 10
      })
    })
  })

  return (
    <svg className="absolute inset-0 w-full h-full opacity-15" viewBox="0 0 800 600">
      {connections.map((conn) => (
        <motion.path
          key={conn.id}
          d={conn.d}
          stroke="currentColor"
          strokeWidth="0.5"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: [0, 1, 0],
            opacity: [0, 0.8, 0]
          }}
          transition={{
            duration: 6,
            delay: conn.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
      {nodes.map((node) => (
        <motion.circle
          key={node.id}
          cx={node.x}
          cy={node.y}
          r="2"
          fill="currentColor"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ 
            scale: [0, 1, 1.2, 1],
            opacity: [0, 0.6, 0.8, 0.6]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </svg>
  )
}

// Spiral Paths
function SpiralPaths() {
  const spirals = Array.from({ length: 8 }, (_, i) => {
    const centerX = 400 + (i % 4 - 1.5) * 200
    const centerY = 300 + Math.floor(i / 4 - 0.5) * 200
    const radius = 80 + i * 15
    const turns = 3 + i * 0.5
    
    let path = `M${centerX + radius},${centerY}`
    for (let angle = 0; angle <= turns * 360; angle += 5) {
      const radian = (angle * Math.PI) / 180
      const currentRadius = radius * (1 - angle / (turns * 360))
      const x = centerX + currentRadius * Math.cos(radian)
      const y = centerY + currentRadius * Math.sin(radian)
      path += ` L${x},${y}`
    }
    
    return {
      id: `spiral-${i}`,
      d: path,
      delay: i * 1.2
    }
  })

  return (
    <svg className="absolute inset-0 w-full h-full opacity-25" viewBox="0 0 800 600">
      {spirals.map((spiral) => (
        <motion.path
          key={spiral.id}
          d={spiral.d}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ 
            pathLength: [0, 1, 0],
            rotate: [0, 360]
          }}
          transition={{
            pathLength: { duration: 12, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            delay: spiral.delay
          }}
        />
      ))}
    </svg>
  )
}

function EnhancedBackgroundPathsBase({
  title = "About Bima Company",
}: {
  title?: string
}) {
  const [currentPattern, setCurrentPattern] = useState(0)
  const patterns = ['neural', 'flow', 'geometric', 'spiral']
  const words = title.split(" ")

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPattern((prev) => (prev + 1) % patterns.length)
    }, 12000)
    return () => clearInterval(interval)
  }, [])

  const renderPattern = () => {
    switch (currentPattern) {
      case 0: return <NeuralPaths />
      case 1: return <FlowPaths />
      case 2: return <GeometricPaths />
      case 3: return <SpiralPaths />
      default: return <NeuralPaths />
    }
  }

  const handleScrollToContent = () => {
    const contentElement = document.getElementById("about-content")
    if (contentElement) {
      contentElement.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#673CDD]/5 via-white to-[#673CDD]/10">
      {/* Dynamic Background Patterns */}
      <div className="absolute inset-0 text-[#673CDD]/70">
        <motion.div
          key={currentPattern}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2 }}
        >
          {renderPattern()}
        </motion.div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/60" />



      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="max-w-5xl mx-auto"
        >
          {/* Main Title */}
          <div className="mb-8">
            <h1 className="text-6xl sm:text-8xl md:text-9xl font-black mb-6 tracking-tighter leading-none font-heading">
              {words.map((word, wordIndex) => (
                <span key={wordIndex} className="inline-block mr-6 last:mr-0">
                  {word.split("").map((letter, letterIndex) => (
                    <motion.span
                      key={`${wordIndex}-${letterIndex}`}
                      initial={{ y: 100, opacity: 0, rotateX: -90 }}
                      animate={{ y: 0, opacity: 1, rotateX: 0 }}
                      transition={{
                        delay: wordIndex * 0.15 + letterIndex * 0.05,
                        type: "spring",
                        stiffness: 100,
                        damping: 20,
                        duration: 0.8
                      }}
                      className="inline-block text-transparent bg-clip-text 
                                          bg-gradient-to-br from-[#673CDD] via-purple-700 to-indigo-900
                                          hover:from-[#FBCE04] hover:to-[#D4AC00] hover:scale-110
                                          transition-all duration-700 cursor-default"
                      whileHover={{ scale: 1.05, y: -2 }}
                    >
                      {letter}
                    </motion.span>
                  ))}
                </span>
              ))}
            </h1>
            
            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="text-xl md:text-2xl text-slate-700 font-medium tracking-wide max-w-2xl mx-auto leading-relaxed"
            >
              Founded in 2023, your trusted source of information for all things insurance. We ensure you make informed decisions that best suit your needs.
            </motion.p>
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5, duration: 0.8, type: "spring", stiffness: 100 }}
            className="inline-block group mt-8"
          >
            <div className="relative p-[2px] bg-gradient-to-r from-[#673CDD] via-purple-500 to-indigo-500 rounded-2xl group-hover:from-purple-600 group-hover:via-[#673CDD] group-hover:to-indigo-600 transition-all duration-300">
              <Button
                variant="ghost"
                size="lg"
                onClick={handleScrollToContent}
                className="relative rounded-[14px] px-12 py-6 text-lg font-semibold
                            bg-white hover:bg-slate-50
                            text-[#673CDD] transition-all duration-300
                            group-hover:-translate-y-1 group-hover:shadow-xl
                            border-0 backdrop-blur-sm"
              >
                <motion.span 
                  className="flex items-center gap-3"
                  whileHover={{ y: 2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <span className="relative">
                    Read Our Story
                  </span>
                  <motion.span
                    animate={{ y: [0, 4, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <ArrowDown className="w-5 h-5" />
                  </motion.span>
                </motion.span>
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-32 h-32 bg-[#673CDD]/10 rounded-full blur-3xl"
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-3/4 right-1/3 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl"
        animate={{
          y: [0, 25, 0],
          x: [0, -25, 0],
          scale: [1, 0.8, 1],
          opacity: [0.4, 0.7, 0.4]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
    </div>
  )
}

export default function EnhancedBackgroundPaths(props: { title?: string }) {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#673CDD]/5 via-white to-[#673CDD]/10">
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/60" />
      </div>
    );
  }

  return <EnhancedBackgroundPathsBase {...props} />;
}
