import React, { useRef, useEffect, useContext, useState } from 'react'
import "./CountdownTimer.css"
import { Context } from '../ContextApi'
// import timer from "./music/timer.mp3"
export default function CountdownTimer() {
    // const { api } = useContext(Context)
    const [numbra, setnumbra] = useState(3)



    setInterval(() => {
        setnumbra(numbra - 1)
    }, 1000);






    return (
        <div className="container">
            <div id="circle">

                <h2 id="circleH2">{numbra}</h2>
            </div>

        </div>
    )
}
