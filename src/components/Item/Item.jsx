import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

const item = ({nombre, descripcion, imagen, precio, stock}) => {
  const mostrarCantidad = (cant) => {
    console.log('Cantidad agregada: ' + cant);
  }

  return (
    <div className="col">
        <div className="card">
            <img src={imagen} className='card-img-top' alt="" />
            <div className="card-body">
            <h6 className='card-title'>{nombre}</h6>
            <p className='card-text'>{descripcion}</p>
            <h5 className='text-center'>${precio}</h5>
            <ItemCount stock={stock} initial={1} onAdd={mostrarCantidad}/>
            </div>
        </div>
    </div>
  )
}

export default item