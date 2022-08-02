import {useState,useEffect} from "react";

const cars = ['Mercedes','Toyota','BMW','Honda','Porsche']
const colors =['red','green','blue','yellow','black']
function selectCar(){
    const [car,setCar] = useState()
    const [color,setColor] = useState()

    const handleClickCar = (e) => {
        setCar(e.target.value);
    }

    const handleClickColor = (e) => {
        setColor(e.target.value);
    }

    return(
        <div>
            <select onClick={handleClickCar}>
                {cars.map((car,index) =>(<option key={index} value={car}>{car}</option>))}
            </select>
            <select onClick={handleClickColor}>
                {colors.map((col,index) =>(<option key={index} value={col}>{col}</option>))}
            </select>
            {car && (<h1 style={{backgroundColor: color}}>You pick a {car} with {color} color</h1>)}
        </div>
    )
}
export default selectCar