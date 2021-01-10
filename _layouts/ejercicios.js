import React, { Component, Fragment } from 'react'
import Head from 'next/head'
import Footer from '@includes/footer-ejercicios'
import Link from 'next/link'

export default function LayoutEjercicios({title, children}) {
  return (
    <Fragment>
      <Head>
        <title>Ejercicios - {title}</title>
      </Head>
      <div className="container-fluid">
        <div className="row vh-100">
          <div className="col-md-4 col-lg-2 border-right border-light shadow bg-light py-5">
            <div className="sticky-top" style={{top: '48px'}}>
              <h3 className="px-3 mb-5">{title}</h3>
              <nav className="nav nav-pills flex-column">
                <a href="#reglas" className="nav-link active">Introducción</a>
                <a href="#ejercicio1" className="nav-link" onClick={(e) => e.preventDefault()}>Ejercicio1</a>
                <a href="#ejercicio2" className="nav-link">Ejercicio2</a>
                <a href="#ejercicio3" className="nav-link">Ejercicio3</a>
                <a href="#ejercicio4" className="nav-link">Ejercicio4</a>
              </nav>
              <Link href="/"><a className="btn btn-link mt-5">Volver al inicio</a></Link>
            </div>
          </div>
          <div className="col py-5" style={{padding: '0 5rem'}}>
            {children}
            <Footer/>
          </div>
        </div>
      </div>        
    </Fragment>
  )
}
