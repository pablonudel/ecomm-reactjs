import React from 'react'
import Button from 'react-bootstrap/esm/Button'

const BtnAddToCart = ({handleAction}) => {
  return (
    <Button variant="dark" onClick={handleAction}>Agregar al carrito</Button> 
  )
}

export default BtnAddToCart