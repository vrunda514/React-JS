import { useState } from "react";



function Todo() {

    const [arr,setarr] = useState([]);
    const [work,setwork] = useState("");
    
    const handlechange=(el)=>{
        setwork(el.target.value)
    }

    const handleclick=()=>{
        // setarr([...arr,work]);
        let obj={
            task:work,
            iscom:false
        }
        setarr([...arr,obj]);
        setwork("");
    }

    return(
        <div className="main">
            <h1>ToDo App</h1>
            <input  type="text" value={work} onChange={handlechange} placeholder="Write somthing.." />
            <button onClick={handleclick}>Add</button>
            {
                arr.map((el)=>{
                    return <div className="task">
                        <h4>{el.task}</h4>
                        <div>
                            <button className="btn">Edit</button>
                            <button className="btn">Delete</button>
                        </div>
                    </div>
                })
            }
        </div>

    )
}

export default Todo;


