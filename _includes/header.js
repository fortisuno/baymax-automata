import React from 'react'
import Profile from '@components/profile'

export default function Header() {
  return (
    <header className="header-home bg-dark text-white" style={{
      background: 'url("/images/header.jpg")',
      backgroundPosition: 'center',
      backgroundSize: 'cover'
    }}>
      <div className="container-fluid" style={{background: 'rgba(0,0,0,0.1)'}}>
        <div className="row vh-100 py-5 align-content-center text-center">
          <div className="col">
            <div style={{marginBottom: '5rem'}}>
              <h1 className="display-1">Baymax</h1>
              <h2 className="mb-0" style={{opacity: 0.6}}>Automata</h2>
            </div>
            <div className="d-flex flex-column align-items-center">
              <div className="d-fex row justify-content-center w-100">
                <Profile name="Gómez Morales Pablo Arturo" img="/images/profile1.jpg"/>
                <Profile name="Hernández Díaz Kevin Daniel" img="/images/profile2.jpeg"/>
              </div>
              <button type="button" className="btn btn-lg btn-primary" style={{marginTop: '3rem'}}>Empezar</button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

