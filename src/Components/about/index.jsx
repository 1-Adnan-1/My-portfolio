import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCss3,
  faFigma,
  faGitAlt,
  faHtml5,
  faJs,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const letters = ['H', 'a', 'k', 'k', 'ı', 'm', 'd', 'a']

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)

    return () => clearTimeout(timeout)
  }, [])
  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              setArray={letters}
              idx={15}
            />
          </h1>

          <h6>
            Türkiye'den tutkulu bir Front-End ve React Developer olarak, modern
            web teknolojileriyle performans odaklı uygulamalar geliştiriyorum.
            JavaScript'e olan ilgim ve güçlü iletişim becerilerimle ekip
            çalışmalarında etkin rol alıyorum.
          </h6>

          <h3>Teknik Yetenekler</h3>
          <h6>
            HTML, CSS, SCSS, JavaScript (ES6+), TypeScript, React, Next.js,
            Redux, Redux Toolkit ve Firebase ile modern ve responsive web
            uygulamaları geliştirme.
          </h6>

          <h3 className="mobile">Kişisel Yetenekler</h3>
          <h6 className="mobile">
            Takım çalışmasında iş birliği ve iletişim becerisi, problem çözme
            odaklı analitik düşünme, bireysel görevlerde sorumluluk bilinci ve
            detay odaklı çalışma.
          </h6>
          <h3 className="mobile">Eğitim</h3>
          <h6 className="mobile">
            Mustafa Kemal Üniversitesi Bilgisayar Teknolojisi 2024 - 2026
          </h6>
        </div>
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faHtml5} color="#f06529" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faCss3} color="#28a4d9" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faJs} color="#efd81d" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ed4f4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faGitAlt} color="#ec4d28" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faFigma} color="#DD0031" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
