import React from 'react'

const Productcard = ({ product }) => {

  return <>
    <div className='col-md-4'>
      <div className='card h-100'>
        <img src={product.image} className='card-img-top' alt='img' />
        <div className='card-body'>
          <h5 className='card-title'>{product.name}</h5>
          <p className='card-text'>{product.price}</p>
          <button className='btn btn-dark'>Buy</button>
        </div>
      </div>
    </div>

  </>
}

export default Productcard