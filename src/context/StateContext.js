import React, {createContext,useContext,useState} from "react";

const Context = createContext();

export const StateContext = ({children}) => {
    const [lang, setLang] = useState('en');

    return (
        <Context.Provider
            value={{
                setLang,
                lang
            }}
        >
            {children}
        </Context.Provider>
    )
}

export const useStateContext = () => useContext(Context);