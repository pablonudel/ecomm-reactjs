import React from 'react'
import Button from 'react-bootstrap/esm/Button'
import { Link } from 'react-router-dom'

const BtnGoToCart = () => {
  return (
    <Link to='/cart'>
        <Button variant="dark">Ir al Carrito</Button>
    </Link>
  )
}

export default BtnGoToCart