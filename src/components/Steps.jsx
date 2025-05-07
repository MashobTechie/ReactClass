import React, { useState } from 'react'
import '../styles/style.css'

// function handlePreviuos() {
//     alert('Previous')
// }
const messages = [
    'Learn react',
    'Apply for jobs',
    'Invest your new income'
]

// useState, useReducer -- Hooks


const Steps = () => {
    // let arr = useState()
    // console.log(arr);

    // const [step, useStep] = 1;
    // const step = 1
    const [step, setStep] = useState(1)





    return (
        <div className='steps'>

            <div className="numbers" >
                <div className={`${step >= 1 ? 'active' : ''}`}>1</div>
                <div className={`${step >= 2 ? 'active' : ''}`}>2</div>
                <div className={`${step >= 3 ? 'active' : ''}`}>3</div>
            </div>


            <p className="message">Step {step}: {messages[step - 1]}  </p>

            <div className="buttons" >
                <button className='previous bg-purple-700 text-white' onClick={() => {
                    if (step > 1) {
                        setStep(step - 1)
                    }
                }} >Previous</button>
                <button
                    className='next bg-purple-700 text-white'
                    onClick={() => {
                        if (step < 3) {
                            setStep(step + 1)
                        }
                    }}


                >Next</button>
            </div>
        </div>
    )
}

export default Steps
