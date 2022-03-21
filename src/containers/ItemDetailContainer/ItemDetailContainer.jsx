import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getFetch } from '../../mocks/getFetch'
import Container from 'react-bootstrap/esm/Container'
import Spinner from 'react-bootstrap/esm/Spinner'
import ItemDetail from '../../components/ItemDetail/ItemDetail'

const ItemDetailContainer = () => {

  const [producto, setProducto] = useState([])
  const [loading, setLoading] = useState(true)
  const { itemId } = useParams()

  useEffect(() => {
    getFetch
    .then((resp) => setProducto(resp.find(r => r.id === itemId)))
    .catch(err => console.log(err))
    .finally(()=>setLoading(false))
  }, [itemId])

  // useEffect(() => {
  //     let url = 'assets/data.json'
  //     fetch(url)
  //     .then((resp) => resp.json())
  //     .then((resp) => console.log(resp))
  // }, [])

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