import LayoutEjercicios from '@layouts/ejercicios'
import React from 'react'
import SectionEjercicios from '@components/section-ejercicios'
import Word from '@components/word'
import Syllables from '@components/syllables'

export default function PalabrasEsdrujulas() {
  const regExp = {
    stressed: /^[a-zA-Z]{0,2}[áéíóú][a-zA-Z]?$/,
    noStressed: /^[a-zA-Z]+$/,
    last: /^[a-zA-Z]+$/
  }
  const ejercicio1 = [
    {id: 1, value:'e'},
    {id: 2, value:'é'},
    {id: 3, value:'jer'},
    {id: 4, value:'jér'},
    {id: 5, value:'ci'},
    {id: 6, value:'cí'},
    {id: 7, value:'to'},
    {id: 8, value:'tó'}
  ]
  const ejercicio2 = [
    {id: 1, value:'A'},
    {id: 2, value:'Á'},
    {id: 3, value:'me'},
    {id: 4, value:'mé'},
    {id: 5, value:'ri'},
    {id: 6, value:'rí'},
    {id: 7, value:'ca'},
    {id: 8, value:'cá'},
  ]
  const ejercicio3 = [
    {id: 1, value:'si'},
    {id: 2, value:'sí'},
    {id: 3, value:'la'},
    {id: 4, value:'lá'},
    {id: 5, value:'bas'},
    {id: 6, value:'bás'}
  ]
  const ejercicio4 = [
    {id: 1, value:'bru'},
    {id: 2, value:'brú'},
    {id: 3, value:'ju'},
    {id: 4, value:'jú'},
    {id: 5, value:'la'},
    {id: 6, value:'lá'},
  ]

  return (
    <LayoutEjercicios title="Palabra Esdrújulas">
      <SectionEjercicios title="Introducción" id="introduccion">
        <p className="lead">
          Las palabras esdrújulas son las que llevan la intensidad de la voz en la antepenúltima sílaba. Es importantísimo destacar que en este caso <b>todas las palabras se acentúan con el acento ortográfico (tilde) siempre</b>.
        </p>
        <p className="lead">
          Algunos ejemplos son: América, Bélgica, Sudáfrica, música, miércoles, sílaba, máquina, gramática, económico, pájaro, séptimo, cuídate, brújula, gótico, hígado, ejército, características, cállate, dámelo, fósforo, cáscara, cerámica, oxígeno, didáctico, válido.
        </p>
      </SectionEjercicios>
      <SectionEjercicios title="Ejercicio 1" id="ejercicio1">
        <span className="lead">Con las siguientes silabas, forma la palabra adecuada. <b>Pista:</b> El ... Nazi fue temido por toda Europa</span>
        <Word group="ejercicio1" id="respuesta-ejercicio1" pivote={3} regExp={regExp} answer="ejército"/>
        <Syllables group="ejercicio1" list={ejercicio1}/>
      </SectionEjercicios>
      <SectionEjercicios title="Ejercicio 2" id="ejercicio2">
        <span className="lead">Con las siguientes silabas, forma la palabra adecuada. <b>Pista:</b> Cristóbal Colón descubrió...</span>
        <Word group="ejercicio2" id="respuesta-ejercicio2" pivote={3} regExp={regExp} answer="América"/>
        <Syllables group="ejercicio2" list={ejercicio2}/>
      </SectionEjercicios>
      <SectionEjercicios title="Ejercicio 3" id="ejercicio3">
        <span className="lead">Con las siguientes silabas, forma la palabra adecuada. <b>Pista:</b> En este juego separamos las palabras en...</span>
        <Word group="ejercicio3" id="respuesta-ejercicio3" pivote={3} regExp={regExp} answer="sílabas"/>
        <Syllables group="ejercicio3" list={ejercicio3}/>
      </SectionEjercicios>
      <SectionEjercicios title="Ejercicio 4" id="ejercicio4">
        <span className="lead">Con las siguientes silabas, forma la palabra adecuada. <b>Pista:</b> Gracias a mi ... supe hacia donde estaba el norte.</span>
        <Word group="ejercicio4" id="respuesta-ejercicio4" pivote={3} regExp={regExp} answer="brújula"/>
        <Syllables group="ejercicio4" list={ejercicio4}/>
      </SectionEjercicios>
    </LayoutEjercicios>

  )
}

