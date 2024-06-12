import { useEffect, useState } from 'react'
import axios from "axios";
 

function App() {

  const [state,setstate] = useState ([]);

  // useEffect(()=>{
  //   axios.get('https://randomuser.me/api/')
  //   .then(res=>{
  //     setstate(res.data.results)
  //     console.log(res.data.results)
  //   })
  // },[])

  const [fetchData, setFetchData] = useState(false);

  useEffect(() => {
    if (fetchData) {
      axios.get('https://randomuser.me/api/')
        .then(res => {
          setstate(res.data.results);
          setFetchData(false); 
        });
    }
  }, [fetchData]);

  const handleChange = () => {
    setFetchData(true); 
  };

  return (
    <>
      <div className='text-center'>
          <h1 className='text-center text-4xl mt-10'>Random user API</h1>

          <button className='px-4 py-2 bg-sky-500 mt-6 rounded-xl text-weight-bold text-center' onClick={handleChange}>
                      New User
          </button>
      </div>

      {
        state.length>0 &&
        state.map((el)=>(
            
          <div className='flex justify-center align-middle mt-11'>
              <div  style={{width:"auto", textAlign:"center",padding:"25px",boxShadow:"5px 5px 5px 5px gainsboro" , borderRadius:"20px"}}>
                <img src={el.picture.large} alt="Photo" className='h-50 w-50 m-auto rounded-full' style={{boxShadow:"5px 5px 5px 5px gainsboro" }}/>
                <h1 className='text-lg mt-7'>Name : {el.name.title} {el.name.first} {el.name.last}</h1>
                <h1 className='text-lg mt-1'>Email : {el.email} </h1>
                <h1 className='text-lg mt-1'>Phone Number : {el.phone}</h1>
                <h1 className='text-lg mt-1'>Location : {el.location.street.number} , {el.location.street.name} - {el.location.city}</h1>
              </div>
          </div>
        
        ))     
      }

    </>
  )
}

export default App
