import { createContext, useEffect, useState } from "react";

//creating a context API
export const DarkModeContext = createContext();

//to use the context API we need this below provider to wrap our application in app.js
export const DarkModeContextProvider = ({children}) => {
    const[darkMode,setDarkMode] = useState(
        JSON.parse(localStorage.getItem("darkMode")) || false);     //JSON.parse will return false as boolean not a string
                                                                    //localStorage to check if it was visited before just take value darkMode
    const toggle = () =>{
        setDarkMode(!darkMode)
    }
    
    useEffect(()=>{
        localStorage.setItem("darkMode",darkMode)    //everytime it changes darkMode it just set in localStorage again
    },[darkMode]);

    return(
        <DarkModeContext.Provider value ={{darkMode, toggle}}>
            {children}
        </DarkModeContext.Provider>
    );
};
