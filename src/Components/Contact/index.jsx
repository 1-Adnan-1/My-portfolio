import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { toast } from 'react-toastify'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const refForm = useRef()

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)

    return () => clearTimeout(timeout)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_h6jv08m',
        'template_96ohl1r',
        refForm.current,
        'S8mJHnG57EkJwQVS5'
      )
      .then(
        () => {
          toast.success('Mesajınız İletildi')
          refForm.current.reset()
        },
        () => {
          toast.error('Mejasınız İletilemedi, Tekrar deneyiniz')
        }
      )
  }
  return (
    <>
      <div className="container contact-page">
        <div className="left contact-form-section">
          <div className="text-zone">
            <h1>
              <AnimatedLetters
                letterClass={letterClass}
                setArray={[
                  'İ',
                  'l',
                  'e',
                  't',
                  'i',
                  'ş',
                  'i',
                  'm',
                  'e',
                  ' ',
                  'g',
                  'e',
                  'ç',
                ]}
                idx={15}
              />
            </h1>
            <p>
              İletişim için aşağıdaki formu doldurabilirsiniz. Mesajınız
              tarafıma ulaştığında en kısa sürede dönüş sağlayacağım. İlginiz
              için teşekkür ederim.
            </p>
            <div className="contact-form">
              <form ref={refForm} onSubmit={sendEmail}>
                <ul>
                  <li className="half">
                    <input
                      type="text"
                      name="name"
                      placeholder="İsim"
                      required
                    />
                  </li>
                  <li className="half">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      required
                    />
                  </li>
                  <li>
                    <input
                      placeholder="Konu"
                      type="text"
                      name="subject"
                      required
                    />
                  </li>
                  <li>
                    <textarea
                      placeholder="Mesaj"
                      name="message"
                      required
                    ></textarea>
                  </li>
                  <li>
                    <input
                      type="submit"
                      className="flat-button"
                      value="GÖNDER"
                    />
                  </li>
                </ul>
              </form>
            </div>
          </div>
        </div>

        <div className="contact-details-right">
          <div className="info-card">
            <i className="fas fa-phone-alt"></i>
            <h4>Bizi Arayın</h4>
            <p>0530 488 8175</p>
          </div>
          <div className="info-card">
            <i className="fas fa-map-marker-alt"></i>
            <h4>Konum</h4>
            <p>Kahramanmaraş</p>
          </div>
          <div className="info-card">
            <i className="fas fa-envelope"></i>
            <h4>E-Posta</h4>
            <p>altintasadnan9@gmail.com</p>
          </div>
          <div className="info-card">
            <i className="fas fa-globe"></i>
            <h4>Web Sitesi</h4>
            <p>
              <a href="#" class="disabled-link" target="_blank">
                Web
              </a>
            </p>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
