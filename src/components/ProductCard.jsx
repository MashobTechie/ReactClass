import React from 'react';


const ProductCard = (props) => {
    console.log(props)
    return (
        <div className='flex flex-col items-center justify-center'>
            <img src={props.image} className='w-20' />
            <h2>{props.name}</h2>
            <p>{props.ingredients}</p>

            <h3>{props.price}</h3>
        </div>
    )
}

export default ProductCard;

