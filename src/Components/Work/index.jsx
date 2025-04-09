import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import Wideo1 from '../../assets/images/p-w.mp4'
import Wideo2 from '../../assets/images/p-w2.mp4'

const Work = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [isMobile, setIsMobile] = useState(false)

  const letters = ['P', 'r', 'o', 'j', 'e', 'l', 'e', 'r']

  const projects = [
    {
      id: 1,
      title: 'E Commerce ',
      image: './src/assets/p-image/p-1.png',
      link: 'https://github.com/1-Adnan-1/Toolkit-Ecommerce',
    },
    {
      id: 2,
      title: 'Cyrpto Place',
      image: './src/assets/p-image/p-2.png',
      link: 'https://github.com/1-Adnan-1/Cyrpto-place',
    },
    {
      id: 3,
      title: 'Youtube Clone',
      image: './src/assets/p-image/p-3.png',
      link: 'https://github.com/adnanaltintas/youtube-clone',
    },
    {
      id: 4,
      title: 'X Clone',
      image: './src/assets/p-image/p-4.png',
      link: 'https://github.com/1-Adnan-1/Twitter-clone',
    },
    {
      id: 5,
      title: 'Car Rental',
      image: './src/assets/p-image/p-5.png',
      link: 'https://github.com/1-Adnan-1/Car-Rental',
    },
    {
      id: 6,
      title: 'Flight Radar',
      image: './src/assets/p-image/p-6.png',
      link: 'https://github.com/1-Adnan-1/Flight-Radar',
    },
    {
      id: 7,
      title: 'Netflix Clone',
      image: './src/assets/p-image/p-7.png',
      link: 'https://github.com/1-Adnan-1/ReactRedux-Netflix',
    },
    {
      id: 8,
      title: 'Hotels App',
      image: './src/assets/p-image/p-8.png',
      link: 'https://github.com/1-Adnan-1/Hotels-App',
    },
    {
      id: 9,
      title: 'Translate App',
      image: './src/assets/p-image/p-9.png',
      link: 'https://github.com/1-Adnan-1/Translate-App',
    },
    {
      id: 10,
      title: 'Nots App',
      image: './src/assets/p-image/p-10.png',
      link: 'https://github.com/1-Adnan-1/Notlar',
    },
  ]

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
    return () => clearTimeout(timeout)
  }, [])

  const handleMouseEnter = (e) => {
    e.currentTarget.setAttribute('controls', 'controls')
  }

  const handleMouseLeave = (e) => {
    e.currentTarget.removeAttribute('controls')
  }

  return (
    <div className="container work-page">
      <div className="text-zone">
        <h1 className="work-h1">
          <AnimatedLetters
            letterClass={letterClass}
            setArray={letters}
            idx={15}
          />
        </h1>
      </div>

      <div className="videos fade-in">
        {isMobile ? (
          <Splide
            options={{
              perPage: 1,
              rewind: true,
              gap: '1rem',
              pagination: false,
            }}
          >
            <SplideSlide>
              <div className="video-container">
                <video
                  width="100%"
                  height="250"
                  src={Wideo1}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  muted
                  loop
                />
                <a
                  href="https://github.com/1-Adnan-1/Herkes-urada-Ecommerce"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Repo
                </a>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="video-container">
                <video
                  width="100%"
                  height="250"
                  src={Wideo2}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  muted
                  loop
                />
                <a
                  href="https://github.com/1-Adnan-1/E-ticaret"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Repo
                </a>
              </div>
            </SplideSlide>
          </Splide>
        ) : (
          <>
            <div className="video-container">
              <video
                width="100%"
                height="250"
                src={Wideo1}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                muted
                loop
              />
              <a
                href="https://github.com/1-Adnan-1/Herkes-urada-Ecommerce"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Repo
              </a>
            </div>
            <div className="video-container">
              <video
                width="100%"
                height="250"
                src={Wideo2}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                muted
                loop
              />
              <a
                href="https://github.com/1-Adnan-1/E-ticaret"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Repo
              </a>
            </div>
          </>
        )}
      </div>

      <div className="projects-slider fade-in">
        <Splide
          options={{
            perPage: isMobile ? 1 : 4,
            rewind: true,
            gap: '2rem',
            pagination: false,
          }}
        >
          {projects.map((project) => (
            <SplideSlide key={project.id}>
              <div className="project-card">
                <img src={project.image} alt={project.title} />
                <h3>{project.title}</h3>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Repo
                </a>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  )
}

export default Work
