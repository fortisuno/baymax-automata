import React from 'react'

export default function FooterHome() {
  return (
    <footer className="w-100 position-absolute" style={{bottom: '0px'}}>
      <div className="container">
        <hr/>
      </div>
      <div className="container pb-5">
        <div className="row">
          <div className="col">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">IPN</li>
              <li className="breadcrumb-item">UPIICSA</li>
              <li className="breadcrumb-item">Ing. en Informática</li>
              <li className="breadcrumb-item">Compiladores</li>
              <li className="breadcrumb-item">4NM51</li>
            </ol>
          </div>
          <div className="col-auto">
            <a role="button" className="btn btn-dark">Volver arriba</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

