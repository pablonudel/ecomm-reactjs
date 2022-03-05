import React from 'react'

const ItemDetail = ({imagen, nombre, descripcion, precio}) => {
  return (
    <div className="card mb-3">
        <div className="row g-0">
            <div className="col-md-4">
            <img src={imagen} className="img-fluid rounded-start" alt="..."/>
            </div>
            <div className="col-md-8">
            <div className="card-body">
                <h5 className="card-title">{nombre}</h5>
                <p className="card-text">{descripcion}</p>
                <h4 className="card-text">${precio}</h4>
            </div>
            </div>
        </div>
    </div>
  )
}

export default ItemDetail