import { useState } from "react";
import React from 'react'
import axios from "axios";
import {useRef} from "react"
import { useEffect } from "react";

export function AdditionNumbers ()  {
    const myRefs = useRef(null);
    const [first, setFirst] = useState();
    const [second, setSecond] = useState();
    const [sum, setSum] = useState();
 
    const addNumber = () => {
        axios.post("http://localhost:8000/api/profile/addNumber", {"first":first, "second":second})
            .then(data =>{ console.log(data.data.result) ; setFirst(data.data.result);
              })
        }
    
    return (
      
            <>
            <input type="text" id="first" value={first} onChange={(e) =>{setFirst(e.target.value)} } />
            <input type="text" id="second" onChange={(e) =>{setSecond(e.target.value)} }/>
            <button onClick = { addNumber }> Add </button>
            </>
        
    );
}