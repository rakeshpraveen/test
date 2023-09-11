import React from 'react'

const Styling = () => {
    // const mainstyle={
    //     color:"blue",
    //     fontWeight:"bold"
    // }
    const state=React.useState();
    const [count,setCount]=React.useState(0);
    const IncNum=() =>{
      setCount(count+2);
    }
    const [data,setData]=React.useState("");
    const ChangeText1=() =>{
      setData("I am");
    }
    const ChangeText2=() =>{
      setData("Rakesh");
    }
  return (
    <>
    {/* <div className='main1'>
      <h1> Postal Services Borad </h1>
    </div>
    <div id='main2'>
      <h1> Postal Services Borad </h1>
    </div>
    <div>
      <h2> Postal Services Borad 123 </h2>
      My name is <span style={{fontFamily:'sans-serif', fontWeight:'bold'}}> RAKESH PRAVEEN</span>
    </div>
    <div style={mainstyle}>
      <h3> Postal Services Borad </h>
      My name is <span style={{fontFamily:'sans-serif', fontWeight:'bold'}}> RAKESH PRAVEEN</span>
    </div> */}
    {/* <button onClick={style={color:'blue'}}>button text</button> */}
    <div className='flex justify-center font-bold text-2xl'>
     <h1>{count}</h1>
    </div>
    <div className='flex justify-center'>
      <button className='bg-green-700 p-3 rounded-xl' onClick={IncNum}>Click Me!</button>
    </div>

    <div className='flex justify-center'>
      <button className='bg-green-700 p-3 rounded-xl' onClick={ChangeText1}>I am</button>
    </div>
    <div className='flex justify-center'>
      <button className='bg-green-700 p-3 rounded-xl' onClick={ChangeText2}>My Name</button>
    </div>
    <div className='flex justify-center font-bold text-2xl'>
     <h1> Output is : {data}</h1>
    </div>
    </>
  )
}

export default Styling
