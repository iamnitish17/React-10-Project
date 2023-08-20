import React from 'react'
import shoe from "../img/shoe_image.png";
import amazon from "../img/amazon.png";
import flipkart from "../img/flipkart.png";


const Hero = () => {
  return (
    <main className='hero container'>
        <div className='hero-content'>
            <h1>YOUR FEET DESERVE THE BEST</h1>
            <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>

            <div className='hero-btn'>
                <button>Shop Now</button>
                <button className='secondary-btn'>Category</button>  
            </div>

            <div className='shopping'>
                <p>Also Available On</p>
                <div className='brand-icons'>
                    <img src={flipkart} alt='flipkart-logo'></img>
                    <img src={amazon} alt='amazon-logo'></img>
                </div>
            </div>
        </div>
        <div className='hero-image'>
            <img src={shoe} alt='shoe-image'></img>
        </div>
    </main>
    );
}

export default Hero;
