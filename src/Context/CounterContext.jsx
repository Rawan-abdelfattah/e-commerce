import { createContext, useState } from "react";

export let counterContext=createContext();

export function CounterContextProvider(props){
    const [username, setusername] = useState('');

    return<counterContextProvider value={username}>
        {props.children}
    </counterContextProvider>
}