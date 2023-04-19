import React, {createContext,useContext,useEffect,useState} from "react";

const Context = createContext();

export const StateContext = ({children}) => {
    const [lang, setLang] = useState(localStorage.getItem('lang')?localStorage.getItem('lang'):'en');

    useEffect(() => {
        localStorage.setItem('lang',lang);
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