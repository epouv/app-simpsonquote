import './App.css';
import Quote from './components/Quote';
import React, { useEffect, useState } from 'react';

function App() {

  const [simpsonQuote, setSimpsonQuote] = useState([]);

  useEffect(()=>{
    fetch ('https://simpsons-quotes-api.herokuapp.com/quotes?count=1')
    .then((resp)=>resp.json())
    .then((data)=>setSimpsonQuote(data)); 
  },[]); 

  const HandleChange = ()=>{
    
    fetch ('https://simpsons-quotes-api.herokuapp.com/quotes?count=1')
    .then((resp)=>resp.json())
    .then((data)=>setSimpsonQuote(data));
}

  return (
    <div>
        {
          simpsonQuote != [] &&
          simpsonQuote.map((simpson)=>{
            return(
              <div>
                <Quote character={simpson.character} src={simpson.image} quote={simpson.quote} />
                <button onClick={HandleChange}>Changer de personnage</button>
              </div>
            )
          })
        }    
    </div>
  );
}

export default App;
