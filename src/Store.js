// States Holder (Heart)

import React, {useState} from 'react'

const initialState = {
    name: 'Thomas weibi',
    email: "aasdasdas"
};

export const Context = React.createContext();

// Setter for the States
// Wrapper component which will provide our application our state,
// from anywhere, with "children" prop which is built prop in react we can grab
const Store = ({children}) => {
    // state, setState can be anything else
    const [state, setState] = useState(initialState);

    return(

        // Inside => Context.Provider will return children passed into Store
        <Context.Provider value={[state, setState]}>
            {children}
        </Context.Provider>
    );
};

export default Store;