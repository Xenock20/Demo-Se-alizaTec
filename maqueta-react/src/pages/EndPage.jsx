import React from 'react'
import { Link } from 'react-router-dom'
import './style/EndPage.css'
export const EndPage = () => {
  return (
    <> <div className='caja-completa'>
        <h1>FELICIDADES!!</h1>
        <p>Has completado la Demo de SeñalizaTec</p>
        <p>Muchas gracias por jugar</p>
        <Link to={"/"}>Regresar</Link>
        </div>
    </>
  )
}

export default EndPage
