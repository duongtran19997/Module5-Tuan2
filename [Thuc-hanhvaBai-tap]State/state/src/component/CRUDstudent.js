import {useRef, useState} from "react";


function CRUDstudent(){
    const [info,setInfo] = useState([]);
    const [name,setName] = useState();
    const [email,setEmail] = useState();


    const inputChange1 = (e) =>{
     setName(e.target.value)
    }
    const inputChange2 = (e) =>{
        setEmail(e.target.value)
    }

    const saveClick = () =>{
        setInfo( [...info,{
            name,
            email
        }])
    //bug in here
    };
    console.log(info);
    return(
        <div>
            <input name='name' onChange={inputChange1}/>
            <input name='email' onChange={inputChange2}/>
            <button onClick={saveClick}>save</button>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
                {info.map(value => (
                    <tr>
                        <td>{value.name}</td>
                        <td>{value.email}</td>
                    </tr>
                ))}

            </table>
        </div>
    )
}
export default CRUDstudent