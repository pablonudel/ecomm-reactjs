import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Card from 'react-bootstrap/esm/Card'

const Cart = () => {
  return (
    <Container className='mt-5'>
      <Card className='rounded-0 p-5'>
        <Card.Title className='text-center'>
          Cart
        </Card.Title>
      </Card>
    </Container>
  )
}

export default Cart