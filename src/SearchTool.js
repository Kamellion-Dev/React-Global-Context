//Step-1: Importing Context
import React, { useContext } from 'react'
import { Context } from './Store'

export default function SearchTool() {

  //Step-2: Grabbing State
  const [state, setState] = useContext(Context);

    async function ApiCall() {
        const res = await fetch('https://randomuser.me/api/?results=10');
        const data = await res.json();
        return data.results;
    }

    const handleClick = async() => {
        // Two awaits, one for fecthing, other for converting to json
        const users = await ApiCall();

        // Getting the required data from the json precisely
        const data = {
            name: users[0]["name"]["first"],
            email: users[0]["email"],
        };
        
        // passing data to be saved into the React Context
        setState(data)
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
