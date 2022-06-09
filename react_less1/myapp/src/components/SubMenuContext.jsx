import React, { useState } from "react";

export const Context = React.createContext();

const ContextProvider = ({children}) => {
    const [valueSubMenu, setValueSubMenu] = useState('Menu');
    return (
        <Context.Provider value={[valueSubMenu, setValueSubMenu]}>
            {children}
        </Context.Provider>
    )
}

export default ContextProvider;
