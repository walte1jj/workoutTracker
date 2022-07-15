import React, {useContext, createContext, useState} from "react";

const navigationContext = createContext();

export function NavigationProvider({children}) {
    const [page, setPage] = useState("hello")

    return (
        <navigationContext.Provider value={{page: page, setPage: setPage}}>{children}</navigationContext.Provider>
    )
}

export function useNav() {
    return useContext(navigationContext)
}