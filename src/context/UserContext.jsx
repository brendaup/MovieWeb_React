import { createContext, useState } from "react";

export const UserContext = createContext()

export const useUserContext = () =>{
    const [state, setState] = useState({
        user: null 
    })

    const addUser = (newUser) =>{

        setState({ ...state, user: newUser });

    }

    return {...state, addUser}
}