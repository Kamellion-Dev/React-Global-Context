# Usage
        <h1>im cooool component</h1>
        <h1>Name: {state.name} </h1>
        <h1>Email: {state.email} </h1>
        <button onClick={handleClick}>
            Lets Modify State
        </button>

# Better way to handle api

    async function ApiCall() {
        const res = await fetch('https://randomuser.me/api/?results=10');
        const data = await res.json();
        return data.results;
    }
    
    // Button Click Event
    const handleClick = async() => {
        // Two awaits, one for fecthing, other for converting to json
        const users = await ApiCall();
        alert(users[0]["name"]["first"])
    } 

# Accuratly storing from API

    async function ApiCall() {
        const res = await fetch('https://randomuser.me/api/?results=10');
        const data = await res.json();
        return data.results;
    }

    const handleClick = async() => {
        // Two awaits, one for fecthing, other for converting to json
        const users = await ApiCall();

        // Accurate !!
        const data = {
            name: users[0]["name"]["first"],
            email: users[0]["email"],
        };
        
        // passing data to be saved into the React Context
        setState(data)
    } 
