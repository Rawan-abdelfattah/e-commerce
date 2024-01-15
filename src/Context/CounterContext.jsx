import { counter } from "@fortawesome/fontawesome-svg-core";
import { createContext, useState } from "react";

export let counterContext=createContext();

export function CounterContextProvider(props){
    const [counter, setcounter] = useState(0);
    function increase(){
        setcounter(counter+1)
    }

    return<counterContextProvider value={{counter,increase}}>
        {props.children}
    </counterContextProvider>
}