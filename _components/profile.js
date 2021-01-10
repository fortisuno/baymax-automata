import React from 'react'

export default function Profile({name, img}) {
  const imgSize = '160px'
  return (
    <div className="d-flex flex-column align-items-center mx-5" style={{width: imgSize}}>
      <div className="img-profile rounded-circle" style={{
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
