import './index.css'

const Hero = () => {
  return (
    <div className='hero-container'>
        <img src='/images/juan.jpg' alt='vegitable-fruits' className='vegitable-fruits-image'/>
        <div className='hero-text'>
            <h1>Fresh Organic Fruits & Vegetables</h1>
            <p>Directly from farm to your table, 100% natural & healthy.</p>
            <button className='shop-now-button'>Shop Now</button>

        </div>
      
    </div>
  )
}

export default Hero
