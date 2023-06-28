import React from 'react'
import AbcLib from './AbcLib'
import HelpButton from './HelpButton'
import CaminoNiveles from '../../pages/CaminoNiveles'

export default function HomeCont() {
  return (
    <div className='cont-home'>
        <AbcLib></AbcLib>
        <HelpButton></HelpButton>
        <CaminoNiveles></CaminoNiveles>
    </div>
  )
}
