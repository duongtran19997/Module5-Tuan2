import {useState,useEffect} from "react";

function CountDown() {
    const [countTime,setCountTime] = useState(10)

    useEffect(()=>{
    const timer = setInterval(()=>{
            setCountTime(prevState => prevState - 1)
        },1000)

        return ()=>(clearInterval(timer))
    },[countTime])

    const handleChange = (time) =>{
        if(time ==0){
            alert('Time out')
            setCountTime(10)
        }
    }
    handleChange(countTime)
    return(
        <div>
            <h1 >{countTime}</h1>
        </div>
    )
}

export default CountDown