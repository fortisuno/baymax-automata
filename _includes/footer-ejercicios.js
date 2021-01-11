import React, {Fragment} from 'react'

export default function FooterEjercicios() {
  return (
    <Fragment>
      <hr/>
      <footer className="row mb-5">
        <div className="col">
          <ol className="breadcrumb bg-white">
            <li className="breadcrumb-item">IPN</li>
            <li className="breadcrumb-item">UPIICSA</li>
            <li className="breadcrumb-item">Ing. en Informática</li>
            <li className="breadcrumb-item">Compiladores</li>
            <li className="breadcrumb-item">4NM51</li>
            <li className="breadcrumb-item">Proyecto</li>
          </ol>
        </div>
        <div className="col-auto text-right">
          <button type="button" className="btn btn-dark">Volver arriba</button>
        </div>
      </footer>
    </Fragment>
  )
}
