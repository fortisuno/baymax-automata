import LayoutHome from '@layouts/home'
import React from 'react'
import CardTema from '@components/card-tema'

export default function Home() {
  return (
    <LayoutHome>
      <div className="col-12 text-center" style={{marginBottom: '5rem'}}>
          <h1>¿Que tema practicaremos hoy?</h1>
        </div>
        <div className="col-md-4 mb-4">
          <CardTema
            tema="Parablas Agudas"
            descripcion="Las palabras agudas son las que llevan acento (la intensidad de la voz) en la última sílaba."
            path="/ejercicios/palabras-agudas"
          />
        </div>
        <div className="col-md-4 mb-4">
          <CardTema
            tema="Parablas Graves"
            descripcion="Las palabras graves (o palabras llanas) son la que llevan la intensidad de la voz en la penúltima sílaba."
            path="/ejercicios/palabras-graves"
          />
        </div>
        <div className="col-md-4 mb-4">
          <CardTema
            tema="Parablas Esdrújulas"
            descripcion="Las palabras esdrújulas son las que llevan la intensidad de la voz en la antepenúltima sílaba."
            path="/ejercicios/palabras-esdrujulas"
          />
        </div>
    </LayoutHome>
  )
}
