import React from 'react'

function Buttons({isStart, setIsStart}) {
    return (
        <div className="buttons">
            <button>Reset</button>
            <button className="startButton" onClick={() => setIsStart(!isStart)}>
                {isStart ? "Stop" : "Start"}
            </button>
            <button>Wait</button>
        </div>
    )
}

export default Buttons
