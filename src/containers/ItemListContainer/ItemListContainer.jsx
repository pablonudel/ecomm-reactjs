import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Container from 'react-bootstrap/esm/Container'
import Spinner from 'react-bootstrap/esm/Spinner'
import ItemList from '../../components/ItemList/ItemList'
import {collection, getDocs, getFirestore, query, where} from 'firebase/firestore'

const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const { catId } = useParams()
    
    useEffect(() => {
        const db = getFirestore()    
        const queryCollection = collection(db, 'productos')
        if(catId){
            const queryFilter = query(queryCollection, where('categoria', '==', catId))
            getDocs(queryFilter)
            //.then(resp => console.log(resp))
            .then(resp => setProductos( resp.docs.map(item => ({id: item.id, ...item.data()})) ))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
        }else{
            getDocs(queryCollection) // le decimos que lo traiga
            //.then(resp => console.log(resp))
            .then(resp => setProductos( resp.docs.map(item => ({id: item.id, ...item.data()})) ))
            .catch(err => console.log(err)) 
            .finally(() => setLoading(false)) 
        }
    }, [catId])
    
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