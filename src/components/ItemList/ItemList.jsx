import React, { useEffect, useState }  from 'react'
import { getFetch } from '../../mocks/getFetch'
import Item from '../Item/Item'

const ItemList = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getFetch.then(
        (resp) => setProductos(resp),
        (err) => console.log(err)
        )
        .catch(err => console.log(err))
        .finally(()=>setLoading(false))
    }, [])

    // console.log(productos)

    return (
    <>
        {
            loading ? <div className='d-flex justify-content-center'>
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
            : <div className="row row-cols-4">
                {productos.map((prod) => <Item key={prod.id} nombre={prod.nombre} descripcion={prod.descripcion} imagen={prod.imagen} precio={prod.precio} stock={prod.stock}/>)}
            </div>     
        }
    </>
    )
}

export default ItemList