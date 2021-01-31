import React, {useContext} from "react";
import {NameContext} from "../useContext";

const Name = () => {
    const name = useContext(NameContext);

        return (
            <div className="name">
                My name is {name.name} My surname is {name.surname}
            </div>
        )
}

export default Name
