import React from 'react'


const Car =(props)  =>{
    console.log(props);
    const {color, brand}=props;
  return (
    
    <div>
      {/* <p>My car Brand is {props.brand} and color is {props.color}</p> */}
      <p>My car Brand is {brand} and color is {color}</p>
    </div>
  )
}


export default Car

