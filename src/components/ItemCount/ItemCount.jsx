import React from 'react'
import {useState} from 'react'

const ItemCount = ({stock, initial, onAdd}) => {

  const [itemCount, setContador] = useState(initial)

  const handleCount = (op) => {
      if(op === 'add'){
        setContador(itemCount+1)
      }
      if(op === 'sub'){
        setContador(itemCount-1)
      }
  }
  
  return (
    <div>
        <div className="input-group mb-3">
            <button className="btn btn-success" onClick={()=> handleCount('sub')} disabled={stock == 0 || itemCount == initial}>-</button>
            <input type="text" className='form-control text-center' disabled readOnly value={ itemCount }></input>
            <button className="btn btn-success" onClick={()=> handleCount('add')} disabled={stock == 0 || itemCount == stock}>+</button>
        </div>
        <div className="d-flex justify-content-between">
            <button className='btn btn-outline-success'><i class="bi bi-eye"></i></button>
            <button className='btn btn-outline-success' disabled={stock == 0} onClick={() => onAdd(itemCount)}>Agregar al carrito</button>
        </div>
    </div>
  )
}

export default ItemCount