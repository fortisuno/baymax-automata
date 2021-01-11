import React, {Fragment} from 'react'
import Head from 'next/head'
import Header from '@includes/header'
import FooterHome from '@includes/footer-home'

export default function LayoutHome({children}) {
  return (
    <Fragment>
      <Head>
        <title>Inicio</title>
      </Head>
      <Header/>
      <div className="container" id="ejercicios">
        <div className="row py-5 vh-100 align-content-center position-relative">
          {children}
          <FooterHome/>
        </div>
      </div>
    </Fragment>
  )
}
