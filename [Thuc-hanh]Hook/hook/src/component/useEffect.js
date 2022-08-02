import {useEffect,useState} from "react";

function Select (){
    const language = ['JavaScript', 'PHP', 'CSS', 'HTML']
    const [select,setSelect] = useState();
    const [selectValue,setSelectValue] = useState();
    useEffect(()=>{
        setSelect(selectValue)
        },[selectValue]
    )

    const handleChange = (e) =>{
        console.log(e.target.value);
        setSelectValue(e.target.value);
    }


    return(
        <div>
            <select onChange={(e)=>{handleChange(e)}}>
                {language.map((lan,index)=>
                    (<option key={index} value={lan} >{lan}</option>)
                )}
            </select>
            <h1>{select}</h1>
        </div>
    )
}

export default Select