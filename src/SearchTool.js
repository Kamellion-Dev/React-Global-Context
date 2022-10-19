//Step-1: Importing Context
import React, { useContext } from 'react'
import { Context } from './Store'

export default function SearchTool() {

  //Step-2: Grabbing State
  const [state, setState] = useContext(Context);

    const handleClick = async() => {
        // Two awaits, one for fecthing, other for converting to json
        const person = await(await fetch('http://uinames.com/api/?ext')).json();
        setState(person);
    } 

  return (
    <div>
        <h1>im cooool component</h1>
        <h1>Name: {state.name} </h1>
        <h1>Email: {state.email} </h1>
        <button onClick={handleClick}>
            Lets Modify State
        </button>
    </div>
  )
}
