import React, { useContext } from 'react'
import { Context } from '../ContextApi'
import "./CountdownTimer.css"

export default function Result() {
    const { Skip, setSkip, count, setcount, Correct, setCorrect, setwrong, wrong } = useContext(Context)

    const restart = () => {
        setcount(1)
        setCorrect(0)
        setwrong(0)
    }

    return (
        <div>
            <div className="card">
                <div className="card-content">
                    <h1 className='quiz-modal__initial-header'>Total : {wrong + Skip + Correct} </h1>
                    <h1 className='quiz-modal__initial-header'>Question Skip : {Skip} </h1>


                    <h1 className='wrong'>Incorrect : {wrong} </h1>
                    <h1 className='Correct'>Correct : {Correct} </h1>

                    <button className='button' onClick={() => restart()}> Restart </button>
                </div>
            </div>
        </div>
    )
}
