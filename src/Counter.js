import React,{useState,useEffect} from 'react'

function Counter() {
    const [count1,setCount1]=useState(0)

    const [count2,setCount2]=useState(0)

    useEffect(()=>{
        console.log('Mounting...');
        console.log('Count1...'+count1);
        console.log('Count2...'+count2);
        
        
    },[count1,count2])
    return (
        <div>
            <button onClick={()=>setCount1(count1+1)}>Increment</button>
            <h1>hello I am Component: {count1}</h1>

            <button onClick={()=>setCount2(count2+1)}>Increment</button>
            <h1>hello I am Component 2 {count2}</h1>
        </div>
    )
}

export default Counter
