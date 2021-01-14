import React, { useState } from 'react'
import { ReactSortable } from 'react-sortablejs'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import Message from './message'

const Modal = withReactContent(Swal)

export default function Word({group, id, pivote, regExp, answer}) {
  const [syllables, setSyllables] = useState([])
  const j = syllables.length - pivote

  const validateWord = () => {
    const elements = document.querySelectorAll('#'+id+' > div > h6')
    const {stressed, noStressed, last} = regExp
    let word =''
    let errors = 0
    
    if(elements.length > 0) {
     
      if(pivote == 1) {
        if(syllables.length <= 2) {
          for(let i = 0; i < syllables.length; i++) {
            if(i == j) {
              // Ultima sílaba y tónica
              if(!last.test(syllables[i].value)) {
                errors += 1
              }
            } else {
              // Sílaba con tono normal
              if(!noStressed.test(syllables[i].value)) {
                errors += 1
              }
            }
          }
        } else {
          for(let i = 0; i < syllables.length; i++) {
            if(i == j) {
              // Ultima sílaba y tónica
              if(!stressed.test(syllables[i].value)) {
                errors += 1
              }
            } else {
              // Sílaba con tono normal
              if(!noStressed.test(syllables[i].value)) {
                errors += 1
              }
            }
          }
        }
      } else if(pivote == 2) {
        console.log('pivote es 2');
        const diphthongFS = /^[a-zA-Z]{1,2}[íÍ]$/
        const diphthongSS = /^[a]$/
        console.log(diphthongFS.test(syllables[j].value));
        if(diphthongFS.test(syllables[j].value)) {
          for(let i = 0; i < syllables.length; i++) {
            if(i == (syllables.length -1)) {
              // Ultima sílaba
              if(!diphthongSS.test(syllables[i].value)) {
                errors += 1
              }
            } else if(i == j) {
              // Sílaba tónica
              if(!diphthongFS.test(syllables[i].value)) {
                errors += 1
              }
            } else {
              // Sílaba con tono normal
              if(!noStressed.test(syllables[i].value)) {
                errors += 1
              }
            }
          }
        } else {
          for(let i = 0; i < syllables.length; i++) {
            if(i == (syllables.length -1)) {
              // Ultima sílaba
              if(!last.test(syllables[i].value)) {
                errors += 1
              }
            } else if(i == j) {
              // Sílaba tónica
              if(!stressed.test(syllables[i].value)) {
                errors += 1
              }
            } else {
              // Sílaba con tono normal
              if(!noStressed.test(syllables[i].value)) {
                errors += 1
              }
            }
          }
        }
      } else {
        for(let i = 0; i < syllables.length; i++) {
          if(i == (syllables.length -1)) {
            // Ultima sílaba
            if(!last.test(syllables[i].value)) {
              errors += 1
            }
          } else if(i == j) {
            // Sílaba tónica
            if(!stressed.test(syllables[i].value)) {
              errors += 1
            }
          } else {
            // Sílaba con tono normal
            if(!noStressed.test(syllables[i].value)) {
              errors += 1
            }
          }
        }
      }
      
      if(errors > 0 ){
        console.log('La palabra NO es valida');
        Modal.fire({
          html: <Message
            title="¡Ups!"
            body="Revisa nuevamente la estructura y vuelve a intentarlo."
            color="danger"
          />,
          showConfirmButton: false
        })
      } else {
        syllables.forEach(syllable => {
          word += syllable.value
        })
        if(word === answer) {
          console.log('Respuesta correcta');
          Modal.fire({
            html: <Message
              title="¡Excelente!"
              body="Encontraste la respuesta correcta."
              color="success"
            />,
            showConfirmButton: false
          })
        } else {
          console.log('Respuesta incorrecta');
          Modal.fire({
            html: <Message
              title="¡Bien!"
              body="Usaste la estructura correcta pero no es la palabra solicitada."
              color="warning"
            />,
            showConfirmButton: false
          })
        }
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
      <h4 className="me-3 mb-0">Palabra: </h4>
      <ReactSortable
        list={syllables}
        setList={setSyllables}
        group={group}
        animation={150}
        className="d-flex justify-content-left align-items-center w-100 bg-light rounded-3 border p-2"
        id={id}
        style={{
          height: '69px'
        }}
      >
        {
          syllables.map((syllable) => (
            <div className="border rounded-3 p-3 bg-white mx-2" role="button" key={syllable.id}><h6 className="mb-0">{syllable.value}</h6></div>
          ))
        }
      </ReactSortable>
      <button type="button" className="btn btn-success btn-lg ms-3" onClick={validateWord}>Comprobar</button>
    </div>
  )
}
