import React from 'react'

fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>console.log(json))
function BestSeller() {
  return (
    <>
    <div className='container'>
    <div className='best_seller section'>
      <div className='seller_title'>
      <h4 className='seller_heading'>Shop Now</h4>
      <h3 className='heading_section'>Best Selling</h3>
      </div>

    </div>
    </div>
    
    </>
  )
}

export default BestSeller