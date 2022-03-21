import React from 'react'
import Item from '../Item/Item'
import Row from 'react-bootstrap/esm/Row'


const ItemList = ({productos}) => {

    return (
        <Row xs={1} md={2} lg={3} xl={4} className='g-3'>
            {
                productos.map((producto) => <Item key={producto.id} producto={producto}/>)
            }
        </Row>
    )
}

export default ItemList