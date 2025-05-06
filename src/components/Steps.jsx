/* eslint-disable react-hooks/rules-of-hooks */
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
    const [step, useStep] = useState(1)





    return (
        <div style={{
            width: '400px',
            padding: '2em',
            backgroundColor: 'white',
            margin: '20px auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '4rem',
            border: '4px solid red',
            justifyContent: 'space-around',
            alignItems: 'center',
        }}>

            <div className="numbers" style={{
                display: 'flex',
                gap: ' 120px'
            }}>
                <div className={`${step >= 1 ? 'active' : ''}`}>1</div>
                <div className={`${step >= 2 ? 'active' : ''}`}>2</div>
                <div className={`${step >= 3 ? 'active' : ''}`}>3</div>
            </div>


            <p className="message">Step {step}: {messages[step - 1]}  </p>

            <div className="buttons" style={{
                display: 'flex',
                alignItems: 'center',
                gap: '80px'
            }}>
                <button style={{
                    backgroundColor: '#7950f2',
                    color: '#fff',
                    width: '80px'

                }} onClick={() => {
                    useStep((prevStep) => {
                        if (prevStep === 1) {
                            return 3
                        } else {
                            return prevStep - 1
                        }
                    })
                }} >Previous</button>
                <button
                    style={{
                        backgroundColor: '#7950f2',
                        color: '#fff',
                        width: '80px'
                    }}
                    onClick={() => {
                        useStep((prevStep) => {
                            if (prevStep === 3) {
                                return 1
                            } else {
                                return prevStep + 1
                            }
                        })
                    }}

                     
                >Next</button>
            </div>
        </div>
    )
}

export default Steps
