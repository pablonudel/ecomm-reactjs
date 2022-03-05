import React, { useEffect, useState }  from 'react'
import { getFetch } from '../../mocks/getFetch'
import ItemDetail from '../../components/ItemDetail/ItemDetail'

const ItemDetailContainer = () => {

  const [producto, setProducto] = useState([])
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    getFetch.then(
        (resp) => setProducto(resp.find(r => r.id === 3)),
        )
        .catch(err => console.log(err))
        .finally(()=>setLoading(false))
  }, [])
  

  return (
    <div className='container-fluid bg-light hero'>
        {
            loading ? <div className='d-flex justify-content-center'>
            <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
        :<div className='container'>
        <ItemDetail imagen={producto.imagen} nombre={producto.nombre} descripcion={producto.descripcion} precio={producto.precio}/>
       </div>
        }
    </div>
  )
}

export default ItemDetailContainer