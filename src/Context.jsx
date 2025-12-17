import { createContext, useState } from "react";
export const Context = createContext();

export default function ContextProvider({children}) {
    // theme is now a boolean: true = dark, false = light
    const [theme, setTheme] = useState(true);
    const [lang, setLang] = useState("es")

    return (
        <Context.Provider value={{theme, setTheme, lang, setLang}}>
            {children}
        </Context.Provider>
    )
}
