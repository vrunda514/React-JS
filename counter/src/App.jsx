import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [state,setstate] = useState(0);

  function increase()
  {
     setstate(state+1)
  }
  function decrease()
  {
    // setstate(state-1)
    if(state>0)
      {
        setstate(state-1);
      }
  }
  return (
    
    <div className="App">
     <div className='timer'>
        <div className='time-sub'>
            <h1>{state}</h1>
            <button onClick={increase}>Increase</button>
            <button onClick={decrease} disabled={state === 0}>Decrease</button>
            {/* <button onClick={decrease} disabled={state === 0 ? true:false}>Decrease</button> */}
            
        </div>
     </div>
    </div>
  );
}

export default App;
