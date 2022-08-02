import {useEffect,useState} from "react";

function Clock() {
    const [time,setTime] = useState('')

    useEffect(()=>{
      const timerID =  setInterval(()=>{
            let time = (new Date()).toUTCString()
            setTime(time)
        },1000)
        return () => clearInterval(timerID)
    },[time])

    return(
        <div>
            <h1>{time}</h1>
        </div>
    )
}

export default Clock