import {useEffect, useState} from "react";

function ButtonClick  (){
    const [number,setNumber] = useState(0)

   const Add1 = () =>{
        setNumber(number + 1)
   }

   const Decrease1 = () =>{
        setNumber(number - 1)
   }

    return(
        <div>
            <button onClick={Add1}>Add</button>
            <h1>{number}</h1>
            <button onClick={Decrease1}>Decrease</button>
        </div>
    )
}

export default ButtonClick