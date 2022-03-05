import React from 'react'
import './ItemListContainer.css'
import ItemList from '../../components/ItemList/ItemList';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';

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