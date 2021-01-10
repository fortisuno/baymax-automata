import React from 'react'
import Link from 'next/link'

export default function CardTema({tema, descripcion, path}) {
  return (
    <div>
      <div className="card card-tema card-shadow">
        <div className="card-body">
          <h5 className="card-title">{tema}</h5>
          <p className="card-text">
            {descripcion}
          </p>
          <div className="w-100 text-right">
            <Link href={path}>
              <a className="btn btn-sm btn-outline-primary stretched-link">Entrar</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
