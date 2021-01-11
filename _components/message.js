import React from 'react'
import Swal from 'sweetalert2'

export default function Message({title, body, color}) {
  return (
    <div className="d-flex flex-column align-items-center text-center py-4">
      <h2 className="mb-0">{title}</h2>
      <span className="lead my-4">{body}</span>
      <button type="button" className={"btn btn-"+color} onClick={() => Swal.close()}>Aceptar</button>
    </div>
  )
}
