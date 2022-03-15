import React from 'react'
import {LinkContainer} from 'react-router-bootstrap'
import Card from 'react-bootstrap/esm/Card'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import Badge from 'react-bootstrap/esm/Badge'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({producto}) => {
    const quantityToAdd = (cant) => {
        console.log('Cantidad agregada: ' + cant);
    }

    return (
        <Card className='rounded-0'>
            <Row>
                <Col md={6}>
                    <div className='ImgCol h-100'>
                        <img src={producto.imagen} alt={producto.nombre} className='img-fluid rounded-start'/>
                    </div>
                </Col>
                <Col md={6} className='p-5'>
                    <Card.Body>
                        <LinkContainer to={`/category/${producto.categoria}`}>
                            <Card.Link><Badge pill bg='dark'>{producto.categoria}</Badge></Card.Link>
                        </LinkContainer>
                        <Card.Title className='mt-3'>{producto.nombre}</Card.Title>
                        <Card.Text>{producto.descripcion}</Card.Text>
                        <Card.Text as={'h4'} className='mb-5'>${producto.precio}.-</Card.Text>
                        <div>
                            {
                                producto.stock === 0
                                ? <Badge bg="secondary">Sin stock</Badge>
                                : <ItemCount initial={1} producto={producto} onAdd={quantityToAdd}/>
                            }
                        </div>
                    </Card.Body>
                </Col>
            </Row>
        </Card>
    )
}

export default ItemDetail