import React from 'react'

export default function SectionEjercicios({title, children}) {
  return (
    <div className="w-100 mb-5">
      <h2>{title}</h2>
      <hr className="mt-0 mb-4"/>
      {children}
    </div>
  )
}
