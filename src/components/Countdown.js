import React, { useEffect, useRef, useState } from 'react'
// import { interval, Observable } from 'rxjs'
import { secondsToHHMMSS } from '../utils/date'

// const timer = new Observable(observer => {
//     let counter = 0
//     const x = setInterval(() => {
//         observer.next(++counter);
//     }, 1000)
//     return () => {
//         clearInterval(x)
//         counter = 0
//     }
// });

function Countdown() {
    const [time, setTime] = useState(0)
    const [isWait, setIsWait] = useState(false)
    const [isStart, setIsStart] = useState(false)
    const [clicked, setClicked] = useState(false)
    const [startClick, setStartClick] = useState(null)

    useEffect(() => {
        let interval = null

        if (!isStart) {
            setTime(0)
            if (isWait) {
                setIsWait(false)
            } else {
                clearInterval(interval)
                // interval && interval.unsubscribe()
            }
        } else if (!isWait) {
            interval = setInterval(() => {
                setTime(time => time + 1)
            }, 1000)
            // interval = timer.subscribe({
            //     next(x) {
            //         setTime(x)
            //     }
            // })
        }

        return () => {
            clearInterval(interval)
            // interval && interval.unsubscribe()
        }

    }, [isStart, isWait])

    const handleWait = () => {
        if (!clicked) {
            setStartClick(new Date().getTime())
        } else {
            const endClick = new Date().getTime()
            const delay = endClick - startClick
            if (delay < 300) {
                setIsWait(!isWait)
            } else {
                setClicked(true)
            }
        }

        setClicked(!clicked)
    }

    return (
        <div className="countdown">
            <div className="time">
                <h1>{secondsToHHMMSS(time)}</h1>
            </div>
            <div className="buttons">
                <button onClick={() => setTime(0)} disabled={!isStart}>
                    Reset
                </button>
                <button id="start" onClick={() => setIsStart(!isStart)}>
                    {isStart ? "Stop" : "Start"}
                </button>
                <button onClick={handleWait} disabled={!isStart}>
                    {isWait ? "Resume" : "Wait"}
                </button>
            </div>
        </div>
    )
}

export default Countdown


// let start = new Date().getTime()
// if (!clicked) {
//     start = new Date().getTime();

//     const end = new Date().getTime();
//     const diff = end - start;
//     console.log(diff)
// }