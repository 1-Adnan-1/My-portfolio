import './index.scss'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Logo from './logo'
import Loader from 'react-loaders'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [isMobile, setIsMobile] = useState(false)

  const nameArray = [
    'A',
    'd',
    'n',
    'a',
    'n',
    ' ',
    'S',
    'a',
    'm',
    'i',
    ' ',
    'A',
    'l',
    't',
    'ı',
    'n',
    't',
    'a',
    'ş',
  ]
  const jobArray = [
    'W',
    'e',
    'b',
    ' ',
    'D',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
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

  return (
    <>
      <div className="container home-page">
        <div className="home-content">
          <div className="text-zone">
            <h1>
              <span className={letterClass}>M</span>
              <span className={`${letterClass} _12`}>e</span>
              <span className={`${letterClass} _13`}>r</span>
              <span className={`${letterClass} _14`}>h</span>
              <span className={`${letterClass} _15`}>a</span>
              <span className={`${letterClass} _16`}>b</span>
              <span className={`${letterClass} _17`}>a</span>{' '}
              <span className={`${letterClass} _18`}>B</span>
              <span className={`${letterClass} _19`}>e</span>
              <span className={`${letterClass} _20`}>n</span>
              <br />
              <AnimatedLetters
                letterClass={letterClass}
                setArray={nameArray}
                idx={18}
              />
              <br />
              <AnimatedLetters
                letterClass={letterClass}
                setArray={jobArray}
                idx={37}
              />
            </h1>
            <h2>Frontend Developer / React Developer / Software Developer</h2>
            <Link to="/contact" className="flas-button">
              İLETİŞİME GEÇ
            </Link>
          </div>
          {!isMobile && <Logo />}
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Home
