import React from 'react'
import './ItemListContainer.css'
import ItemList from '../../components/ItemList/ItemList';

const ItemListContainer = () => {

  return (
    <div className='container-fluid bg-light hero'>
       <div className='container'>
         <ItemList />
       </div>
    </div>
  )
}

export default ItemListContainer