import React from 'react'

import "./Playagain.css"

export const Playagain = ({resetBoard}) => {
  return (
    <button className='playagain' onClick={resetBoard}>Play Again</ button>
  )
}
