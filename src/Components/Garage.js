import React from 'react'
import Car from './Car'
import ReactDOM from 'react-dom';

const  Garage = () => {
//  const root= ReactDOM.render(<h1>Hellow World</h1>,document.getElementById('root'));
  return (
    <div>
      <h1> This is the Garage file</h1>
      <Car brand="Ford" color="Red"></Car>
    </div>
  )
}

export default Garage

