import React from 'react'
import{Link} from 'react-router-dom';
import '../styles/navbar.css';

const Navbar = ({cartItems}) => {
    return (
      
        <div className="navbar">
            <div className="navbarLogo"><h2>Product CheckOut</h2></div>
            <ul className="NavbarLinks">
                <li>
                    <Link to='/cart' className="cartLink">
                        <i className="fas fa-shopping-cart">Cart <span className="cartLogoCount">{cartItems.length}</span></i>
                    </Link>                    
                </li>
                <li>
                    <Link to='/'>Back To Home</Link>
                </li>
            </ul>
            
        </div>
       
    )
}

export default Navbar;
