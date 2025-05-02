import React from 'react';
import PizzaImage from '../assets/premium_photo-1661762555601-47d088a26b50.avif';

const Hero = () => {
    return (
        <section
            className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-16 py-20 overflow-hidden bg-cover bg-center bg-no-repeat "
            style={{
                backgroundImage: `url(${PizzaImage})`,
            }}
        >
            <div className="hero-content text-center " style={
                {
                    marginTop: '-60px',
                }
            }>
                <h1 className="text-5xl text-green-900 font-serif ">Dive Into Delicious <br />Meal Dishes</h1>
                <div className="image-row flex flex-wrap justify-center gap-4" style={{
                    marginTop: '50px'
                }}>
                    <img src={PizzaImage} alt="Dish 1" className="h-40 object-cover" style={{
                        borderRadius: '20px',
                        boxShadow: '0 8px 12px rgba(0, 0, 0, 0.5',
                        width: '200px',
                    }} />
                    <img src={PizzaImage} alt="Dish 2" className="h-32 object-cover"
                        style={{
                            borderRadius: '20px',
                            boxShadow: '0 8px 12px rgba(0, 0, 0, 0.5',
                            width: '200px',
                        }} />
                    <img src={PizzaImage} alt="Dish 3" className="h-48 object-cover" style={{
                        borderRadius: '20px',
                        boxShadow: '0 8px 12px rgba(0, 0, 0, 0.5',
                        width: '200px',
                    }} />
                    <img src={PizzaImage} alt="Dish 4" className="h-36 object-cover" style={{
                        borderRadius: '20px',
                        boxShadow: '0 8px 12px rgba(0, 0, 0, 0.5',
                        width: '180px',
                    }} />
                </div>
            </div>
        </section>
    )
}

export default Hero;