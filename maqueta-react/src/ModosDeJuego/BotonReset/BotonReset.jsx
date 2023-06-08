import React from 'react'

export default function BotonReset({ onReset, gameOver }) {
  return (
    <button onClick={onReset} className={`reset-button ${gameOver ? "show" : ""}`}>Reintentar</button>
  )
}
