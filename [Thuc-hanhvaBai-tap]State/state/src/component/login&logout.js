import {useState,useEffect} from "react";

function LoginLogout(){
    const [status,setStatus] = useState(false)
    const [nameButton,setNameButton] = useState('Login')
    const [greeting,setGreeting] = useState('Please Login')
    useEffect(() =>{
        if(status){
            setNameButton('Logout')
            setGreeting('Welcome')
        }else{
            setNameButton('Login')
            setGreeting('Please Login')
        }

    },[status])

    const handleClick = () =>{
        setStatus(!status)
    }

    return(
        <div>
            <h1>{greeting}</h1>
            <button onClick={handleClick}>{nameButton}</button>
        </div>
    )
}
export default LoginLogout