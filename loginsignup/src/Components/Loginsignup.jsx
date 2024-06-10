import { useState } from "react";
import Swal from 'sweetalert2'

function Loginsignup(){

    const [state,setstate] = useState ("login");
    const [name,setname] =useState("");
    const [email,setemail] =useState("");
    const [password,setpassword] =useState("");
    const [lgname,setlgname] =useState("");
    const [lgpass,setlgpass] =useState("");

    const [arr,setarr] = useState([]);

    const handleclick=()=>{
        let obj ={
            name:name,
            email:email,
            password:password
        }
        setarr([...arr,obj]);
        setstate("login");
    }
    const handleloginclick=()=>{

        let data = arr.filter(el => el.name == lgname && el.password == lgpass);

        if(data.length>0)
        {
            Swal.fire("login sccessfully..");
        }
        else
        {
            Swal.fire("login unsccessfully..");
        }
    }

    return(

        <div>
            {state=='login'?
                <div class="login-page">
                    <div class="form">
                        
                    <form class="login-form">
                        <input type="text" placeholder="username" onChange={(el)=>setlgname(el.target.value)}/>
                        <input type="password" placeholder="password"  onChange={(el)=>setlgpass(el.target.value)}/>
                        <button onClick={handleloginclick}>login</button>
                        <p class="message" onClick={()=>setstate("signup")}>Not registered? <a href="#">Create an account</a></p>
                    </form>
                    </div>
                </div>
            :
            <div>
                 <div class="login-page">
                    <div class="form">
                        {/* <h1>Signup</h1> */}
                    <form class="login-form">
                        <input type="text" placeholder="username" onChange={(el)=>setname(el.target.value)}/>
                        <input type="text" placeholder="Email" onChange={(el)=>setemail(el.target.value)}/>
                        <input type="password" placeholder="password"onChange={(el)=>setpassword(el.target.value)}/>
                        <button onClick={handleclick}>Signup</button>
                        <p class="message" onClick={()=>setstate("login")}>Already registered? <a href="#">Login</a></p>
                    </form>
                    </div>
                </div>
               
            </div>    
            }
        </div>
    )

  
}

export default Loginsignup;