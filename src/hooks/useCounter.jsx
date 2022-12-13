import { useState } from "react";


export const useCounter=(inicitialValue =10)=>{
    const [counter, setCounter] = useState(inicitialValue);
    const increment =(value =1)=>{
        setCounter(counter +value);
    }
    const decrement =(value=1)=>{
        if (counter > 0) {
            setCounter(counter - value);
        }
        
    }
    const reset =()=>{
        setCounter(inicitialValue);
    }
    return{
        counter,
        increment,
        reset,
        decrement
    }
}