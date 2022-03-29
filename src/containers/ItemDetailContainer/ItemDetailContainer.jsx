import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Container from 'react-bootstrap/esm/Container'
import Spinner from 'react-bootstrap/esm/Spinner'
import ItemDetail from '../../components/ItemDetail/ItemDetail'
import { doc, getDoc, getFirestore } from 'firebase/firestore'

const ItemDetailContainer = () => {

  const [producto, setProducto] = useState([])
  const [loading, setLoading] = useState(true)
  const { itemId } = useParams()

  useEffect(() => {
    const db = getFirestore()
    const queryProducto = doc(db, 'productos', itemId)
    getDoc(queryProducto)
    .then(resp => setProducto( {id: resp.id, ...resp.data()} ))
    .catch(err => console.log(err))
    .finally(()=>setLoading(false))
  }, [itemId])
  

  return (
    <Container fluid>
        {
          loading ? <div className='d-flex justify-content-center vh-100'>
          <Spinner animation="border" variant="light" className='align-self-center'/>
          </div>
          : <Container className='mt-5 mb-5'>
            <ItemDetail producto={producto}/>
          </Container>
        }
    </Container>
  )
}

export default ItemDetailContainer