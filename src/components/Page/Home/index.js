
import Checkbox from '../../ProductPage/Checkbox'
import Gallery from '../../ProductPage/Gallery'
import Hero from '../../ProductPage/Hero'
import Details from '../../ProductPage/Details'
import './index.css'


const Home  = () => {

return(
    <div className='page-container'>
        <div className='product-container'>
            <div className='product-item'>
                
             <Hero/>
            </div>
            <div>
                
                <Gallery/>
                <Details/>
            </div>

        </div>
        <div className='check-section'>
            <Checkbox/>

        </div>

    </div>

)


}

export default Home