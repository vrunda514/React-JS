import { useState } from "react";

function Project(){

    const [arr,setarr] = useState([]);
    const [category,setcategory]=useState("");
    const [name,setname]=useState("");
    const [price,setprice]=useState("");
    const [brand,setbrand]=useState("");
    const [des,setdes]=useState("");
    const [img,setimg]=useState("");
    const [show,setShow]=useState(false)

   

    const handleclick=()=>{
        let obj={
            category:category,
            name:name,
            price:price,
            brand:brand,
            des:des,
            img:img
        }
        setarr([...arr,obj]);
    }

    const handleshow=()=>{
        setShow(!show)
    }

    return(
        <div className="main">
          <div id="form">
            <h2>Product Details</h2>
            <div class="mb-3 mt-4">
                <input type="text" placeholder="Product Category" onChange={(el)=>setcategory(el.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            <div class="mb-3">
                <input type="text" placeholder="Product Name" onChange={(el)=>setname(el.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            <div class="mb-3">
                <input type="text" placeholder="Product Price" onChange={(el)=>setprice(el.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            <div class="mb-3">
                <input type="text" placeholder="Product Brand" onChange={(el)=>setbrand(el.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            <div class="mb-3">
                <textarea name="" rows={4} placeholder="Product Description" onChange={(el)=>setdes(el.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></textarea>
            </div>
            <div class="mb-3">
                <input type="text" placeholder="Product Image" onChange={(el)=>setimg(el.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            <button type="submit" class="btn btn-primary" onClick={handleclick}>Submit</button>
            <button type="submit" class="btn btn-warning" onClick={handleshow}>Show</button>
          </div>
          { show &&
            
            arr.map((el,index)=>(
                
               <div id="table">
                 <table>
                
                    <tr>
                        <th>Index</th>
                        <th>Category</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Brand</th>
                        <th>Description</th>
                        <th>Image</th>
                    </tr>
                    <tr>
                        <td>{index+1}</td>
                        <td>{el.category}</td>
                        <td>{el.name}</td>
                        <td>{el.price}</td>
                        <td>{el.brand}</td>
                        <td>{el.des}</td>
                        <td><img src={el.img} alt={el.name}  style={{height:'100px',width:'100px'}}/></td>
                    </tr>
                </table>
               </div>
            ))
          }
        </div>
    )
}

export default Project;