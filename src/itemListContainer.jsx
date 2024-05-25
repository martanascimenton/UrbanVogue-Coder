import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

const ItemListContainer = ({ greeting }) => {
    return(
        <div className="container mt-5">
          <h1>{greeting}</h1>
        </div>
    )
}

export default ItemListContainer