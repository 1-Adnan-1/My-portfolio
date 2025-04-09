import './index.scss'
import React from 'react'

const AnimatedLetters = ({ letterClass, setArray = [], idx }) => {
  return (
    <span>
      {setArray.map((letter, i) => (
        <span key={letter + i} className={`${letterClass} _${i + idx}`}>
          {letter}
        </span>
      ))}
    </span>
  )
}

export default AnimatedLetters
