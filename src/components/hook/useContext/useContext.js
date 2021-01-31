import React from "react";
import Main from "./components/Main";

export const NameContext = React.createContext();

export const UseContext = () => {
    const fullName = {
            name: "Ivan",
            surname: "Sidoroff"
        };

    return (
        <NameContext.Provider value={fullName}>
            <Main />
        </NameContext.Provider>
    )
}
