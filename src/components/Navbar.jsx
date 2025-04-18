import React from 'react'

const Navbar = () => {
    return (
        <section className='flex justify-center items-center h-16 bg-gray-800'>
            <nav className='flex justify-between items-center bg-gray-500 w-4/5 text-white m-0  '>
                <div className='flex items-center'>
                    <h2 className='text-2xl'>New React</h2>
                </div>
                <div className='flex items-center gap-8'>
                    <ul className='flex gap-4'>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                    <div className='flex items-center gap-4'>
                        <button className='p-4 bg-red-600 w-16'>Log In</button>
                        <button className='p-4 bg-red-600 w-16'>SignUp</button>
                    </div>
                </div>
            </nav>
        </section>
    )
}

export default Navbar