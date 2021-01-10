import LayoutHome from '@layouts/home'
import React from 'react'
import CardTema from '@components/card-tema'

export default function Home() {
  return (
    <LayoutHome>
      <div className="col-12 text-center mb-5">
          <h1>¿Que tema practicaremos hoy?</h1>
        </div>
        <div className="col-md-4 mb-4">
          <CardTema
            tema="Parablas Agudas"
            descripcion="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate magni sapiente voluptate natus animi tempore!"
            path="/ejercicios/palabras-agudas"
          />
        </div>
        <div className="col-md-4 mb-4">
          <CardTema
            tema="Parablas Graves"
            descripcion="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate magni sapiente voluptate natus animi tempore!"
            path="/ejercicios/palabras-graves"
          />
        </div>
        <div className="col-md-4 mb-4">
          <CardTema
            tema="Parablas Esdrújulas"
            descripcion="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate magni sapiente voluptate natus animi tempore!"
            path="/ejercicios/palabras-esdrujulas"
          />
        </div>
    </LayoutHome>
  )
}
