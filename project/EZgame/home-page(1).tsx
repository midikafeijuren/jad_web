"use client"

import { useEffect, useState } from "react"
import { ArrowDown, ArrowRight, Code, Feather, Zap } from "lucide-react"

const styles = `
  @keyframes draw {
    to {
      stroke-dashoffset: 0;
    }
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  
  .animate-draw {
    stroke-dasharray: 1000;
    stroke-dashoffset: 1000;
    animation: draw 2s ease-in-out forwards;
  }
  
  .animate-fadeIn {
    animation: fadeIn 1s ease-in-out forwards;
    opacity: 0;
  }
`

export default function Component() {
  const [activeSection, setActiveSection] = useState(0)
  const [logoHover, setLogoHover] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      const newActiveSection = Math.floor(scrollPosition / windowHeight)
      setActiveSection(newActiveSection)
    }

    window.addEventListener("scroll", handleScroll)
    setIsLoaded(true)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <style>{styles}</style>
      <div className="snap-y snap-mandatory h-screen overflow-y-scroll">
        <section className="h-screen snap-start bg-gradient-to-b from-blue-100 to-white flex flex-col items-center justify-center p-4">
          <div 
            className={`mb-8 transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            onMouseEnter={() => setLogoHover(true)}
            onMouseLeave={() => setLogoHover(false)}
          >
            <svg width="200" height="100" viewBox="0 0 200 100" className="text-blue-600">
              <defs>
                <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3B82F6" />
                  <stop offset="100%" stopColor="#60A5FA" />
                </linearGradient>
              </defs>
              <path 
                d="M10 50 Q50 10 100 50 T190 50" 
                fill="none" 
                stroke="url(#logoGradient)" 
                strokeWidth="20" 
                strokeLinecap="round"
                className={`${isLoaded ? 'animate-draw' : ''}`}
              />
              <text 
                x="100" 
                y="65" 
                fontFamily="Arial, sans-serif" 
                fontSize="60" 
                fontWeight="bold" 
                fill="white" 
                textAnchor="middle"
                className={`transition-transform duration-300 ${logoHover ? 'scale-110' : ''} ${isLoaded ? 'animate-fadeIn' : ''}`}
              >
                EZ
              </text>
              <circle 
                cx="170" 
                cy="50" 
                r="15" 
                fill="white" 
                className={`transition-transform duration-300 ${logoHover ? 'animate-bounce' : ''} ${isLoaded ? 'animate-fadeIn' : ''}`}
              />
            </svg>
          </div>
          <h1 className={`text-4xl md:text-6xl font-bold text-blue-600 mb-4 text-center transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>EZgame</h1>
          <p className={`text-xl text-gray-600 mb-8 text-center transition-all duration-1000 delay-300 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>开源免费的轻量级游戏引擎</p>
          <ArrowDown className={`animate-bounce text-blue-600 w-8 h-8 transition-all duration-1000 delay-500 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} />
        </section>

        <FeatureSection
          icon={<Feather className="w-16 h-16 md:w-24 md:h-24 text-blue-500" />}
          title="简单"
          description="直观的API和清晰的文档，让游戏开发变得轻而易举。"
          isActive={activeSection === 1}
        />

        <FeatureSection
          icon={<Zap className="w-16 h-16 md:w-24 md:h-24 text-blue-500" />}
          title="轻量"
          description="优化的核心引擎，确保快速加载和流畅的游戏体验。"
          isActive={activeSection === 2}
        />

        <FeatureSection
          icon={<Code className="w-16 h-16 md:w-24 md:h-24 text-blue-500" />}
          title="免费开源"
          description="对个人开发者完全免费，开源代码让您可以自由定制。"
          isActive={activeSection === 3}
        />

        <section className="h-screen snap-start bg-blue-600 flex flex-col items-center justify-center p-4">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 text-center">准备好开始了吗？</h2>
          <a
            href="#"
            className="inline-flex items-center rounded-full bg-white px-6 py-3 text-lg font-semibold text-blue-600 hover:bg-gray-100 transition-colors"
          >
            开始使用
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </section>
      </div>
    </>
  )
}

function FeatureSection({ icon, title, description, isActive }) {
  return (
    <section className="h-screen snap-start bg-white flex flex-col items-center justify-center p-4">
      <div className={`transform transition-all duration-500 ${isActive ? "scale-100 opacity-100" : "scale-95 opacity-50"}`}>
        <div className="mb-8 flex justify-center">{icon}</div>
        <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4 text-center">{title}</h2>
        <p className="text-xl text-gray-600 max-w-2xl text-center">{description}</p>
      </div>
    </section>
  )
}