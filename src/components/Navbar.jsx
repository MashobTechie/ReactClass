import React from 'react'

const Navbar = () => {
    return (<section className=' bg-orange-100 font-serif'>
        <section className='flex justify-center items-center h-16 bg-orange-100'>
            <nav className='flex justify-between items-center w-4/5 text-green-700  m-0 bg-orange-100'>
                <div className='flex items-center'>
                    <h2 className='text-2xl font-bold'>Logo</h2>
                </div>
                <div className='flex items-center gap-8'>
                    <ul className='flex gap-4'>
                        <li className='hover:underline cursor-pointer'>Home</li>
                        <li className='hover:underline cursor-pointer'>Menu</li>
                        <li className='hover:underline cursor-pointer'>Services</li>
                        <li className='hover:underline cursor-pointer'>Contact</li>
                    </ul>
                </div>
                <div>
                    <button className=' bg-white rounded   text-green-600 '
                        style={{
                            'border': '2px solid green',
                            'borderRadius': '24px',
                            'width': '120px',
                            'padding': '4px ',
                        }}
                    >Sign Up</button>
                </div>
            </nav>
        </section>
        <hr className=' bg-gray-300'
            style={{
                'height': '2px',
                'border': 'none',

                'width': '80%',
                'marginTop': '0px',
                'marginBottom': '0px',
                'marginLeft': 'auto',
                'marginRight': 'auto',
            }} />


    </section>

    )
}

export default Navbar