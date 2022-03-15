import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getFetch } from '../../mocks/getFetch'
import Container from 'react-bootstrap/esm/Container'
import Spinner from 'react-bootstrap/esm/Spinner'
import ItemList from '../../components/ItemList/ItemList'

const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const { catId } = useParams()
    
    useEffect(() => {
        if(catId){
            getFetch
            .then((respuesta) =>{ return respuesta})
            .then((resp) => setProductos(resp.filter(r => r.categoria === catId)))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
        }else{
            getFetch
            .then((respuesta) =>{ return respuesta})
            .then((resp) => setProductos(resp))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
        }
    }, [catId])

    // useEffect(() => {
    //     let url = 'assets/data.json'
    //     fetch(url)
    //     .then((resp) => resp.json())
    //     .then((resp) => console.log(resp))
    // }, [])
    
    
    return (
        <>
            {
                loading ? <div className='d-flex justify-content-center vh-100'>
                    <Spinner animation="border" variant="light" className='align-self-center'/>
                </div>
                : <Container className='mt-5 mb-5'>
                    <ItemList productos={productos}/>
                </Container>
            }
        </>
    )
}

export default ItemListContainer