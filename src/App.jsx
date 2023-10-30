
import './App.css';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useState } from 'react';


function App() {
  const [amount, setAmount]=useState(0)
  const [rate, setRate]=useState(0)
  const [time , setTime]=useState(0)
  const[interest ,setInterest]=useState(0)

const calculate=(e)=>{
  const output=amount*time*rate/100
  console.log(output);
  setInterest(output)
}

const reset=(e)=>{
  setAmount(0)
  setRate(0)
  setTime(0)
  setInterest(0)
}
  return (
    <div className="App">
      <div className="container">
        <div className="headings">
          <h1>Simple  Interest Calculator</h1>
         <p>Calculate your interest with us 😀 </p>
        </div>
        <div className="total">
          <h3>&#8377; {interest}</h3>
          <p>Your Total Interest</p>
        </div>

        <div className="form">
<form >
  <div className="input">
  <TextField className="inbox"  onChange={(e)=>setAmount(e.target.value)} value={amount || ""} label=" Amount" variant="filled" /> 
  <TextField className="inbox" onChange={(e)=>setRate(e.target.value)} value={rate || ""} label="Rate of Interest" variant="filled" />
  <TextField className="inbox" onChange={(e)=>setTime(e.target.value)}  value={time || ""} label="Time Period" variant="filled" />
    </div>
    <div className="button">
    <Button id="btn1" onClick={calculate} variant="contained">CALCULATE</Button>
<Button id="btn2" onClick={reset} variant="outlined">RESET</Button>
    </div>
</form>
        </div>
      </div>
    </div>
  );
}

export default App;
