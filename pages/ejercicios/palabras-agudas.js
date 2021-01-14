import LayoutEjercicios from '@layouts/ejercicios'
import React, { useState } from 'react'
import SectionEjercicios from '@components/section-ejercicios'
import Word from '@components/word'
import Syllables from '@components/syllables'

export default function PalabrasAgudas() {
  const regExp = {
    stressed: /^[a-zA-Z]{0,2}[áéíóú][nNsS]?$/,
    noStressed: /^[a-zA-Z]+$/,
    last: /^[a-zA-Z]{0,2}[áéíóú][a-zA-Z]?$/
  }
  const ejercicio1 = [
    {id: 1, value:'Por'},
    {id: 2, value:'Pór'},
    {id: 3, value:'tu'},
    {id: 4, value:'tú'},
    {id: 5, value:'gues'},
    {id: 6, value:'gués'}
  ]
  const ejercicio2 = [
    {id: 1, value:'Le'},
    {id: 2, value:'Lé'},
    {id: 3, value:'ón'},
    {id: 4, value:'on'}
  ]
  const ejercicio3 = [
    {id: 1, value:'co'},
    {id: 2, value:'có'},
    {id: 3, value:'mió'},
    {id: 4, value:'mio'},
  ]
  const ejercicio4 = [
    {id: 1, value:'e'},
    {id: 2, value:'é'},
    {id: 3, value:'du'},
    {id: 4, value:'dú'},
    {id: 5, value:'ca'},
    {id: 6, value:'cá'},
    {id: 7, value:'ción'},
    {id: 8, value:'cion'},
    {id: 9, value:'cíon'}
  ]
  
  return (
    <LayoutEjercicios title="Palabra Agudas">
      <SectionEjercicios title="Introducción" id="introduccion">
        <p className="lead">
          Las palabras agudas son las que llevan acento (la intensidad de la voz) en la última sílaba. Importante destacar que no todas las palabras agudas llevan acento ortográfico (tilde).
        </p>
        <p className="lead">
          Las palabras agudas llevan tilde si <b>terminan en vocal</b>: Perú, sofá, café, rubí, menú, marroquí, bebé.
        </p>
        <p className="lead">
          Las palabras agudas llevan tilde si <b>terminan en N o S</b>: también, algún, jamás, según, sillón, además, organización, capitán, alemán, anís, canción.
        </p>
        <p className="lead">
          Hay palabras agudas que tienen tilde a pesar de NO terminar en vocal, N o S. <b>Esto es por la ruptura del diptongo</b>: Raúl, baúl, raíz, maíz.
        </p>
      </SectionEjercicios>
      <SectionEjercicios title="Ejercicio 1" id="ejercicio1">
        <span className="lead">Con las siguientes silabas, forma la palabra adecuada. <b>Pista:</b> ¿Qué idioma hablan en Portugal?</span>
        <Word group="ejercicio1" id="respuesta-ejercicio1" pivote={1} regExp={regExp} answer="Portugués"/>
        <Syllables group="ejercicio1" list={ejercicio1}/>
      </SectionEjercicios>
      <SectionEjercicios title="Ejercicio 2" id="ejercicio2">
        <span className="lead">Con las siguientes silabas, forma la palabra adecuada. <b>Pista:</b> Disney hizo la pelicula de El Rey...</span>
        <Word group="ejercicio2" id="respuesta-ejercicio2" pivote={1} regExp={regExp} answer="León"/>
        <Syllables group="ejercicio2" list={ejercicio2}/>
      </SectionEjercicios>
      <SectionEjercicios title="Ejercicio 3" id="ejercicio3">
        <span className="lead">Con las siguientes silabas, forma la palabra adecuada. <b>Pista:</b> Mi hermana ... todos mis dulces.</span>
        <Word group="ejercicio3" id="respuesta-ejercicio3" pivote={1} regExp={regExp} answer="comió"/>
        <Syllables group="ejercicio3" list={ejercicio3}/>
      </SectionEjercicios>
      <SectionEjercicios title="Ejercicio 4" id="ejercicio4">
        <span className="lead">Con las siguientes silabas, forma la palabra adecuada. <b>Pista:</b> Escribir bien, muestra una buena...</span>
        <Word group="ejercicio4" id="respuesta-ejercicio4" pivote={1} regExp={regExp} answer="educación"/>
        <Syllables group="ejercicio4" list={ejercicio4}/>
      </SectionEjercicios>
    </LayoutEjercicios>
  )
}

