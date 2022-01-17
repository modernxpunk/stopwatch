import React from 'react'
import { secondsToHHMMSS } from '../utils/date'

function Time({timer}) {
    return (
        <div className="time">
            <h1>{secondsToHHMMSS(timer)}</h1>
        </div>
    )
}

export default Time
