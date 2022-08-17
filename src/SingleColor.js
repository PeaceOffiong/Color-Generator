import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({ rgb, weight, hexColor,  index }) => {
  const [alert, setAlert] = useState(false)
  const bcg = rgb.join(',')
  const hex = rgbToHex(...rgb)

  const handleCopy = () => {
    setAlert(true);
    navigator.clipboard.writeText(hex);
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false)
    }, 3000)
    return () => clearTimeout(timeout);
  }, [alert])

  return <article
    className={`color ${index > 10 && "color-light"}`}
    style={{ backgroundColor: `rgb(${bcg})` }} onClick={handleCopy}>
    <p className='percent-value'>{weight}%</p>
    <p className='color-value'>{hex}</p>
    {alert && <p className='alert'>copied to clipboard</p>}
  </article>
}

export default SingleColor
