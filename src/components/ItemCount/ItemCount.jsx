import React from 'react'
import {useState} from 'react'
import InputGroup from 'react-bootstrap/esm/InputGroup'
import FormControl from 'react-bootstrap/esm/FormControl'
import Button from 'react-bootstrap/esm/Button'
import BtnAddToCart from '../BtnAddToCart/BtnAddToCart'
import BtnGoToShop from '../BtnGoToShop/BtnGoToShop'
import BtnGoToCart from '../BtnGoToCart/BtnGoToCart'

const ItemCount = ({initial, onAdd, producto}) => {

  const [itemCount, setContador] = useState(initial)
  const [inputType, setInputType] = useState('actionAdd')

  const handleCount = (op) => {
    if(op === 'add'){
      setContador(itemCount+1)
    }
    if(op === 'sub'){
      setContador(itemCount-1)
    }
  }

  const handleAction = () =>{
    setInputType('actionGoTo')
    onAdd(itemCount)
  }

  return (
    <div>
      {
        inputType === 'actionAdd'
        ? <div>
            <InputGroup className='mb-3'>
              <Button variant="dark" onClick={()=> handleCount('sub')} disabled={itemCount === initial}>-</Button>
              <FormControl className='text-center' placeholder={ itemCount }/>
              <Button variant="dark" onClick={()=> handleCount('add')} disabled={itemCount === producto.stock}>+</Button>
            </InputGroup>
            <div className='d-grid'>
              <BtnAddToCart handleAction={handleAction}/>
            </div>
        </div>
        : <div className='d-grid gap-3 text-center'>
            <BtnGoToShop/>
            <BtnGoToCart/>
        </div>
      }
      
    </div>
  )
}

export default ItemCount