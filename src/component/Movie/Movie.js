import React from 'react'
import { movie } from '../Data/Data'



export default function Movie({movies}) {
  return (
    <div>
      {movies.map(el=><Movie el={el} key={el.id}/>)}
    </div>
  )
}


