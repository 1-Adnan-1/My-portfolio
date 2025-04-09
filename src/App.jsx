import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Layout from './Components/Layout'
import Home from './Components/Home'
import About from './Components/about'
import Contact from './Components/Contact'
import Work from './Components/Work'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="work" element={<Work />} />

          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
