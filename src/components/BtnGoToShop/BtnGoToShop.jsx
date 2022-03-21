import React from 'react'
import Button from 'react-bootstrap/esm/Button'
import { Link } from 'react-router-dom'

const BtnGoToShop = () => {
  return (
    <Link to='/'>
        <Button variant="dark">Continuar comprando</Button>
    </Link>
  )
}

export default BtnGoToShop