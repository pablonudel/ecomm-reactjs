import React from 'react'
import './ItemListContainer.css'

const ItemListContainer = ({greeting}) => {
    
  return (
    <div className='container-fluid bg-light hero'>
        <div className='container'>
            {greeting}
        </div>
    </div>
  )
}

export default ItemListContainer