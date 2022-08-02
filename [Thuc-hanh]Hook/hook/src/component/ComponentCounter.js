import {Component, useState} from "react";

function ComponentCounter() {
    const [counter,setCounter] = useState(0);

    const handleClick1 = ()=>{
        setCounter(counter + 1)
    }
    const handleClick2 = ()=>{
        setCounter(counter +2)
    }

    return(
        <div>
            <h1>{counter}</h1>
            <button onClick={handleClick1}>Add1</button>
            <button onClick={handleClick2}>Add2</button>
        </div>
    )
}
export default ComponentCounter;