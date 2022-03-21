import React from 'react'
import {LinkContainer} from 'react-router-bootstrap'
import Col from 'react-bootstrap/esm/Col'
import Card from 'react-bootstrap/esm/Card'
import Button from 'react-bootstrap/esm/Button'
import Badge from 'react-bootstrap/esm/Badge'

const Item = ({producto}) => {

    return (
    <Col>
        <Card className='h-100 shadow ItemCard rounded-0'>
            <Card.Img variant="top" src={producto.imagen} alt={producto.nombre} />
            <Card.Body>
                <LinkContainer to={`/category/${producto.categoria}`}>
                    <Card.Link><Badge pill bg='dark'>{producto.categoria}</Badge></Card.Link>
                </LinkContainer>
                <Card.Title className='mt-3 text-truncate'>{producto.nombre}</Card.Title>
                <div className="d-flex justify-content-between">
                </div>
                <div className="d-flex justify-content-between align-items-baseline">
                    <h5 className='text-center'>${producto.precio}.-</h5>
                    <LinkContainer to={`/item/${producto.id}`}>
                        <Button variant="dark"><i className="bi bi-eye"></i></Button>
                    </LinkContainer>
                </div>
            </Card.Body>
        </Card>
    </Col>
  )
}

export default Item