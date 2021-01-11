import React from 'react'

export default function SectionEjercicios({title, id, children}) {
  return (
    <div className="w-100 py-5" id={id}>
      <h2>{title}</h2>
      <hr className="mt-0 mb-4"/>
      {children}
    </div>
  )
}
