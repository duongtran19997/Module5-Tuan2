import {useState,useEffect} from 'react'

const colors = ['red', 'green', 'blue','pink','orange']

function ChangeBackground (){
    const [colorB,changeColorB] = useState('white');

    useEffect(()=>{
    const createColor = setInterval(()=>{
           const number = Math.floor(Math.random() * colors.length);
           let colorChange = colors[number]
           changeColorB(colorChange)
       },2000);
       return(()=>{
           clearInterval(createColor)
       })
    },[colorB])
    // console.log(colorB)
    return (
        <div style={{
            paddingTop: 20,
            width: 400,
            height: 80,
            margin: 'auto',
            backgroundColor:colorB
        }} >
            <button onClick={()=>{
                changeColorB('red')
            }}
            >Start</button>
        </div>
    )
}
export default ChangeBackground