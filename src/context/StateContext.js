import React, {createContext,useContext,useEffect,useState} from "react";

const Context = createContext();

export const StateContext = ({children}) => {
    const [lang, setLang] = useState('en');

    useEffect(() => {
    }, [lang])
    

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