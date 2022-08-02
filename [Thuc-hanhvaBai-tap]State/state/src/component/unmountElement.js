import {useState} from "react";

function MountElement(){
    const [display,setDisplay] = useState(true)

    const changeStatus = () =>{
        let confirm = window.confirm(`Are you sure you want to delete`)
        if(confirm) {
            setDisplay(!display)
        }
    }

    return(
        <div>
            {display &&(<h1>Hello World</h1>)}
            <button onClick={changeStatus}>Display</button>
        </div>

    )
}

export default MountElement