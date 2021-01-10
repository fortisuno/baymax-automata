import React, { useState } from 'react'
import { ReactSortable } from 'react-sortablejs'

export default function Word({group}) {
  const [word, setWord] = useState([])
  return (
    <div className="w-100 my-4 p-3 d-flex align-items-center">
      <h4 className="mr-3 mb-0">Palabra:</h4>
      <ReactSortable
        list={word}
        setList={setWord}
        group={group}
        animation={150}
        className="d-flex justify-content-left align-items-center w-100 bg-light rounded-lg border p-2"
        style={{
          height: '69px'
        }}
      >
        {
          word.map((syllable) => (
            <div className="border rounded-lg p-3 bg-white mx-2" role="button" key={syllable.id}><h6 className="mb-0">{syllable.value}</h6></div>
          ))
        }
      </ReactSortable>
      <button type="button" className="btn btn-success btn-lg ml-3">Comprobar</button>
    </div>
  )
}
