const productos = [
    {id: 1, nombre:'Item 1', descripcion:'Lorem ipsum dolor sit amet consectetur adipisicing elit.', imagen:'http://placehold.jp/eeeeee/5c5c5c/400x300.jpg?text=ITEM 1', precio: 8000, stock: 3},
    {id: 2, nombre:'Item 2', descripcion:'Lorem ipsum dolor sit amet consectetur adipisicing elit.', imagen:'http://placehold.jp/eeeeee/5c5c5c/400x300.jpg?text=ITEM 2', precio: 15000, stock: 5},
    {id: 3, nombre:'Item 3', descripcion:'Lorem ipsum dolor sit amet consectetur adipisicing elit.', imagen:'http://placehold.jp/eeeeee/5c5c5c/400x300.jpg?text=ITEM 3', precio: 22000, stock: 7},
    {id: 4, nombre:'Item 4', descripcion:'Lorem ipsum dolor sit amet consectetur adipisicing elit.', imagen:'http://placehold.jp/eeeeee/5c5c5c/400x300.jpg?text=ITEM 4', precio: 35000, stock: 9}
  ]
  
export const getFetch = new Promise((res, rej)=>{
    let url = 'api'
    if(url === 'api'){
      setTimeout(() => {
        res(productos)
      }, 3000);
    }else{
      rej('400 error')
    }
  })