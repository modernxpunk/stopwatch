
// 13:1:3 -> 13:01:03
function isLeadingZero(time) {
    return time.split(':').map(t => t < 10 ? '0' + t : t).join(':')
}

export function secondsToHHMMSS(seconds) {
    const h = Math.floor(seconds / 3600)
    const m = Math.floor(seconds % 3600 / 60)
    const s = Math.floor(seconds % 3600 % 60)
    
    const timer = isLeadingZero(`${h}:${m}:${s}`)

    return timer
}