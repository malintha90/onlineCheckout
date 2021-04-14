import React from 'react'
import '../styles/homeScreen.css'
import Products from './products';

const Home = () => {
    return (
        <div  className="homeScreen">
            <div className="homeScreenProduct">
                <Products/>
            </div>
        </div>
    )
}

export default Home
