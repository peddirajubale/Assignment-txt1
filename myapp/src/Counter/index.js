// Create a React component called Counter that displays a counter value and two buttons to increment and decrement the counter.

import React from 'react'
import { useState } from 'react'
import './index.css'

export default function Counter() {
    const [count, setCount]=useState(0)

    const onIncreent=()=>{
        setCount(count+1)
    }
    const onDecreent=()=>{
        setCount(count-1)
    }
    const onReset=()=>{
        setCount(0)
    }
  return (
    <div className='container'>
      <div className='counter-container'>
        <h1>Counter</h1>
        <p>{count}</p>
        <button type='button' onClick={onIncreent}>Increment</button>
        <button type='button' onClick={onReset}>Reset</button>
        <button type='button' onClick={onDecreent}>Decrement</button>
      </div>
    </div>
  )
}
