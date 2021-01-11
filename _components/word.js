import React, { useState } from 'react'
import { ReactSortable } from 'react-sortablejs'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import Message from './message'

const Modal = withReactContent(Swal)

export default function Word({group, id, regExp, resp}) {
  const [word, setWord] = useState([])

  const validateWord = () => {
    const elements = document.querySelectorAll('#'+id+' > div > h6')
    const syllables = []
    let word = ''

    if(elements.length > 0) {
      elements.forEach(element => {
        syllables.push(element.innerHTML)
      })
      syllables.forEach(syllable => word += syllable)
      console.log('Palabra: ' + word)
      if(regExp.test(word)) {
        if(word === resp) {
          console.log('Encontraste la respuesta');
          Modal.fire({
            html: <Message
              title="¡Excelente!"
              body="Encontraste la respuesta correcta."
              color="success"
            />,
            showConfirmButton: false
          })
        } else {
          console.log('Casi pero no');
          Modal.fire({
            html: <Message
              title="¡Bien!"
              body="Usaste la estructura correcta pero no es la palabra solicitada."
              color="warning"
            />,
            showConfirmButton: false
          })
        }
      } else {
        console.log('La palabra NO es valida');
        Modal.fire({
          html: <Message
            title="¡Ups!"
            body="Revisa nuevamente la estructura y vuelve a intentarlo."
            color="danger"
          />,
          showConfirmButton: false
        })
      }
    } else {
      console.log('No hay silabas en la palabra');
      Modal.fire({
        html: <Message
          title="¡Ups!"
          body="Parece que no haz ingresado alguna sílaba."
          color="danger"
        />,
        showConfirmButton: false
      })
    }

  }

  return (
    <div className="w-100 my-4 p-3 d-flex align-items-center">
      <h4 className="me-3 mb-0">Palabra:</h4>
      <ReactSortable
        list={word}
        setList={setWord}
        group={group}
        animation={150}
        className="d-flex justify-content-left align-items-center w-100 bg-light rounded-3 border p-2"
        id={id}
        style={{
          height: '69px'
        }}
      >
        {
          word.map((syllable) => (
            <div className="border rounded-3 p-3 bg-white mx-2" role="button" key={syllable.id}><h6 className="mb-0">{syllable.value}</h6></div>
          ))
        }
      </ReactSortable>
      <button type="button" className="btn btn-success btn-lg ms-3" onClick={validateWord}>Comprobar</button>
    </div>
  )
}
