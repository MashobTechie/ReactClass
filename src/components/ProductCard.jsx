import React from 'react';
import Pizza from '../assets/premium_photo-1661762555601-47d088a26b50.avif';
 
const ProductCard = () => {
    return (
        <div>
            <img src= {Pizza} alt=""  className='w-[200px] h-full'/>

            <h2>Pizza Spinnacci</h2>
            <p>Contains tomato, mozarella, spinnach , and ricotta cheese</p>
        </div>
    )
}

export default ProductCard;

// props