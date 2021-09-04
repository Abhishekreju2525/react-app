import { useState } from "react";
import Employee from "./Employee";

function App() {
  const [count,setCount] =useState(0)
  
  const addCount=()=> {
    setCount(count+1)
  }
  let emp = [
  {name:'abhi',age:20},
  {name:'abhishek',age:21},
  {name:'Adi',age:14},
  ]
  return (
    <div className="App">
      
      <button onClick={addCount} >Add</button>
      {
        emp.map((obj,index)=>
           
            <Employee key={index} {...obj}/>
          )
        
        }

    </div>
  );
}
export default App;

