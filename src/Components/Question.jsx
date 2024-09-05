import React, { useContext, useEffect } from 'react'
import Option from './Option'
import { Context } from '../ContextApi'

export default function Question() {

    const { api, data, count, Next, setcount, Correct, setCorrect, setwrong, wrong, setCountdown, Countdown } = useContext(Context)


    useEffect(() => {
        api();
    }, [count, Countdown]);



    return (
        <div>
            <section className="quiz-modal">
                <section className="quiz-modal__initial">
                    <h1 className="quiz-modal__initial-header">Question : {count}</h1>
                    {data ? data.results.map((e) => { return (<p className="quiz-modal__initial-paragraph">{e.question}</p>) }) : ""}
                </section>




            </section>
        </div>
    )
}
