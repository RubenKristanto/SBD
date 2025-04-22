import React, { useEffect, useState } from 'react'
import DMJLogo from './assets/DMJLogo.svg'
import Logo from './assets/Logo.svg'
import OSLogo from './assets/OSLogo.svg'
import SBDLogo from './assets/SBDLogo.svg'

const slides = [
  {
    name: 'NetLab',
    image: Logo,
    description: 'ruining students life since the bite of 1987 -Wiliam Afton.',
  },
  {
    name: 'DMJ',
    image: DMJLogo,
    description: 'DMJ Desain Manajemen Jaringan .',
  },
  {
    name: 'SBD',
    image: SBDLogo,
    description: 'SBD Sistem Basis Data.',
  },
  {
    name: 'OS',
    image: OSLogo,
    description: 'OS Operating Systems.',
  },
]

export default function App() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="w-screen h-screen bg-orange-500 flex items-center justify-center relative overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={slide.name}
          className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-1000 ${
            i === index ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img src={slide.image} alt={slide.name} className="w-40 h-40 mb-4" />
          <h2 className="text-white text-3xl font-bold">{slide.name}</h2>
          <p className="text-white text-center max-w-md mt-2 px-6">{slide.description}</p>
        </div>
      ))}
    </div>
  )
}
