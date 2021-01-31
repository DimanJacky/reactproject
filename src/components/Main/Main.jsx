import React from "react";
import {UseStateComponent} from "../hook/useState/useState";
import {UseEffect} from "../hook/useEffect/useEffect";
import {UseContext} from "../hook/useContext/useContext";

export const Main = () => {
    return (
        <div>
            {/*<UseStateComponent />*/}
            {/*<UseEffect />*/}
            <UseContext />
        </div>
    );
}
