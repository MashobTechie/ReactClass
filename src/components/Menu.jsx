import React from 'react'
import pizzaData from '../data'
// import pizzaData from '../data'
// import ourMeal from '../assets/premium_photo-1661762555601-47d088a26b50.avif'
// import ProductCard from './ProductCard'

const Menu = () => {
  return (
    <div>
      <h2>Breakfast Special Menu</h2>




      {/* <ProductCard
        image={ourMeal}
        name="Crispy Chicken Poblano"
        ingredients="Beef , Chicken, Turkey"
        price="300 USD"
      />

      <ProductCard
        image={ourMeal}
        name="Focaccia"
        

      /> */}

      {/* <ProductCard image={ourMeal}
/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/> */}



      <ul>
        {
          pizzaData.map((single) => (
            <li>
              <div className='flex flex-col items-center justify-center'>
                <img src={single.photoName} className='w-20' />
                <h2>{single.name}</h2>
                <p>{single.ingredients}</p>

                <h3>{single.price}</h3>
              </div>
            </li>
          ))
        }

      </ul>




    </div>

  )
}

export default Menu
