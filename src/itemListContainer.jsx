import React from 'react'
import ItemCount from './componets/bag-icon/ItemCount';
import 'bootstrap/dist/css/bootstrap.min.css'


const ItemListContainer = () => {
  const handleAddToCart = (count) => {
   };

  return (
    <div>
      <ItemCount stock={5} initial={1} onAdd={handleAddToCart} />
    </div>
  );
};

export default ItemListContainer;