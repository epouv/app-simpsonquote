import React from 'react';

const Quote = (props)=>{

  return <div>
      <h2>{props.character}</h2>
      <img src={props.src}/>
      <p>{props.quote}</p>
  </div>
}

export default Quote;