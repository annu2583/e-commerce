import React, { useEffect, useState } from 'react'


function BestSeller() {

  const [productsList, setProductsList] = useState([])

  useEffect(() => {
    getAllProducts()
  },[])

  const getAllProducts = async () => {

    await fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setProductsList(json))

  }

  return (
    <>
      <div className='container'>
        <div className='best_seller section'>
          <div className='seller_title'>
            <h4 className='seller_heading'>Shop Now</h4>
            <h3 className='heading_section'>Best Selling</h3>
          </div>
          <div className='products_section'>
            {
              productsList?.map((item, index) => {
                return (
                  <>
                  <div className='clothing_section'>
                  <p>{item?.title}</p>
                    <p>{item?.price}</p>
                    <img className='card_img' src={item?.image} />
                  </div>
            

                  </>
                )

              })
            }
            <div>

            </div>

          </div>
        </div>
      </div>

    </>
  )
}

export default BestSeller