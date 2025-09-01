import Hamburger from 'hamburger-react'
import { useState } from 'react'
import './index.css'




const Navbar = () => {

    const [isOpen, setOpen] = useState(false)
  return (

    <nav className='navbar-container'>
   
        <div className='navbar-logo'>
            <img src='/images/DataVinci.png'  alt = "datavinci"  className='logo'/>
           
        </div>
        

        
           <button className='humburger-button'>
            <Hamburger toggled={isOpen} toggle={setOpen} />

        </button>
         
       
      
       
        <ul className={`unorder-list-container ${isOpen ? "open" : ""}`}>
         <li className='list'>Home</li>
        <li className='list'>Shop</li>
       <li className='list'>About</li>
      </ul>

      
         
      
    </nav>
  )
}

export default Navbar
