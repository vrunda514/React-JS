import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {

  const [statevote, setstatevote] = useState(0);
  const [statevote2, setstatevote2] = useState(0);
  const [statevote3, setstatevote3] = useState(0);
  const [statevote4, setstatevote4] = useState(0);

  function vote1()
  {
    setstatevote(statevote+1);
  }
  function rvote1()
  {
    setstatevote(statevote-1);
  }

  function vote2()
  {
    setstatevote2(statevote2+1);
  }

  function rvote2()
  {
    setstatevote2(statevote2-1);
  }

  function vote3()
  {
    setstatevote3(statevote3+1);
  }

  function rvote3()
  {
    setstatevote3(statevote3-1);
  }
  

  function vote4()
  {
    setstatevote4(statevote4+1);
  }

  function rvote4()
  {
    setstatevote4(statevote4-1);
  }
 
  const total = statevote+statevote2+statevote3+statevote4
  
  return (
    <div className="App">
      <div className='main'>
 
        <h1>Voting App</h1>

        <div className='vote1'>
            <h3>Vote 1</h3>
            <h3>{statevote}</h3>
            <button onClick={vote1}>Add</button>
            <button onClick={rvote1} disabled={statevote===0}>remove</button>

        </div>        
        <div className='vote1'>
            <h3>Vote 2</h3>
            <h3>{statevote2}</h3>
            <button onClick={vote2}>Add</button>
            <button onClick={rvote2} disabled={statevote2===0}>remove</button>

        </div>
        <div className='vote1'>
            <h3>Vote 3</h3>
            <h3>{statevote3}</h3>
            <button onClick={vote3}>Add</button>
            <button onClick={rvote3} disabled={statevote3===0}>remove</button>

        </div>
        <div className='vote1'>
            <h3>Vote 4</h3>
            <h3>{statevote4}</h3>
            <button onClick={vote4}>Add</button>
            <button onClick={rvote4} disabled={statevote4===0}>remove</button>

        </div>
          <h4>Total Vote :  {total}</h4>
      </div>
    </div>
  );
}

export default App;
