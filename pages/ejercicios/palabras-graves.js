import LayoutEjercicios from '@layouts/ejercicios'
import React from 'react'
import SectionEjercicios from '@components/section-ejercicios'
import Word from '@components/word'
import Syllables from '@components/syllables'

export default function PalabrasGraves() {
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
    {id: 1, value:'Can'},
    {id: 2, value:'ción'},
    {id: 3, value:'cíon'},
    {id: 4, value:'Cán'},
    {id: 5, value:'cion'}
  ]
  const ejercicio4 = [
    {id: 1, value:'E'},
    {id: 2, value:'É'},
    {id: 3, value:'du'},
    {id: 4, value:'dú'},
    {id: 5, value:'ca'},
    {id: 6, value:'cá'},
    {id: 7, value:'ción'},
    {id: 8, value:'cion'},
    {id: 9, value:'cíon'}
  ]

  return (
    <LayoutEjercicios title="Palabra Graves">
      <SectionEjercicios title="Introducción" id="introduccion">
        <p className="text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio officiis odio a deserunt, accusantium provident omnis laborum mollitia vero rem qui ipsum voluptatibus? Sunt ab eveniet eum maiores aperiam officia obcaecati voluptates sit impedit blanditiis ullam molestias cupiditate fugit voluptatibus repudiandae recusandae, esse velit laborum consectetur! Ad, voluptates quo maiores ab voluptatem provident, itaque quos voluptatum fugiat non atque, ea illum ipsam! Odio corrupti dolorem laboriosam in. Esse alias vel maiores molestias amet, earum enim nostrum officia repellendus dolor! Accusantium repellendus nisi nemo suscipit, vel, explicabo quas voluptas qui molestias quaerat sed illo autem ex, et praesentium quisquam tempora. At.
        </p>
      </SectionEjercicios>
      <SectionEjercicios title="Ejercicio 1" id="ejercicio1">
        <span className="lead">Con las siguientes silabas, forma la palabra adecuada. <b>Pista:</b> ¿Qué idioma hablan en Portugal?</span>
        <Word group="ejercicio1" id="respuesta-ejercicio1"/>
        <Syllables group="ejercicio1" list={ejercicio1}/>
      </SectionEjercicios>
      <SectionEjercicios title="Ejercicio 2" id="ejercicio2">
        <span className="lead">Con las siguientes silabas, forma la palabra adecuada. <b>Pista:</b> Disney hizo la pelicula de El Rey...</span>
        <Word group="ejercicio2" id="respuesta-ejercicio2"/>
        <Syllables group="ejercicio2" list={ejercicio2}/>
      </SectionEjercicios>
      <SectionEjercicios title="Ejercicio 3" id="ejercicio3">
        <span className="lead">Con las siguientes silabas, forma la palabra adecuada. <b>Pista:</b> Mi hermana ... todos mis dulces.</span>
        <Word group="ejercicio3" id="respuesta-ejercicio3"/>
        <Syllables group="ejercicio3" list={ejercicio3}/>
      </SectionEjercicios>
      <SectionEjercicios title="Ejercicio 4" id="ejercicio4">
        <span className="lead">Con las siguientes silabas, forma la palabra adecuada. <b>Pista:</b> Escribir bien, muestra una buena...</span>
        <Word group="ejercicio4" id="respuesta-ejercicio4"/>
        <Syllables group="ejercicio4" list={ejercicio4}/>
      </SectionEjercicios>
    </LayoutEjercicios>

  )
}

