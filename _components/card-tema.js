import React from 'react'
import Link from 'next/link'

export default function CardTema({tema, descripcion, path}) {
  return (
    <div>
      <div className="card card-tema box-shadow overflow-hidden">
        <div className="card-body text-center border-top border-5 border-primary">
          <h5 className="card-title mb-4">{tema}</h5>
          <p className="card-text mx-auto mb-5" style={{width: '85%'}}>
            {descripcion}
          </p>
          <Link href={path}>
            <a className="btn btn-outline-primary stretched-link">Entrar</a>
          </Link>
        </div>
      </div>
    </div>
  )
}
