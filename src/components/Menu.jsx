import React from 'react'
import ourMeal from '../assets/premium_photo-1661762555601-47d088a26b50.avif'
import ProductCard from './ProductCard'

const Menu = () => {
  return (
    <div>
      <h2>Breakfast Special Menu</h2>
      <ProductCard
        image={ourMeal}
        name="Crispy Chicken Poblano"
        ingredients="Beef , Chicken, Turkey"
        price="300 USD"
      />

      <ProductCard
        image={ourMeal}
        name="Focaccia"
        ingredients="Bread with italian olive oil and rosemary"
        price="6 USD"

      />




    </div>

  )
}

export default Menu
