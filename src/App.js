import Counter from "./Counter";
import { useState } from "react";
function App() {
  const [state,setState]=useState(false)
  return(
    <div classname="App">
      <h1 onClick={()=>setState(!state)}> <button>Show/Hide</button> </h1>
      

    {state && <Counter/>  }

    </div>
  );
}

export default App;
