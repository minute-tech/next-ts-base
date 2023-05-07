'use client';
 
import { useState } from 'react';
 
export default function Counter() {
  const [count, setCount] = useState(0);
 
  return (
    <div style={{backgroundColor: "lightblue", padding: "15px"}}>
        <h3>Counter Example</h3>
        <u>Click count:</u> <span>{count}</span>
        <br/><br/>
        <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}