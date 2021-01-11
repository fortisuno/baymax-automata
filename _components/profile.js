import React from 'react'

export default function Profile({name, img}) {
  const containerSize = '200px'
  const imgSize = `calc(${containerSize} - 40px)`
  return (
    <div className="d-flex flex-column align-items-center mx-5" style={{width: containerSize}}>
      <div className="img-profile rounded-circle mb-3" style={{
          width: imgSize,
          height: imgSize,
          background: `url("${img}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}/>
        <span className="lead mb-2">{name}</span>
    </div>
  )
}
