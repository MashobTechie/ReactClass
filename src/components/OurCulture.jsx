import React from 'react'
import ourImage from '../assets/premium_photo-1661762555601-47d088a26b50.avif'

const OurCulture = () => {
    return (
        <div className='bg-orange-100 font-serif w-full '>

            <h2 className='text-green-900  text-center text-4xl'>Our Culture</h2>


            <div className='image-row flex flex-wrap justify-center gap-12 ' style={{
                marginTop: '20px'
            }}>
                <img src={ourImage} className="h-38 object-cover" style={{
                    borderRadius: '20px',
                    boxShadow: '0 8px 12px rgba(0, 0, 0, 0.5',
                    width: '180px',



                }} />
                <img src={ourImage} className="h-32 object-cover " style={{
                    borderRadius: '20px',
                    boxShadow: '0 8px 12px rgba(0, 0, 0, 0.5',
                    width: '120px',
                    marginTop: '15px'

                }} />
                <img src={ourImage} className="h-40 object-cover" style={{
                    borderRadius: '20px',
                    boxShadow: '0 8px 12px rgba(0, 0, 0, 0.5',
                    width: '180px',


                }} />
                <img src={ourImage} className="h-32 object-cover" style={{
                    borderRadius: '20px',
                    boxShadow: '0 8px 12px rgba(0, 0, 0, 0.5',
                    width: '120px',
                    marginTop: '15px'


                }} />
                <img src={ourImage} className="h-40 object-cover" style={{
                    borderRadius: '20px',
                    boxShadow: '0 8px 12px rgba(0, 0, 0, 0.5',
                    width: '180px',


                }} />
                <img src={ourImage} className="h-32 object-cover" style={{
                    borderRadius: '20px',
                    boxShadow: '0 8px 12px rgba(0, 0, 0, 0.5',
                    width: '120px',
                    marginTop: '15px'


                }} />


            </div>

        </div>
    )
}

export default OurCulture
