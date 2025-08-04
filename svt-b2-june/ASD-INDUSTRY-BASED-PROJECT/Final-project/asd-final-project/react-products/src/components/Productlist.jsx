import React from 'react'
import Productcard from './Productcard';

const Productlist = () => {
    const products = [
    { id: 1, name: 'Laptop', price: 6000, image: './src/assets/p1.jpg' },
    { id: 2, name: 'Phone', price: 6000, image: './src/assets/p1.jpg' },
    { id: 3, name: 'Watch', price: 6000, image: './src/assets/p1.jpg' },
    { id: 4, name: 'Tab', price: 6000, image: './src/assets/p1.jpg' },

  ];
  return <>
  <div className='container-fluid mt-4'>
    <div className='row'>
        {products.map(x=>(
            <Productcard product={x}/>
        ))}
    </div>
  </div>

  </>
}

export default Productlist