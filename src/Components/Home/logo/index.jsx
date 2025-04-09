import { useEffect, useRef } from 'react'
import LogoS from '../../../assets/images/logo-1.jpeg'
import './index.scss'

const Logo = () => {
  const bgRef = useRef(null)
  const solidLogoRef = useRef(null)

  useEffect(() => {
    // bg görünür yap
    if (bgRef.current) {
      bgRef.current.classList.add('visible')
    }

    // solid logo'yu zamanla görünür yap
    if (solidLogoRef.current) {
      solidLogoRef.current.classList.add('fade-in')
    }
  }, [])

  return (
    <div className="logo-container" ref={bgRef}>
      <img
        className="solid-logo"
        ref={solidLogoRef}
        src={LogoS}
        alt="Developer"
      />
    </div>
  )
}

export default Logo
