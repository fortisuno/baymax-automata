import React, { useState } from 'react'
import { ReactSortable } from 'react-sortablejs'

export default function Syllables({group, list}) {
  const [syllables, setSyllables] = useState(list)
  return (
    <div className="w-100 p-3 d-flex align-items-center">
      <h4 className="me-3 mb-0">Sílabas:</h4>
      <ReactSortable
        list={syllables}
        setList={setSyllables}
        group={group}
        animation={150}
        className="d-flex justify-content-start w-100"
      >
        {
          syllables.map((syllable) => (
            <div className="border rounded-3 p-3 bg-white mx-2" role="button" key={syllable.id}><h6 className="mb-0">{syllable.value}</h6></div>
          ))
        }
      </ReactSortable>
    </div>
  )
}
