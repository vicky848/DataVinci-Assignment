import './index.css'


import React from 'react'

const Details = () => {
  return (
    <div className='section'>
        <div className='price-row'>
            <div className='price'>499</div>
            <div className='badge'> Fresh & Organic </div>

        </div>

        <div className='short-desc'>
            <p>
                A healthy basket filled with fresh seasonal fruits and vegetables. 
          Perfect for your daily nutrition and family meals.
            </p>

        </div>
        <div className='meta'>
            <div> <strong>3kg (mixed  basket)</strong> </div>
            <div><strong>Includes:</strong> Apple, Banana, Orange, Grapes, Carrot, Broccoli, Tomato</div>

        </div>
        <div className="actions-mobile">
        <button className="btn primary">Add to Cart</button>
        <button className="btn outline">Buy Now</button>
      </div>
      
    </div>
  )
}

export default Details
