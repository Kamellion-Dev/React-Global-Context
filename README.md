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
