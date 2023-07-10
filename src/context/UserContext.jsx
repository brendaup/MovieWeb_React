import { createContext, useState } from "react";

export const UserContext = createContext()

export const useUserContext = () =>{
    const [state, setState] = useState({
        user: null /* {
            alias: "",
            email:"", 
            password: "",
        },  */
    })

    const addUser = (newUser) =>{
        /* setState({...state, user: [...state.user, newUser]}) */
        setState({ ...state, user: newUser });

    }

    return {...state, addUser}
}