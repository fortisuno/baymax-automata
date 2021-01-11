import LayoutEjercicios from '@layouts/ejercicios'
import React from 'react'
import SectionEjercicios from '@components/section-ejercicios'
import Word from '@components/word'
import Syllables from '@components/syllables'

export default function PalabrasGraves() {
  const regExp = /^([a-zA-Z]+í(a|o))$|^([a-zA-Z]*[áéíóú][a-zA-Z]{3,4})$/
  const ejercicio1 = [
    {id: 1, value:'ces'},
    {id: 2, value:'cés'},
    {id: 3, value:'ped'},
    {id: 4, value:'péd'}
  ]
  const ejercicio2 = [
    {id: 1, value:'a'},
    {id: 2, value:'á'},
    {id: 3, value:'zu'},
    {id: 4, value:'zú'},
    {id: 5, value:'car'},
    {id: 6, value:'cár'}
  ]
  const ejercicio3 = [
    {id: 1, value:'Bio'},
    {id: 2, value:'Bío'},
    {id: 3, value:'Bió'},
    {id: 4, value:'lo'},
    {id: 6, value:'ló'},
    {id: 7, value:'gía'},
    {id: 8, value:'gia'}
  ]
  const ejercicio4 = [
    {id: 1, value:'tú'},
    {id: 2, value:'tu'},
    {id: 3, value:'nel'},
    {id: 4, value:'nél'}
  ]
  
  return (
    <LayoutEjercicios title="Palabra Graves">
      <SectionEjercicios title="Introducción" id="introduccion">
        <p className="lead">
        Las palabras graves (o palabras llanas) son la que llevan la intensidad de la voz <b>en la penúltima sílaba</b>. Cabe recalcar que <b>no todas las palabras graves llevan acento ortográfico</b> (tilde). 
        </p>
        <p className="lead">
          Las palabras graves NO llevan tilde si terminan en <b>VOCAL o en N o S</b>: problema, adulto, martes, zapato, volumen, pesca, amazonas, tasa, piso.
        </p>
        <p className="lead">
          Ejemplos de palabras graves con tílde: árbol, cárcel, ángel, difícil, túnel, azúcar, lápiz, césped, fácil, útil, carácter, débil.
        </p>
        <p className="lead">
          Hay palabras graves que se acentúan <b>a pesar de terminar en vocal</b>, rompiendo de esta forma el diptongo (ia): María, antropología, biología, oftalmología.
        </p>
      </SectionEjercicios>
      <SectionEjercicios title="Ejercicio 1" id="ejercicio1">
        <span className="lead">Con las siguientes silabas, forma la palabra adecuada. <b>Pista:</b> Lo primero que hace un jardinero es podar el...</span>
        <Word group="ejercicio1" id="respuesta-ejercicio1" regExp={regExp} resp="césped"/>
        <Syllables group="ejercicio1" list={ejercicio1}/>
      </SectionEjercicios>
      <SectionEjercicios title="Ejercicio 2" id="ejercicio2">
        <span className="lead">Con las siguientes silabas, forma la palabra adecuada. <b>Pista:</b> La CocaCola tiene mucha...</span>
        <Word group="ejercicio2" id="respuesta-ejercicio2" regExp={regExp} resp="azúcar"/>
        <Syllables group="ejercicio2" list={ejercicio2}/>
      </SectionEjercicios>
      <SectionEjercicios title="Ejercicio 3" id="ejercicio3">
        <span className="lead">Con las siguientes silabas, forma la palabra adecuada. <b>Pista:</b> Es la ciencia que estudia la estructura de los seres vivos y de sus procesos vitales:</span>
        <Word group="ejercicio3" id="respuesta-ejercicio3" regExp={regExp} resp="Biología"/>
        <Syllables group="ejercicio3" list={ejercicio3}/>
      </SectionEjercicios>
      <SectionEjercicios title="Ejercicio 4" id="ejercicio4">
        <span className="lead">Con las siguientes silabas, forma la palabra adecuada. <b>Pista:</b> En la carretera hay un ... bien largo.</span>
        <Word group="ejercicio4" id="respuesta-ejercicio4" regExp={regExp} resp="túnel"/>
        <Syllables group="ejercicio4" list={ejercicio4}/>
      </SectionEjercicios>
    </LayoutEjercicios>
  )
}

