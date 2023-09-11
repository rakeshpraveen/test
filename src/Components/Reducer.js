import React, {useReducer} from 'react'

const reducer1 = (state , action) =>{
    switch(action.type){
    case "INCREMENT": 
        return {count : state.count+1 , showText : state.showText};
    
    case "toggleShowText":
        return {count : state.count , showText : !state.showText};
    
    default : return state;
    }
};

const Reducer = () => {
const [state, dispatch] = useReducer(reducer1 , {count:0 , showText : true});
  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={() =>{
        dispatch({type : "INCREMENT"});
        dispatch({type : "toggleShowText"});
      }}> Click here</button>
      
      {state.showText && <p> This is the text beign displayed</p>}
    </div>
  )
}

export default Reducer