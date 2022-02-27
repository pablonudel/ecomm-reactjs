import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './ItemListContainer.css'

const ItemListContainer = () => {

  const mostrarCantidad = (cant) => {
    console.log('Cantidad agregada: ' + cant);
  }

  return (
    <div className='container-fluid bg-light hero'>
       <div className='container'>
         <div className="row row-cols-4">
           <div className="col">
            <div className="card">
              <img src="http://placehold.jp/eeeeee/5c5c5c/400x300.jpg?text=ITEM 2" className='card-img-top' alt="" />
              <div className="card-body">
                <h6 className='card-title'>Item 2</h6>
                <p className='card-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur a tenetur at nihil magni.</p>
                <ItemCount stock={0} initial={1} onAdd={mostrarCantidad}/>
              </div>
            </div>
           </div>
           <div className="col">
            <div className="card">
              <img src="http://placehold.jp/eeeeee/5c5c5c/400x300.jpg?text=ITEM 2" className='card-img-top' alt="" />
              <div className="card-body">
                <h6 className='card-title'>Item 2</h6>
                <p className='card-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur a tenetur at nihil magni.</p>
                <ItemCount stock={10} initial={1} onAdd={mostrarCantidad}/>
              </div>
            </div>
           </div>
         </div>
       </div>
    </div>
  )
}

export default ItemListContainer